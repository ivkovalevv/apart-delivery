import React from "react";
import Team from "../../components/Team/Team";
import Menu from "../../components/Menu/Menu";
import Schedule from "../../components/Schedule/Schedule";
import Footer from "../../components/Footer/Footer";

const AboutUs = () => {
  return (
    <div className="main-container">
      <div className="main-container-padding">
        <h2 className="section-heading section__popular-heading">
          Наша команда
        </h2>
      </div>
      <Team></Team>
      <div className="main-container-padding main-menu-container-padding">
        <h2 className="section-heading section__popular-heading">
          Попробовать кулинарные шедевры
        </h2>
        <Menu></Menu>
        <Schedule></Schedule>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
