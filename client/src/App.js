import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import "./styles.css";
import ModalAuth from "./components/Modals/ModalAuth/ModalAuth";
import ModalPromoActivated from "./components/Modals/ModalPromoActivated/ModalPromoActivered";
import ModalSuccessfulOrder from "./components/Modals/ModalSuccessfulOrder/ModalSuccessfulOrder";
import ModalConfirm from "./components/Modals/ModalConfirm/ModalConfirm";
import Loader from "./components/UI/Loader/Loader";
import { Context } from "./index";
import { check } from "./http/userAPI";
import { fetchMenuItems, fetchTypes } from "./http/menuItemAPI";
import Signature from "./components/Signature/Signature";

const App = observer(() => {
  const { user } = useContext(Context);
  const { menuItem } = useContext(Context);
  const [loading, setLoading] = useState(true);

  /* useEffect(() => {
    check()
      .then((data) => {
        user.setUser(data);
        user.setIsAuth(true);
        user.setUserCart(data);
      })
      .finally(() => setLoading(false));

      fetchMenuItems()
      .then((data) => {
        menuItem.setMenuItems(data);
      })

      fetchTypes()
      .then((data) => {
        menuItem.setTypes(data);
      })

      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loader />;
  } */

  return (
    <BrowserRouter>
      <Header></Header>

      <div className="container base-container">
        <div className="main-content">
          <Navbar className="main-menu-list"></Navbar>
          <AppRouter></AppRouter>
        </div>
        <Signature/>
      </div>
      
    </BrowserRouter>
  );
});

export default App;
