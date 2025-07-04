import React from "react";
import { NavLink } from "react-router-dom";
import "./menuitem.css";

const Menuitem = (props) => {
  return (
    <NavLink
      to={props.route}
      className="main-menu__link"
      data-title={props.title}
    >
      <li className="main-menu__item">
        <p className="main-menu__item-title">{props.title}</p>
      </li>
    </NavLink>
  );
};

export default Menuitem;
