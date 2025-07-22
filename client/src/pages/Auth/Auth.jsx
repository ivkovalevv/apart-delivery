import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./auth.css";
import { observer } from "mobx-react-lite";

const Auth = observer(() => {

  return (
    <div className="main-container">
      <div className="main-container-padding">
        <LoginForm></LoginForm>
      </div>
    </div>
  );
});

export default Auth;
