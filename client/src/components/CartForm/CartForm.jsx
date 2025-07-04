import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import "./cartform.css";
import PhoneInput from "../UI/PhoneInput/PhoneInput";
import NameInput from "../UI/NameInput/NameInput";
import TextareaInput from "../UI/TextareaInput/TextareaInput";
import OrderFormButton from "../UI/OrderFormButton/OrderFormButton";
import PromoInput from "../UI/PromoInput/PromoInput";
import { generateRandomNumber } from "../../utils/functions";

const CartForm = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const [isPromoActivated, setIsPromoActivated] = useState(false);

  const [nameValue, setNameValue] = useState("");
  const [isValidName, setIsValidName] = useState(true);
  const [phoneValue, setPhoneValue] = useState("");
  const [isValidPhoneValue, setIsValidPhoneValue] = useState(true);
  const [isCorrectPhoneValue, setIsCorrectPhoneValue] = useState(true);
  const [textareaValue, setTextareaValue] = useState("");

  const [inputPromo, setInputPromo] = useState("");
  const [isPromoExists, setIsPromoExists] = useState(true);
  const [validPromo, setValidPromo] = useState(true);

  const fullCartPrice = () => {
    let fullPrice = 0;

    user.userOrderList.map((item) => {
      return (fullPrice += item.price * item.quantity);
    });

    return fullPrice;
  };

  const checkValidity = (modalsStore) => {
    if (nameValue.trim() === "" || nameValue.length < 2) {
      setIsValidName(false);
    }
    if (phoneValue === "") {
      setIsValidPhoneValue(false);
    }
    if (phoneValue.length < 11) {
      setIsCorrectPhoneValue(false);
    }
    if (
      nameValue.trim() !== "" &&
      nameValue.length > 2 &&
      phoneValue !== "" &&
      phoneValue.length >= 11
    ) {
      modalsStore.setModalConfirmOptions({
        title: "Оформление заказа",
        description: `Вы оформляете заказ на доставку по адресу "улица Счастья, д. 23, кв. 2000" на сумму ${
          isPromoActivated ? 0 : fullCartPrice()
        } ₽. Если всё верно, нажмите на кнопку ниже.`,
        function: () => {
          modalsStore.setIsModalSuccessfulOrderOpen(true);
          user.addUserOrder({
            id: generateRandomNumber(),
            date: new Date().toLocaleDateString("ru-RU", {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
            }),
            name: nameValue,
            phone: phoneValue,
            comment: textareaValue,
            orderList: user.userOrderList,
            fullPrice: isPromoActivated ? 0 : fullCartPrice(),
            status: "Принят",
          });

          setNameValue("");
          setPhoneValue("");
          setTextareaValue("");
          setInputPromo("");
          setIsPromoExists(true);
          setValidPromo(true);
          setIsPromoActivated(false);

          user.clearCart();

          navigate("/profile", { replace: true });
          modalsStore.setIsModalConfirmOpen(false);
        },
        buttons: 1,
        buttonTitle: "Оформить заказ",
      });

      modalsStore.setIsModalConfirmOpen(true);
    }
  };

  return (
    <div className="cart-form">
      <div className="price-group price-group-mobile">
        <p className="price-group-text">К оплате: </p>
        {isPromoActivated ? (
          <div className="flex-wrapper">
            <p className="price-group-text text-line-through">{`${fullCartPrice()} ₽`}</p>
            <p className="price-group-text">{`0 ₽`}</p>
          </div>
        ) : (
          <div className="flex-wrapper">
            <p className="price-group-text">{`${fullCartPrice()} ₽`}</p>
          </div>
        )}
      </div>
      <div className="cart-form-wrapper">
        <form className="form">
          <NameInput
            nameValue={nameValue}
            isValidName={isValidName}
            setIsValidName={setIsValidName}
            setNameValue={setNameValue}
          ></NameInput>
          <PhoneInput
            phoneValue={phoneValue}
            isValidPhoneValue={isValidPhoneValue}
            setIsValidPhoneValue={setIsValidPhoneValue}
            isCorrectPhoneValue={isCorrectPhoneValue}
            setIsCorrectPhoneValue={setIsCorrectPhoneValue}
            setPhoneValue={setPhoneValue}
          ></PhoneInput>
          <TextareaInput
            textareaValue={textareaValue}
            placeholder="Как можно скорее!"
            setTextareaValue={setTextareaValue}
          ></TextareaInput>
          <PromoInput
            inputPromo={inputPromo}
            setInputPromo={setInputPromo}
            isPromoExists={isPromoExists}
            setIsPromoExists={setIsPromoExists}
            validPromo={validPromo}
            setValidPromo={setValidPromo}
            isPromoActivated={isPromoActivated}
            setIsPromoActivated={setIsPromoActivated}
          ></PromoInput>
          <div className="price-group price-group-desktop">
            <p className="price-group-text">К оплате: </p>
            {isPromoActivated ? (
              <div className="flex-wrapper">
                <p className="price-group-text text-line-through">{`${fullCartPrice()} ₽`}</p>
                <p className="price-group-text">{`0 ₽`}</p>
              </div>
            ) : (
              <div className="flex-wrapper">
                <p className="price-group-text">{`${fullCartPrice()} ₽`}</p>
              </div>
            )}
          </div>
          <OrderFormButton checkValidity={checkValidity}></OrderFormButton>
        </form>
      </div>
    </div>
  );
});

export default CartForm;
