import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../../../utils/consts";
import { Context } from "./../../../index";
import AuthSVG from "./../../SVG/AuthSVG";
import "./modalauth.css";
import { observer } from "mobx-react-lite";

const ModalAuth = observer(() => {
  const { modalsStore } = useContext(Context);

  function closeModal(e) {
    e.stopPropagation();
    modalsStore.setIsModalAuthOpen(false);
  }

  return (
    <div className={modalsStore.isModalAuthOpen ? "modal modal-open" : "modal"}>
      <div className="modal-wrapper">
        <div className="modal-button-close-wrapper">
          <button className="modal-button-close" onClick={(e) => closeModal(e)}>
            <img
              src="../../assets/img/svg/close.svg"
              className="modal-button-close-icon"
            />
          </button>
        </div>
        <AuthSVG></AuthSVG>
        <h3 className="modal-heading">Может сначала авторизуемся? 😉</h3>
        <p className="modal-description">
          Чтобы зайти в корзину, нужна авторизация! <br />
          Ты сможешь добавлять товары в корзину и оформить заказ
        </p>
        <NavLink
          to={LOGIN_ROUTE}
          className="modal-button-wrapper"
          onClick={(e) => closeModal(e)}
        >
          <button className="modal-button">Авторизоваться</button>
        </NavLink>
      </div>
    </div>
  );
});

export default ModalAuth;
