import React from "react";

const BurgerButton = (props) => {
  const burgerHandler = () => {
    if (props.burgerState) {
      props.changeBurgerState(false);
      return;
    }

    props.changeBurgerState(true);
  };

  return (
    <div className="header__burger-button burger-button hover-fades">
      <svg
        className={
          props.burgerState ? "active ham hamRotate ham4" : "ham hamRotate ham4"
        }
        viewBox="0 0 95 95"
        width="65"
        onClick={() => burgerHandler()}
      >
        <path
          className="line top"
          d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
        />
        <path className="line middle" d="m 70,50 h -40" />
        <path
          className="line bottom"
          d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
        />
      </svg>
    </div>
  );
};

export default BurgerButton;
