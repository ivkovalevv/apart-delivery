import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../index";
import Schedule from "../../components/Schedule/Schedule";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import { observer } from "mobx-react-lite";
import "./profile.css";
import SuccessSVG from "../../components/SVG/SuccessSVG";
import {
  updateStatus,
  activeIntervals,
  timeInterval,
  setTimeInterval,
} from "../../utils/functions";

const Profile = observer(() => {
  const { user } = useContext(Context);
  const { modalsStore } = useContext(Context);
  const navigate = useNavigate();

  function exit() {
    modalsStore.setModalConfirmOptions({
      title: "Выход из Личного кабинета",
      description: "Вы действительно хотите выйти из личного кабинета?",
      function: () => {
        user.setUser({});
        user.setIsAuth(false);
        navigate("/login", { replace: true });
        modalsStore.setIsModalConfirmOpen(false);
      },
      buttons: 2,
    });

    modalsStore.setIsModalConfirmOpen(true);
  }

  if (user.userOrders.length > 0) {
    const statusFlow = ["Принят", "Готовится", "В пути", "Доставлен"];

    user.userOrders.map((order) => {
      const timeInterval = order.status === "Принят" ? 10000 : 1200000;

      if (Object.keys(activeIntervals).includes(order.id)) {
        return;
      }

      if (order.status === "Доставлен") {
        return;
      }

      if (order.status === "Принят") {
        setTimeout(() => {
          user.updateStatus(order.id, "Готовится");
        }, timeInterval);
        return;
      }

      activeIntervals[order.id] = setInterval(() => {
        const newStatus = () => {
          const currentIndex = statusFlow.indexOf(order.status);

          if (currentIndex === -1 || currentIndex === statusFlow.length - 1) {
            clearInterval(activeIntervals[order.id]);
            return order.status;
          }

          return statusFlow[currentIndex + 1];
        };

        user.updateStatus(order.id, newStatus());
      }, timeInterval);

      // Очистка интервала при размонтировании компонента
      return () => clearInterval(activeIntervals[order.id]);
    });
  }

  return (
    <div className="main-container">
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
        {user.userOrders.length > 0 ? (
          <div className="profile__content">
            <div className="profile__active-order">
              <div className="active-order-track">
                <ul className="active-order-track-circles">
                  <li className="track-circles-item">
                    <div className="track-circles-item-circle track-circles-item-1 track-circles-item-active"></div>
                  </li>
                  <li className="track-circles-item">
                    <div
                      className={
                        user.userOrders[user.userOrders.length - 1].status ===
                          "Готовится" ||
                        user.userOrders[user.userOrders.length - 1].status ===
                          "В пути" ||
                        user.userOrders[user.userOrders.length - 1].status ===
                          "Доставлен"
                          ? "track-circles-item-circle track-circles-item-2 track-circles-item-active"
                          : "track-circles-item-circle track-circles-item-2"
                      }
                    ></div>
                  </li>
                  <li className="track-circles-item">
                    <div
                      className={
                        user.userOrders[user.userOrders.length - 1].status ===
                          "В пути" ||
                        user.userOrders[user.userOrders.length - 1].status ===
                          "Доставлен"
                          ? "track-circles-item-circle track-circles-item-3 track-circles-item-active"
                          : "track-circles-item-circle track-circles-item-3"
                      }
                    ></div>
                  </li>
                  <li className="track-circles-item">
                    <div
                      className={
                        user.userOrders[user.userOrders.length - 1].status ===
                        "Доставлен"
                          ? "track-circles-item-circle track-circles-item-4 track-circles-item-active"
                          : "track-circles-item-circle track-circles-item-4"
                      }
                    ></div>
                  </li>
                  <li
                    className={
                      user.userOrders[user.userOrders.length - 1].status ===
                      "Принят"
                        ? "track-item-line track-item-line-1"
                        : user.userOrders[user.userOrders.length - 1].status ===
                          "Готовится"
                        ? "track-item-line track-item-line-2"
                        : user.userOrders[user.userOrders.length - 1].status ===
                          "В пути"
                        ? "track-item-line track-item-line-3"
                        : user.userOrders[user.userOrders.length - 1].status ===
                          "Доставлен"
                        ? "track-item-line track-item-line-4"
                        : "track-item-line"
                    }
                  ></li>
                </ul>
              </div>
              <h2 className="section-heading profile-active-order-heading">
                {user.userOrders[user.userOrders.length - 1].status ===
                "Доставлен"
                  ? `Ваш последний заказ № ${
                      user.userOrders[user.userOrders.length - 1].id
                    } от ${
                      user.userOrders[user.userOrders.length - 1].date.split(
                        ","
                      )[0]
                    }`
                  : `Активный заказ № ${
                      user.userOrders[user.userOrders.length - 1].id
                    }`}
              </h2>
              <div className="profile__lists-wrapper">
                <ul className="profile__data-list">
                  <li className="profile-data-item">
                    <p className="profile-item-description text-bold">Имя:</p>
                    <p className="profile-item-description">
                      {user.userOrders[user.userOrders.length - 1].name}
                    </p>
                  </li>
                  <li className="profile-data-item">
                    <p className="profile-item-description text-bold">
                      Номер телефона:
                    </p>
                    <p className="profile-item-description">
                      {user.userOrders[user.userOrders.length - 1].phone}
                    </p>
                  </li>
                  <li className="profile-data-item">
                    <p className="profile-item-description text-bold">
                      Адрес доставки:
                    </p>
                    <p className="profile-item-description text-align-right">
                      улица Счастья, д. 23, кв. 2000
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
                  {user.userOrders[user.userOrders.length - 1].orderList.map(
                    (item) => {
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
                    }
                  )}
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
                    {`${
                      user.userOrders[user.userOrders.length - 1].fullPrice
                    } ₽`}
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
                {[...user.userOrders].reverse().map((order) => {
                  return (
                    <li className="orders-history-items-wrapper" key={order.id}>
                      <p className="orders-history-item">{order.id}</p>
                      <p className="orders-history-item">{order.date}</p>
                      <p className="orders-history-item">{`${order.fullPrice} ₽`}</p>
                      <p className="orders-history-item">{order.status}</p>
                      <p className="orders-history-item history-item-adress">
                        улица Счастья, д. 23, кв. 2000
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ) : (
          <div className="auth-success-wrapper">
            <SuccessSVG id="pattern0_169_281"></SuccessSVG>
            <h2 className="section-heading empty-profile-active-order-heading">
              {`Вы успешно авторизованы под ${user.user.email}! Теперь вы можете оформить заказ!`}
            </h2>
          </div>
        )}
      </div>
      <div className="main-container-padding main-menu-container-padding">
        <h2 className="section-heading section__popular-heading">
          {user.userOrders.length > 0
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
