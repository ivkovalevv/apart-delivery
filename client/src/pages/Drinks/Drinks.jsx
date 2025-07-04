import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../index";
import Productitem from "../../components/UI/Productitem/Productitem";
import Schedule from "../../components/Schedule/Schedule";
import Footer from "../../components/Footer/Footer";
import MenuElse from "../../components/MenuElse/MenuElse";
import { observer } from "mobx-react-lite";
import { fetchMenuItems } from "../../http/menuItemAPI";
import Loader from "../../components/UI/Loader/Loader";
import { getRelevantProducts, getUserCart } from "../../utils/functions";

const Drinks = observer(() => {
  const title = "Напитки";
  const { user } = useContext(Context);
  const { menuItem } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);
  const [relevantProducts, setRelevantProducts] = useState([]);

  let userCart = getUserCart(user, user.userCart);

  useEffect(() => {
    fetchMenuItems()
      .then((data) => {
        menuItem.setMenuItems(data);
        setRelevantProducts(getRelevantProducts(title, menuItem, userCart));
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setRelevantProducts(getRelevantProducts(title, menuItem, userCart));
  }, [JSON.stringify(user.userCart)]);

  return (
    <div className="main-container">
      <div className="main-container-padding">
        <h2 className="section-heading section__popular-heading">{title}</h2>
        <ul className="products-list">
          {isLoading 
            ? <Loader />
            : relevantProducts.map((item) => {
              return (
                <Productitem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  delivery_time="150 лет"
                  price={item.price}
                  image={item.image}
                  inCart={item.inCart}
                  quantity={item.quantity}
                ></Productitem>
              );
            })
          }
        </ul>
      </div>
      <div className="main-container-padding main-menu-container-padding">
        <MenuElse title={title}></MenuElse>
        <Schedule></Schedule>
      </div>
      <Footer></Footer>
    </div>
  );
});

export default Drinks;
