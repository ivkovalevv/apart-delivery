import React, { useState } from "react";
import PromoButton from "../PromoButton/PromoButton";
import ModalPromoActivated from "../../Modals/ModalPromoActivated/ModalPromoActivered";

const PromoInput = (props) => {
  const [isPromoExists, setIsPromoExists] = useState(true);
  const [validPromo, setValidPromo] = useState(true);

  const [isModalOpened, setIsModalOpened] = useState(false);

  const cancelPromo = () => {
    props.setInputPromo("");
    props.setIsPromoActivated(false);
  };

  return (
    <div className="promo-wrapper">
      <div className="form-group">
        {props.isPromoActivated ? (
          <div className="flex-wrapper">
            <label htmlFor="promo">Применен промокод:</label>
            <button className="cancel-promo" onClick={() => cancelPromo()}>
              Отменить
            </button>
          </div>
        ) : (
          <div className="flex-wrapper">
            <label htmlFor="promo">Есть промокод?</label>
          </div>
        )}
        {props.isPromoActivated ? (
          <input
            required=""
            name="promo"
            id="promo"
            placeholder="Введите промокод"
            minLength="2"
            type="text"
            value={props.inputPromo.toUpperCase()}
            onChange={(event) => props.setInputPromo(event.target.value)}
            className="input-disabled"
            disabled
          />
        ) : (
          <input
            required=""
            name="promo"
            id="promo"
            placeholder="Введите промокод"
            minLength="2"
            type="text"
            value={props.inputPromo.toUpperCase()}
            onChange={(event) => {
              props.setInputPromo(event.target.value);
              props.setValidPromo(true);
              props.setIsPromoExists(true);
            }}
            className={props.validPromo ? "" : "input-invalide"}
          />
        )}
        <p
          className={
            props.validPromo
              ? "invalid-message invalid-message-project"
              : "invalid-message invalid-message-project invalid-message-active"
          }
        >
          {props.isPromoExists ? "Заполните это поле." : "Промокод не найден."}
        </p>
        {props.isPromoActivated ? (
          <div>
            {
              isModalOpened ? <ModalPromoActivated handler={setIsModalOpened}/> : null
            }
          </div>
        ) : (
          <PromoButton
            promo={props.inputPromo}
            setIsPromoActivated={props.setIsPromoActivated}
            isPromoActivated={props.isPromoActivated}
            setValidPromo={props.setValidPromo}
            setIsPromoExists={props.setIsPromoExists}
            setIsModalOpened={setIsModalOpened}
          ></PromoButton>
        )}
      </div>
    </div>
  );
};

export default PromoInput;
