import React, { useContext } from "react";
import { Context } from "../../../index";
import { observer } from "mobx-react-lite";

const OrderFormButton = observer((props) => {
  const { modalsStore } = useContext(Context);

  function createOrder(e) {
    e.preventDefault();
    props.checkValidity(modalsStore);
  }

  return (
    <button
      id="order-btn"
      type="submit"
      className="modal-button form-submit-btn"
      onClick={(e) => createOrder(e)}
    >
      Оформить заказ
    </button>
  );
});

export default OrderFormButton;
