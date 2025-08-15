import React, { useContext } from "react";
import { Context } from "../../index";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./auth.css";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { PROFILE_ROUTE } from "../../utils/consts";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  if (user.isAuth){
    navigate(PROFILE_ROUTE)
  }

  return (
    <div className="main-container">
      <div className="main-container-padding">
        <LoginForm></LoginForm>
      </div>
    </div>
  );
});

export default Auth;
