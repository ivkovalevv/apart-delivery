import React, { useContext } from "react";
import { useLocation, NavLink } from "react-router-dom";
import {
  LOGIN_ROUTE,
  SHOP_ROUTE,
  ABOUT_US_ROUTE,
  ADMIN_ROUTE,
  PROFILE_ROUTE,
} from "../../utils/consts";
import { routeMap } from "../../utils/routeMap";
import { routeByName } from "../../utils/functions";
import { Context } from "../../index";
import Navitem from "../UI/Navitem/Navitem";
import "./navbar.css";
import { observer } from "mobx-react-lite";

const Navbar = observer((props) => {
  const { user } = useContext(Context);
  const { menuItem } = useContext(Context);
  const currentUrl = useLocation();

  const burgerLinkHandler = () => {
    if (props.changeBurgerState) {
      props.changeBurgerState(false);
    } else return;
  };

  return (
    <ul className={props.className}>
      <Navitem
        route={SHOP_ROUTE}
        title={"Главная"}
        changeBurgerState={props.changeBurgerState}
        currentUrl={currentUrl.pathname}
        routeMap={routeMap}
      ></Navitem>

      {menuItem.types.map((item) => {
        return (
          <Navitem
            key={item.id}
            route={routeByName(item.name)}
            title={item.name}
            changeBurgerState={props.changeBurgerState}
            currentUrl={currentUrl.pathname}
            routeMap={routeMap}
          ></Navitem>
        );
      })}

      <Navitem
        route={ABOUT_US_ROUTE}
        title={"О нас"}
        changeBurgerState={props.changeBurgerState}
        currentUrl={currentUrl.pathname}
        routeMap={routeMap}
      ></Navitem>

      {props.className === "burger-menu-list" ? (
        user.isAuth ? (
          <div className="header__burger-container">
            <NavLink
              to={PROFILE_ROUTE}
              className="burger-menu__button-wrapper"
              onClick={() => burgerLinkHandler()}
            >
              <button id="burger-button-auth" className="burger-menu__button">
                <span className="burger-btn-profile-icon"></span>
                Личный кабинет
              </button>
            </NavLink>
            {/* <NavLink
              to={ADMIN_ROUTE}
              className="burger-menu__button-wrapper"
              onClick={() => burgerLinkHandler()}
            >
              <button id="burger-admin-panel" className="burger-menu__button">
                Админ панель
              </button>
            </NavLink> */}
          </div>
        ) : (
          <div className="header__burger-container">
            <NavLink
              to={LOGIN_ROUTE}
              className="burger-menu__button-wrapper"
              onClick={() => burgerLinkHandler()}
            >
              <button id="burger-button-auth" className="burger-menu__button">
                Войти
              </button>
            </NavLink>
          </div>
        )
      ) : null}
    </ul>
  );
});

export default Navbar;
