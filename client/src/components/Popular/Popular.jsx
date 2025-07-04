import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../index";
import Productitem from "../UI/Productitem/Productitem";
import "./popular.css";
import { fetchMenuItems } from "../../http/menuItemAPI";
import Loader from "../../components/UI/Loader/Loader";

const Popular = () => {
  const { user } = useContext(Context);
  const { menuItem } = useContext(Context);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMenuItems()
      .then((data) => {
        menuItem.setMenuItems(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Loader />;
  }

   const cartItemsQuantityMap = user.userCart.reduce((acc, item) => {
    acc[item.id] = item.quantity;
    return acc;
  }, {});

  const popularProducts = menuItem.menuItems.rows.filter((item) => {
    return item.raiting === true
  })

  const productsWithCartStatus = popularProducts.map((item) => {
    const isInCart = user.userCart.some((cartItem) => cartItem.id === item.id);
    return {
      ...item,
      inCart: isInCart,
    };
  });

  return (
    <section className="section section__popular">
      <h2 className="section-heading section__popular-heading">
        Выбор гурманов
      </h2>
      <ul className="products-list">
        {productsWithCartStatus.map((item) => {
            return (
              <Productitem
                key={item.id}
                id={item.id}
                name={item.name}
                delivery_time="150 лет"
                price={item.price}
                image={item.image}
                inCart={item.inCart}
                promo={item.promo}
                quantity={cartItemsQuantityMap[item.id]}
              ></Productitem>
            );
          })}
      </ul>
    </section>
  );
};

export default Popular;
