import React, { useContext } from "react";
import { Context } from "./../../../index";
import { createPortal } from "react-dom";
import "./modalsuccessfulorder.css";
import { observer } from "mobx-react-lite";
import SuccessSVG from "../../SVG/SuccessSVG";

const ModalSuccessfulOrder = observer((props) => {
  const { user } = useContext(Context);
  const node = document.getElementById('modal-root');
  if (!node) return null;

  function closeModal(e) {
    e.stopPropagation();
    props.handler(false);
  }

  return createPortal(
    <div
      className={"modal modal-open"}
    >
      <div className="modal-wrapper">
        <div className="modal-button-close-wrapper">
          <button className="modal-button-close" onClick={(e) => closeModal(e)}>
            <img
              src="../../assets/img/svg/close.svg"
              className="modal-button-close-icon"
            />
          </button>
        </div>
        <SuccessSVG id="pattern0_169_280"></SuccessSVG>
        <h3 className="modal-heading">Ура! Заказ оформлен!</h3>
        <div className="modal-content-wrapper">
          <p className="modal-content-heading">В вашем заказе:</p>
          <ul className="modal-order-list">
            {user.userOrders.length > 0
              ? user.userOrders[user.userOrders.length - 1].orderList.map(
                  (orderItem) => {
                    return (
                      <li className="modal-order-item" key={orderItem.price}>
                        <p className="modal-content-description">
                          {orderItem.name}
                        </p>
                        <p className="modal-content-description">{`x ${orderItem.quantity}`}</p>
                      </li>
                    );
                  }
                )
              : null}
          </ul>
          <div className="modal-order-item">
            <p className="modal-content-heading">Итого к оплате:</p>
            <p className="modal-content-heading">{`${
              user.userOrders.length > 0
                ? user.userOrders[user.userOrders.length - 1].fullPrice
                : null
            } ₽`}</p>
          </div>
        </div>
        <p className="modal-content-description">
          Предварительное время доставки ~ 40 мин.
        </p>
        <button className="modal-button" onClick={(e) => closeModal(e)}>
          Готовьте скорее! Очень жду!
        </button>
      </div>
    </div>,
    node
  );
});

export default ModalSuccessfulOrder;
