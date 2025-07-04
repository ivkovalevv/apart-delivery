import React, { useContext } from "react";
import { Context } from "./../../../index";
import "./modalpromoactivated.css";
import { observer } from "mobx-react-lite";
import PromoSVG from "../../SVG/PromoSVG";

const ModalPromoActivated = observer(() => {
  const { modalsStore } = useContext(Context);

  function closeModal(e) {
    e.stopPropagation();
    modalsStore.setIsModalPromoActivatedOpen(false);
  }

  return (
    <div
      className={
        modalsStore.isModalPromoActivatedOpen ? "modal modal-open" : "modal"
      }
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
        <PromoSVG></PromoSVG>
        <h3 className="modal-heading">Промокод успешно применен!</h3>
        <p className="modal-description">
          Промокод на скидку 100% на весь заказ активирован.
        </p>
        <button className="modal-button" onClick={(e) => closeModal(e)}>
          Ого! Спасибо!
        </button>
      </div>
    </div>
  );
});

export default ModalPromoActivated;
