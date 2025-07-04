import React, { useContext } from "react";
import { Context } from "../../index";
import Menuitem from "../UI/Menuitem/Menuitem";
import { routeByName } from "../../utils/functions";
import "./menu.css";

const MenuElse = (props) => {
  const { menuItem } = useContext(Context);

  return (
    <section className="section section__main-menu">
      <h3 className="section-heading">А может что-то ещё?</h3>
      <ul className="main-menu__list">
        {menuItem.types.map((item) => {
          if (props.title !== item.name) {
            return (
              <Menuitem
                key={item.id}
                route={routeByName(item.name)}
                title={item.name}
              ></Menuitem>
            );
          }
        })}
      </ul>
    </section>
  );
};

export default MenuElse;
