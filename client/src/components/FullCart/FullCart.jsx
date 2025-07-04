import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import CartItem from "../../components/UI/CartItem/CartItem";
import CartForm from "../../components/CartForm/CartForm";
import "./fullcart.css";

const FullCart = observer(() => {
  const { user } = useContext(Context);
  const { menuItem } = useContext(Context);
  const { modalsStore } = useContext(Context);

  const cartItemsQuantityMap = user.userCart.reduce((acc, item) => {
    acc[item.id] = item.quantity; // Добавляем в аккумулятор пару id:quantity
    return acc;
  }, {}); // Начальное значение аккумулятора — пустой объект {}

  let itemsIdCart = [];
  user.userCart.map((item) => {
    return itemsIdCart.push(item.id);
  });

  const orderList = menuItem.menuItems.rows.filter((item) =>
    itemsIdCart.includes(item.id)
  );

  orderList.map((item) => {
    item.quantity = cartItemsQuantityMap[item.id];
  });

  useEffect(() => {
    user.setUserOrderList(orderList);
  }, [orderList]);

  function clearCart() {
    modalsStore.setModalConfirmOptions({
      title: "Очистить корзину",
      description: "Вы действительно хотите очистить корзину?",
      function: function () {
        user.clearCart();
        modalsStore.setIsModalConfirmOpen(false);
      },
      buttons: 2,
      buttonTitle: "Оформить заказ",
    });

    modalsStore.setIsModalConfirmOpen(true);
  }

  return (
    <div className="main-container-padding cart-wrapper">
      <div className="cart-list-wrapper">
        <div class="cart-list-title-wrapper">
          <h2 className="section-heading section-cart-heading">Ваша корзина</h2>
          {orderList.length ? (
            <button
              className="clear-all-cart-button"
              onClick={() => clearCart()}
            >
              Очистить корзину
            </button>
          ) : null}
        </div>
        <ul className="cart-list">
          {orderList.map((item) => {
            return (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                delivery_time="150 лет"
                price={item.price}
                image={item.image}
                inCart={true}
                quantity={cartItemsQuantityMap[item.id]}
              ></CartItem>
            );
          })}
        </ul>
      </div>
      <CartForm></CartForm>
    </div>
  );
});

export default FullCart;
