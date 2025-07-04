import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import React, { useContext } from "react";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import Popular from "../../components/Popular/Popular";
import Schedule from "../../components/Schedule/Schedule";
import Chief from "../../components/Сhief/Сhief";

const Shop = observer(() => {
  return (
    <div className="main-container">
      <div className="main-container-padding">
        <Banner></Banner>
      </div>
      <div className="main-container-padding main-menu-container-padding">
        <Menu></Menu>
        <Popular></Popular>
        <Chief></Chief>
        <Schedule></Schedule>
      </div>
      <Footer></Footer>
    </div>
  );
});

export default Shop;
