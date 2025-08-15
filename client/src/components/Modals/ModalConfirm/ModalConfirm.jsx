import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { Context } from "../../../index";
import { observer } from "mobx-react-lite";
import "./modalconfirm.css";

const ModalConfirm = observer((props) => {
  const { modalsStore } = useContext(Context);
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
        <h3 className="modal-heading">
          {props.title}
        </h3>
        <p className="modal-description">
          {props.description}
        </p>
        {props.buttons === 2 ? (
          <div className="modal-buttons-wrapper">
            <button
              className="modal-button"
              onClick={() => props.function()}
            >
              Да
            </button>
            <button className="modal-button" onClick={(e) => closeModal(e)}>
              Нет
            </button>
          </div>
        ) : (
          <button
            className="modal-button"
            onClick={() => props.function()}
          >
            {props.buttonTitle}
          </button>
        )}
      </div>
    </div>,
    node
  );
});

export default ModalConfirm;
