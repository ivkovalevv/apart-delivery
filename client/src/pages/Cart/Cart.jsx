import React, { useContext } from "react";
import { Context } from "../../index";
import Menu from "../../components/Menu/Menu";
import Schedule from "../../components/Schedule/Schedule";
import Footer from "../../components/Footer/Footer";
import "./cart.css";
import CartEmpty from "../../components/CartEmpty/CartEmpty";
import FullCart from "../../components/FullCart/FullCart";
import { observer } from "mobx-react-lite";
import { getUserCart } from "../../utils/functions";

const Cart = observer(() => {
  const { user } = useContext(Context);

  let userCart = getUserCart(user, user.userCart);

  return (
    <div className="main-container">
      {userCart.length > 0 ? (
        <FullCart></FullCart>
      ) : (
        <CartEmpty></CartEmpty>
      )}
      <div className="main-container-padding main-menu-container-padding">
        <h2 className="section-heading section__popular-heading">
          {userCart.length > 0
            ? "А может что-то ещё?"
            : "Попробовать кулинарные шедевры"}
        </h2>
        <Menu></Menu>
        <Schedule></Schedule>
      </div>
      <Footer></Footer>
    </div>
  );
});

export default Cart;
