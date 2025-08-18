import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE, CART_ROUTE, ADMIN_ROUTE, PROFILE_ROUTE } from "../../utils/consts";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import Navbar from "../Navbar/Navbar";
import BurgerButton from "../UI/BurgerButton/BurgerButton";
import "./header.css";
import "../../styles.css";
import { getUserCart } from "../../utils/functions";

const Header = observer(() => {
  const { user } = useContext(Context);
  const [burgerState, setBurgerState] = useState(false);

  const [isModalOpened, setIsModalOpened] = useState(false);

  let userCart = getUserCart(user, user.userCart);

  let cartValue = 0;
  userCart.map((item) => {
    return (cartValue += item.quantity);
  });

  const changeBurgerState = (value) => {
    setBurgerState(value);
  };

  const showModal = () => {
    changeBurgerState();
    setIsModalOpened(true);
  };

  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="container header__container">
          <BurgerButton
            burgerState={burgerState}
            changeBurgerState={changeBurgerState}
          ></BurgerButton>
          <a className="logo-content header__logo-content">
            <div className="logo header__logo"></div>
            <div className="header__logo-text-container">
              <h4 className="heading header__logo-heading">
                Квартирная доставка
              </h4>
              <div className="header__logo-description-container">
                <p className="description header__logo-description">
                  Мы уже в двух шагах!
                </p>
              </div>
            </div>
          </a>
          <ul className="header__list">
            <li className="header__item hover-fades">
              <a
                href="tel:+79151049060"
                className="header__item-text header__item-tel"
              >
                +7 (915) 104-90-60
              </a>
            </li>
            <li className="header__item header__item-container">
              <p className="header__item-text">24/7</p>
            </li>
            <li className="header__item hover-fades">
              <a href="tel:+79151049060" className="header__item-text">
                Связаться с нами
              </a>
            </li>
          </ul>
          {user.isAuth ? (
            <div className="header__button-container">
              {/* <NavLink to={ADMIN_ROUTE}>
                <button
                  id="header-button-settings"
                  className="header__button button-settings hover-fades"
                ></button>
              </NavLink> */}
              <NavLink to={PROFILE_ROUTE}>
                <button
                  id="header-button-auth"
                  className="header__button button-auth button-true-auth hover-fades"
                ></button>
              </NavLink>
              <NavLink to={CART_ROUTE}>
                <button
                  id="header-button-cart"
                  className="header__button button-cart hover-fades"
                  onClick={() => changeBurgerState()}
                >
                  {userCart.length > 0 ? (
                    <div className="cart-value">{cartValue}</div>
                  ) : null}
                </button>
              </NavLink>
            </div>
          ) : (
            <div className="header__button-container">
              <NavLink to={LOGIN_ROUTE}>
                <button
                  id="header-button-auth"
                  className="header__button button-auth hover-fades"
                ></button>
              </NavLink>
            </div>
          )}
        </div>
      </header>

      <div
        className={burgerState ? "burger-menu burger-menu-open" : "burger-menu"}
      >
        <Navbar
          className={"burger-menu-list"}
          changeBurgerState={changeBurgerState}
        ></Navbar>
      </div>
    </div>
  );
});

export default Header;
