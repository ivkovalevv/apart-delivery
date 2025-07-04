import React, { useContext, useState } from "react";
import { Context } from "../../../index";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../../../utils/consts";
import { observer } from "mobx-react-lite";
import { registration } from "../../../http/userAPI";

const RegistrationForm = observer(() => {
  const { user } = useContext(Context);
  const [emailRegistration, setEmailRegistration] = useState("");
  const [isValidEmailRegistration, setIsValidEmailRegistration] =
    useState(true);
  const [passwordRegistration, setPasswordRegistration] = useState("");
  const [isValidPasswordRegistration, setIsValidPasswordRegistration] =
    useState(true);

  const singIn = async () => {
    try {
      let data;
      data = await registration(emailRegistration, passwordRegistration);
      user.setUser(data);
      user.setIsAuth(true);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  function formRegistrationhButtonHandler(e) {
    e.preventDefault();

    if (emailRegistration.trim() === "") {
      setIsValidEmailRegistration(false);
    }
    if (passwordRegistration.trim() === "") {
      setIsValidPasswordRegistration(false);
    } else if (
      emailRegistration.trim() !== "" &&
      passwordRegistration.trim() !== ""
    ) {
      singIn();
    }
  }

  return (
    <form className="registration-form">
      <div className="form-group">
        <input
          id="registration-input-email"
          type="text"
          name="email"
          required
          value={emailRegistration}
          placeholder="Введите ваш email..."
          className={
            isValidEmailRegistration
              ? "form-auth-input"
              : "form-auth-input input-invalide"
          }
          onChange={(e) => {
            setEmailRegistration(e.target.value);
            setIsValidEmailRegistration(true);
          }}
        />
        <p
          className={
            isValidEmailRegistration
              ? "invalid-message invalid-message-name"
              : "invalid-message invalid-message-name invalid-message-active"
          }
        >
          Заполните это поле.
        </p>
      </div>
      <div className="form-group">
        <input
          id="registration-input-password"
          type="password"
          name="password"
          required
          value={passwordRegistration}
          placeholder={"Придумайте пароль..."}
          className={
            isValidPasswordRegistration
              ? "form-auth-input"
              : "form-auth-input input-invalide"
          }
          onChange={(e) => {
            setPasswordRegistration(e.target.value);
            setIsValidPasswordRegistration(true);
          }}
        />
        <p
          className={
            isValidPasswordRegistration
              ? "invalid-message invalid-message-name"
              : "invalid-message invalid-message-name invalid-message-active"
          }
        >
          Заполните это поле.
        </p>
      </div>
      <div className="form-auth-description">
        Есть аккаунт?
        <NavLink className="form-auth-description-link" to={LOGIN_ROUTE}>
          Войдите!
        </NavLink>
      </div>
      <button
        className="form-auth-button"
        onClick={(e) => formRegistrationhButtonHandler(e)}
      >
        Регистрация
      </button>
    </form>
  );
});

export default RegistrationForm;
