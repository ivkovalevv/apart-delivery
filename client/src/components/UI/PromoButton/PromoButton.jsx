import React, { useContext } from "react";
import { Context } from "../../../index";
import { observer } from "mobx-react-lite";
import "./promobutton.css";

const PromoButton = observer((props) => {
  const { modalsStore } = useContext(Context);

  function checkPromo(e, promo) {
    e.preventDefault();

    if (promo.trim() === "") {
      props.setValidPromo(false);
      return;
    } else if (promo.trim() === "PRINCESS2305") {
      modalsStore.setIsModalPromoActivatedOpen(true);
      props.setIsPromoActivated(true);
    } else {
      props.setIsPromoExists(false);
      props.setValidPromo(false);
    }
  }

  return (
    <button
      id="promo-btn"
      className="hero__button form-btn-promo"
      onClick={(e) =>
        props.isPromoActivated ? e.preventDefault() : checkPromo(e, props.promo)
      }
    >
      Применить
    </button>
  );
});

export default PromoButton;
