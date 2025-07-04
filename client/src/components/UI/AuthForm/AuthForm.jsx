import React, { useState, useContext } from "react";
import { Context } from "../../../index";
import { NavLink } from "react-router-dom";
import { REGISTRATION_ROUTE } from "../../../utils/consts";
import { observer } from "mobx-react-lite";
import { login } from "../../../http/userAPI";

const AuthForm = observer(() => {
  const { user } = useContext(Context);

  const [emailAuth, setEmailAuth] = useState("");
  const [isValidEmailAuth, setIsValidEmailAuth] = useState(true);
  const [passwordAuth, setPasswordAuth] = useState("");
  const [isValidPasswordAuth, setIsValidPasswordAuth] = useState(true);

  const [isUserExist, setIsUserExist] = useState(true);

  const check = async () => {
    try {
      let data;
      data = await login(emailAuth, passwordAuth);
      user.setUser(data);
      user.setIsAuth(true);
      user.setUserCart(data);
    } catch (e) {
      // alert(e.response.data.message);
      setIsUserExist(false);
    }
  };

  function formAuthButtonHandler(e) {
    e.preventDefault();

    if (emailAuth.trim() === "") {
      setIsValidEmailAuth(false);
    }
    if (passwordAuth.trim() === "") {
      setIsValidPasswordAuth(false);
    }

    if (
      emailAuth.trim() !== "" &&
      passwordAuth.trim() !== ""
    ) {
      check();
    }
  }

  return (
    <form className="auth-form">
      <div className="form-group">
        <div className="form-group">
          <input
            id="auth-input-email"
            type="text"
            name="email"
            required
            value={emailAuth}
            placeholder="Введите ваш email..."
            className={
              isValidEmailAuth
                ? "form-auth-input"
                : "form-auth-input input-invalide"
            }
            onChange={(e) => {
              setEmailAuth(e.target.value);
              setIsValidEmailAuth(true);
              setIsUserExist(true);
            }}
          />
          <p
            className={
              isValidEmailAuth
                ? "invalid-message invalid-message-name"
                : "invalid-message invalid-message-name invalid-message-active"
            }
          >
            Заполните это поле.
          </p>
        </div>
        <div className="form-group">
          <input
            id="auth-input-password"
            type="password"
            name="password"
            required
            value={passwordAuth}
            placeholder={"Введите ваш пароль..."}
            className={
              isValidPasswordAuth
                ? "form-auth-input"
                : "form-auth-input input-invalide"
            }
            onChange={(e) => {
              setPasswordAuth(e.target.value);
              setIsValidPasswordAuth(true);
              setIsUserExist(true);
            }}
          />
          <p
            className={
              isValidPasswordAuth
                ? "invalid-message invalid-message-name"
                : "invalid-message invalid-message-name invalid-message-active"
            }
          >
            Заполните это поле.
          </p>
        </div>
        <p
          className={
            isUserExist
              ? "invalid-message invalid-message-name"
              : "invalid-message invalid-message-name invalid-message-active"
          }
        >
          Введен неверный логин или пароль.
        </p>
      </div>

      <div className="form-auth-description">
        Нет аккаунта?
        <NavLink className="form-auth-description-link" to={REGISTRATION_ROUTE}>
          Зарегистрируйтесь!
        </NavLink>
      </div>
      <button
        className="form-auth-button"
        onClick={(e) => formAuthButtonHandler(e)}
      >
        Войти
      </button>
    </form>
  );
});

export default AuthForm;
