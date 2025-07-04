import React from "react";
import { useLocation } from "react-router-dom";
import { LOGIN_ROUTE } from "../../utils/consts";
import { observer } from "mobx-react-lite";
import "./loginform.css";
import AccountSVG from "../SVG/AccountSVG";
import AuthForm from "../UI/AuthForm/AuthForm";
import RegistrationForm from "../UI/RegistrationForm/RegistrationForm";

const LoginForm = observer(() => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <div className="form-wrapper">
      <AccountSVG></AccountSVG>
      <h2 className="section-heading form-title">
        {isLogin ? "Авторизация" : "Регистрация"}
      </h2>
      {isLogin ? <AuthForm></AuthForm> : <RegistrationForm></RegistrationForm>}
    </div>
  );
});

export default LoginForm;
