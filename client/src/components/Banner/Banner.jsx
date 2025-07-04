import React from "react";
import { NavLink } from "react-router-dom";
import { BREAKFASTS_ROUTE } from "../../utils/consts";
import "./banner.css";

const Banner = () => {
  return (
    <section className="section section__hero">
      <h1 className="hero__heading">
        МНОГО ХОЧЕШЬ — <br />
        МНОГО ПОЛУЧИШЬ
      </h1>
      <p className="hero__description">В мире гастрономических удовольствий</p>
      <NavLink to={BREAKFASTS_ROUTE} className="hero__button">
        Оформить заказ
      </NavLink>
    </section>
  );
};

export default Banner;
