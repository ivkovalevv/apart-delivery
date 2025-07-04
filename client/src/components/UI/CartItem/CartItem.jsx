import React, { useState, useContext } from "react";
import ButtonAdd from "../ButtonAdd/ButtonAdd";
import ButtonCalc from "../ButtonCalc/ButtonCalc";
import { Context } from "../../../index";
import { observer } from "mobx-react-lite";
import "./cartitem.css";

const CartItem = observer((props) => {
  const { user } = useContext(Context);

  return (
    <li
      className="cart-item"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="cart-item-content">
        <div
          style={{ backgroundImage: `url(${process.env.REACT_APP_API_URL + props.image})` }}
          className="cart-item-image"
        ></div>
        <div className="cart-item-info-group">
          <h4 className="cart-item-title">{props.name}</h4>
          <div className="cart-item-time-group">
            <img
              src="./assets/img/svg/time.svg"
              alt="time"
              className="cart-item-time-icon"
            />
            <p className="cart-item-time-description">{props.delivery_time}</p>
          </div>
          <div className="cart-item-active-group">
            <h3 className="cart-item-price">{`${
              props.price * props.quantity
            } ₽`}</h3>
            <ButtonCalc id={props.id} quantity={props.quantity}></ButtonCalc>
          </div>
        </div>
        <div className="cart-remove-group">
          <button
            className="remove-cart-item-button"
            onClick={() => user.removeFromCart(props.id)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="18.6207"
                width="26.3336"
                height="1.95064"
                rx="0.97532"
                transform="rotate(-45 0 18.6207)"
                fill="#949494"
              />
              <rect
                x="1.37891"
                width="26.3336"
                height="1.95064"
                rx="0.97532"
                transform="rotate(45 1.37891 0)"
                fill="#949494"
              />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
});

export default CartItem;
