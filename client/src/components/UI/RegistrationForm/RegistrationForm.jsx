import React, { useContext, useState } from "react";
import { Context } from "../../../index";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../../../utils/consts";
import { observer } from "mobx-react-lite";
import { registration } from "../../../http/userAPI";
import HidePasswordSVG from "../../SVG/HidePasswordSVG";
import ShowPasswordSVG from "../../SVG/ShowPasswordSVG";

const RegistrationForm = observer(() => {
  const { user } = useContext(Context);
  const [emailRegistration, setEmailRegistration] = useState("");
  const [isValidEmailRegistration, setIsValidEmailRegistration] = useState(true);
  const [validateMessage, setVlidateMessage] = useState("");
  const [passwordRegistration, setPasswordRegistration] = useState("");
  const [isValidPasswordRegistration, setIsValidPasswordRegistration] = useState(true);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const singIn = async () => {
    try {
      let data = await registration(emailRegistration.trim().toLowerCase(), passwordRegistration.trim());
      user.setUser(data);
      user.setIsAuth(true);
      user.setUserCart(data);
    } catch (e) {
      setVlidateMessage(e.response.data.message)
      if(e.response.data.message == "Validation error"){
        setVlidateMessage("Пользователь с таким email уже существует")
      }
    }
  };

  function formRegistrationhButtonHandler(e) {
    e.preventDefault();

    if (emailRegistration.trim() === "") {
      setIsValidEmailRegistration(false);
      setVlidateMessage("");
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

  function showPasswordHandler(e){
    e.preventDefault();
    showPassword ? setShowPassword(false) : setShowPassword(true);
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
            setVlidateMessage("");
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
        <p
          className={
            validateMessage != ""
              ? "invalid-message invalid-message-name invalid-message-active"
              : "invalid-message invalid-message-name"
          }
        >
          {validateMessage}
        </p>
      </div>
      <div className="form-group">
        <div className="password-input-wrapper">
          <input
            id="registration-input-password"
            type={showPassword ? "text" : "password"}
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
              setPasswordTouched(true);

              if(!e.target.value){
                setPasswordTouched(false);
              }
            }}
          />
          {passwordTouched 
          ? (<button type="button" className="show-password-button" tabIndex={-1} onClick={(e) => showPasswordHandler(e)}>
              {showPassword ? <HidePasswordSVG/> : <ShowPasswordSVG/>}
            </button>)
          : null}
        </div>
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
