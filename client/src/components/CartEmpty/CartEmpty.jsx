import React from "react";
import CartArrowSVG from "../SVG/CartArrowSVG";
import "./cartempty.css";

const CartEmpty = () => {
  return (
    <div className="main-container-padding">
      <h2 className="section-heading">Ваша корзина</h2>
      <h3 className="cart-description-heading">
        Ой, ваша корзина пока пуста :(
      </h3>
      <p className="cart-description">Добавьте в неё что-нибудь!</p>
      <div className="cart-arrow-wrapper">
        <CartArrowSVG></CartArrowSVG>
      </div>
    </div>
  );
};

export default CartEmpty;
