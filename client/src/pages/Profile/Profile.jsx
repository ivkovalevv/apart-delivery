import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../index";
import Schedule from "../../components/Schedule/Schedule";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import { observer } from "mobx-react-lite";
import "./profile.css";
import { activeIntervals } from "../../utils/functions";
import ModalConfirm from "../../components/Modals/ModalConfirm/ModalConfirm";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import MailSVG from "../../components/SVG/MailSVG";
import { setOrdersHistory } from "../../http/userAPI";
import { check } from "../../http/userAPI";
import Loader from "../../components/UI/Loader/Loader";

const Profile = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const userOrders = user.userOrders;
  const [isModalConfirmOpened, setIsModalConfirmOpened] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(data);
        user.setIsAuth(true);
        user.setUserOrders(JSON.parse(data.ordersHistory) || []);
      })
      .catch((error) => {
        if (error.response?.status !== 401) {
          console.error("Check error:", error);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const modalConfirmOptions = {
    title: "Выход из Личного кабинета",
    description: "Вы действительно хотите выйти из личного кабинета?",
    function: () => {
      user.setUser({});
      user.setIsAuth(false);
      localStorage.removeItem("token");
      navigate("/login", { replace: true });

      setIsModalConfirmOpened(false);
    },
    buttons: 2,
  };

  function exit() {
    setIsModalConfirmOpened(true);
  }

  if (userOrders) {
    const statusFlow = ["Принят", "Готовится", "В пути", "Доставлен"];

    userOrders.map((order) => {
      const timeInterval = order.status === "Принят" ? 10000 : 1200000;

      if (Object.keys(activeIntervals).includes(order.id)) {
        return;
      }

      if (order.status === "Доставлен") {
        return;
      }

      if (order.status === "Принят") {
        setTimeout(async () => {
          user.updateStatus(order.id, "Готовится");

          try {
            let data;
            data = await setOrdersHistory(
              user.user.id,
              JSON.stringify(user.userOrders)
            );
            user.setUser(data);
          } catch (e) {
            const errorMessage =
              e.response?.data?.message ||
              e.response?.data?.error ||
              e.message ||
              "Произошла ошибка при загрузке";
            alert(errorMessage);
          }
        }, timeInterval);
        return;
      }

      activeIntervals[order.id] = setInterval(async () => {
        const newStatus = () => {
          const currentIndex = statusFlow.indexOf(order.status);

          if (currentIndex === -1 || currentIndex === statusFlow.length - 1) {
            clearInterval(activeIntervals[order.id]);
            return order.status;
          }

          return statusFlow[currentIndex + 1];
        };

        user.updateStatus(order.id, newStatus());

        try {
          let data;
          data = await setOrdersHistory(
            user.user.id,
            JSON.stringify(user.userOrders)
          );
          user.setUser(data);
        } catch (e) {
          const errorMessage =
            e.response?.data?.message ||
            e.response?.data?.error ||
            e.message ||
            "Произошла ошибка при загрузке";
          alert(errorMessage);
        }
      }, timeInterval);

      // Очистка интервала при размонтировании компонента
      return () => clearInterval(activeIntervals[order.id]);
    });
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="main-container">
      {isModalConfirmOpened ? (
        <ModalConfirm
          handler={setIsModalConfirmOpened}
          title={modalConfirmOptions.title}
          description={modalConfirmOptions.description}
          function={modalConfirmOptions.function}
          buttons={modalConfirmOptions.buttons}
        />
      ) : null}

      <div className="main-container-padding">
        <div className="profile-flex-wrapper">
          <h2 className="section-heading section__profile-heading">
            Личный кабинет
          </h2>
          <button
            className="products-item-button profile-exit-button"
            onClick={() => exit()}
          >
            Выйти
          </button>
        </div>
        {userOrders ? (
          <div className="profile__content">
            <div className="auth-success-wrapper">
              <ProfileCard />
              <div className="profile-active-order-heading-wrapper">
                <MailSVG />
                <h3 className="section-heading profile-active-auth-heading">{`Вы успешно авторизованы под ${user.user.email}!`}</h3>
              </div>
            </div>
            <div className="profile__active-order">
              <div className="active-order-track">
                <ul className="active-order-track-circles">
                  <li className="track-circles-item">
                    <div className="track-circles-item-circle track-circles-item-1 track-circles-item-active"></div>
                  </li>
                  <li className="track-circles-item">
                    <div
                      className={
                        userOrders[userOrders.length - 1].status ===
                          "Готовится" ||
                        userOrders[userOrders.length - 1].status === "В пути" ||
                        userOrders[userOrders.length - 1].status === "Доставлен"
                          ? "track-circles-item-circle track-circles-item-2 track-circles-item-active"
                          : "track-circles-item-circle track-circles-item-2"
                      }
                    ></div>
                  </li>
                  <li className="track-circles-item">
                    <div
                      className={
                        userOrders[userOrders.length - 1].status === "В пути" ||
                        userOrders[userOrders.length - 1].status === "Доставлен"
                          ? "track-circles-item-circle track-circles-item-3 track-circles-item-active"
                          : "track-circles-item-circle track-circles-item-3"
                      }
                    ></div>
                  </li>
                  <li className="track-circles-item">
                    <div
                      className={
                        userOrders[userOrders.length - 1].status === "Доставлен"
                          ? "track-circles-item-circle track-circles-item-4 track-circles-item-active"
                          : "track-circles-item-circle track-circles-item-4"
                      }
                    ></div>
                  </li>
                  <li
                    className={
                      userOrders[userOrders.length - 1].status === "Принят"
                        ? "track-item-line track-item-line-1"
                        : userOrders[userOrders.length - 1].status ===
                          "Готовится"
                        ? "track-item-line track-item-line-2"
                        : userOrders[userOrders.length - 1].status === "В пути"
                        ? "track-item-line track-item-line-3"
                        : userOrders[userOrders.length - 1].status ===
                          "Доставлен"
                        ? "track-item-line track-item-line-4"
                        : "track-item-line"
                    }
                  ></li>
                </ul>
              </div>
              <h2 className="section-heading profile-active-order-heading">
                {userOrders[userOrders.length - 1].status === "Доставлен"
                  ? `Ваш последний заказ № ${
                      userOrders[userOrders.length - 1].id
                    } от ${
                      userOrders[userOrders.length - 1].date.split(",")[0]
                    }`
                  : `Активный заказ № ${userOrders[userOrders.length - 1].id}`}
              </h2>
              <div className="profile__lists-wrapper">
                <ul className="profile__data-list">
                  <li className="profile-data-item">
                    <p className="profile-item-description text-bold">Имя:</p>
                    <p className="profile-item-description">
                      {userOrders[userOrders.length - 1].name}
                    </p>
                  </li>
                  <li className="profile-data-item">
                    <p className="profile-item-description text-bold">
                      Номер телефона:
                    </p>
                    <p className="profile-item-description">
                      {userOrders[userOrders.length - 1].phone}
                    </p>
                  </li>
                  <li className="profile-data-item">
                    <p className="profile-item-description text-bold">
                      Адрес доставки:
                    </p>
                    <p className="profile-item-description text-align-right">
                      ул. Счастья, д. 23, кв. 2000
                    </p>
                  </li>
                  <li className="profile-data-item">
                    <p className="profile-item-description text-bold">
                      Тип оплаты:
                    </p>
                    <p className="profile-item-description">Наличными</p>
                  </li>
                </ul>
                <ul className="profile__order-list">
                  {userOrders[userOrders.length - 1].orderList.map((item) => {
                    return (
                      <li className="profile-list-item" key={item.price}>
                        <p className="profile-item-description text-bold">
                          {item.name}
                        </p>
                        <p className="profile-item-description">
                          {`${item.quantity} x ${item.price} ₽`}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="profile__lists-wrapper profile-border">
                <div className="profile__order-list">
                  <p className="profile-item-description text-bold">
                    Предварительное время доставки ~ 40 мин.
                  </p>
                </div>

                <div className="profile__order-list profile-flex-wrapper">
                  <p className="profile-item-description text-bold">
                    Итого к оплате:
                  </p>
                  <p className="profile-item-description text-bold">
                    {`${userOrders[userOrders.length - 1].fullPrice} ₽`}
                  </p>
                </div>
              </div>
            </div>
            <div className="profile-orders-history">
              <h2 className="section-heading profile-orders-history-heading">
                История заказов
              </h2>
              <ul className="orders-history-list">
                <li className="orders-history-items-title-wrapper">
                  <p className="orders-history-item text-bold">№</p>
                  <p className="orders-history-item text-bold">Дата и время</p>
                  <p className="orders-history-item text-bold">Сумма</p>
                  <p className="orders-history-item text-bold">Статус</p>
                  <p className="orders-history-item history-item-adress text-bold">
                    Адрес доставки
                  </p>
                </li>
                {[...userOrders].reverse().map((order) => {
                  return (
                    <li className="orders-history-items-wrapper" key={order.id}>
                      <p className="orders-history-item">{order.id}</p>
                      <p className="orders-history-item">{order.date}</p>
                      <p className="orders-history-item">{`${order.fullPrice} ₽`}</p>
                      <p className="orders-history-item">{order.status}</p>
                      <p className="orders-history-item history-item-adress">
                        ул. Счастья, д. 23, кв. 2000
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ) : (
          <div className="auth-success-wrapper">
            <ProfileCard />
            <div className="profile-active-order-heading-wrapper">
              <MailSVG />
              <h3 className="section-heading profile-active-auth-heading">{`Вы успешно авторизованы под ${user.user.email}!`}</h3>
            </div>
          </div>
        )}
      </div>
      <div className="main-container-padding main-menu-container-padding">
        <h2 className="section-heading section__popular-heading">
          {userOrders
            ? "Может попробуем что-то новенькое?"
            : "Попробуем кулинарные шедевры?"}
        </h2>
        <Menu></Menu>
        <Schedule></Schedule>
      </div>
      <Footer></Footer>
    </div>
  );
});

export default Profile;
