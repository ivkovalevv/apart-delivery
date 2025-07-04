import React from "react";
import { NavLink } from "react-router-dom";
import "./navitem.css";

const Navitem = (props) => {
  const burgerLinkHandler = (id) => {
    if (props.changeBurgerState) {
      props.changeBurgerState(false);
    } else return;
  };

  return (
    <li
      className={
        props.routeMap[props.currentUrl] === props.title
          ? "main-menu-item menu-item-active"
          : "main-menu-item"
      }
      onClick={() => burgerLinkHandler()}
      data-title={props.title}
    >
      <NavLink to={props.route} className="main-menu-link">
        <div
          className="main-menu-link-logo link-logo-main"
          data-title={props.title}
        ></div>
        <p className="main-menu-link-title">{props.title}</p>
      </NavLink>
    </li>
  );
};

export default Navitem;
