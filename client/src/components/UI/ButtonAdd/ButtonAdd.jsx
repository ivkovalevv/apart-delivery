import React from "react";
import { observer } from "mobx-react-lite";
import "./buttonadd.css";

const ButtonAdd = observer((props) => {
  const buttonAddHandler = (e) => {
    e.stopPropagation();
    if (props.handler) {
      props.handler(props.id);
    } else if (props.handlerModal) {
      props.handlerModal(true);
    } else {
      return;
    }
  };

  return (
    <div className="products-item-buttons-group">
      <button
        onClick={(e) => buttonAddHandler(e)}
        className="products-item-button"
      >
        В корзину
      </button>
      {props.children}
    </div>
  );
});

export default ButtonAdd;
