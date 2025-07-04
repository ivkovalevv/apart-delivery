import React, { useState, useContext } from "react";
import ButtonAdd from "../ButtonAdd/ButtonAdd";
import ButtonCalc from "../ButtonCalc/ButtonCalc";
import { useNavigate } from "react-router-dom";
import { MENU_ITEM_ROUTE } from "../../../utils/consts";
import { Context } from "../../../index";
import { observer } from "mobx-react-lite";
import "./productitem.css";

const Productitem = observer((props) => {
  const { user } = useContext(Context);
  const { modalsStore } = useContext(Context);
  const navigate = useNavigate();

  return (
    <li
      className={
        user.isAuth
          ? props.inCart
            ? "products-item products-item-selected"
            : "products-item"
          : "products-item"
      }
      data-title={props.name}
      data-promo={props.promo ? "Акция" : "Не акционный продукт"}
      style={{
        backgroundImage: `url(${process.env.REACT_APP_API_URL + props.image})`,
      }}
      onClick={(e) => {
        e.stopPropagation();
        // navigate(MENU_ITEM_ROUTE + "/" + props.id);
      }}
    >
      <div className="products-item-content">
        <h4 className="products-item-title">{props.name}</h4>
        <div className="products-item-time-group">
          <img
            src="./assets/img/svg/time.svg"
            alt="time"
            className="products-item-time-icon"
          />
          <p className="products-item-time-description">
            {props.delivery_time}
          </p>
        </div>
        <div className="products-item-active-group">
          <h3 className="products-item-price">{`${props.price} ₽`}</h3>
          {user.isAuth ? (
            props.inCart ? (
              <ButtonCalc id={props.id} quantity={props.quantity}></ButtonCalc>
            ) : (
              <ButtonAdd
                id={props.id}
                handler={(id) => user.addToCart(id)}
              ></ButtonAdd>
            )
          ) : (
            <ButtonAdd
              handlerModal={(bool) => modalsStore.setIsModalAuthOpen(bool)}
            ></ButtonAdd>
          )}
        </div>
      </div>
    </li>
  );
});

export default Productitem;
