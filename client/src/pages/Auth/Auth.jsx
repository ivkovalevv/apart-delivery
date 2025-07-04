import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./auth.css";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if(user.isAuth){
      navigate("/profile", { replace: true })
    } 
  }, [user.isAuth])

  return (
    <div className="main-container">
      <div className="main-container-padding">
        <LoginForm></LoginForm>
      </div>
    </div>
  );
});

export default Auth;
