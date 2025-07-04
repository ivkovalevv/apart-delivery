import React, { useContext } from "react";
import { Context } from "../../../index";
import { observer } from "mobx-react-lite";
import "./buttonadd.css";

const ButtonAdd = observer((props) => {
  const { user } = useContext(Context);

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
    </div>
  );
});

export default ButtonAdd;
