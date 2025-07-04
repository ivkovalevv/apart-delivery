import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import Menuitem from "../UI/Menuitem/Menuitem";
import { routeByName } from "../../utils/functions";
import { fetchTypes } from "../../http/menuItemAPI";
import Loader from "../../components/UI/Loader/Loader";
import "./menu.css";

const Menu = () => {
  const { menuItem } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      fetchTypes()
        .then((data) => {
          menuItem.setTypes(data);
        })
        .finally(() => setIsLoading(false));
    }, []);

  if (isLoading) {
    return <Loader />;
  } 

  return (
    <section className="section section__main-menu">
      <ul className="main-menu__list">
        {menuItem.types.map((item) => {
          return (
            <Menuitem
              key={item.id}
              route={routeByName(item.name)}
              title={item.name}
            ></Menuitem>
          );
        })}
      </ul>
    </section>
  );
};

export default Menu;
