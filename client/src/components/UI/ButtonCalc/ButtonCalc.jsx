import React, { useContext } from "react";
import { Context } from "../../../index";
import { observer } from "mobx-react-lite";
import "./buttoncalc.css";

const ButtonCalc = observer((props) => {
  const { user } = useContext(Context);

  const buttonMinusHandler = (e) => {
    e.stopPropagation();
    if (props.quantity - 1 <= 0) {
      return user.removeFromCart(props.id);
    }

    user.updateQuantity(props.id, props.quantity - 1);
  };

  const buttonPlusHandler = (e) => {
    e.stopPropagation();
    user.updateQuantity(props.id, props.quantity + 1);
  };

  return (
    <div className="products-item-buttons-group">
      <button
        onClick={(e) => buttonMinusHandler(e)}
        className="products-item-button-quantity button-quantity-minus"
      >
        -
      </button>
      <input
        type="number"
        className="products-item-input-num"
        value={props.quantity}
        readOnly
      />
      <button
        onClick={(e) => buttonPlusHandler(e)}
        className="products-item-button-quantity button-quantity-plus"
      >
        +
      </button>
    </div>
  );
});

export default ButtonCalc;
