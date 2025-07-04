import React, { useContext } from "react";
import { Context } from "./../../../index";
import { observer } from "mobx-react-lite";
import "./modalconfirm.css";

const ModalConfirm = observer(() => {
  const { modalsStore } = useContext(Context);

  function closeModal(e) {
    e.stopPropagation();
    modalsStore.setIsModalConfirmOpen(false);
  }

  return (
    <div
      className={modalsStore.isModalConfirmOpen ? "modal modal-open" : "modal"}
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
          {modalsStore.modalConfirmOptions.title}
        </h3>
        <p className="modal-description">
          {modalsStore.modalConfirmOptions.description}
        </p>
        {modalsStore.modalConfirmOptions.buttons === 2 ? (
          <div className="modal-buttons-wrapper">
            <button
              className="modal-button"
              onClick={() => modalsStore.modalConfirmOptions.function()}
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
            onClick={() => modalsStore.modalConfirmOptions.function()}
          >
            {modalsStore.modalConfirmOptions.buttonTitle}
          </button>
        )}
      </div>
    </div>
  );
});

export default ModalConfirm;
