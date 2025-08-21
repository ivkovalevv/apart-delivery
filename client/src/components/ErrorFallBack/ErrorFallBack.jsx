import React from "react";
import "./errorfallback.css";
import OopsSVG from "../SVG/OopsSVG";

const ErrorFallBack = (props) => {
  return (
    <div>
      <header className="header">
        <div className="container header__container">
          <a className="logo-content header__logo-content">
            <div className="logo header__logo"></div>
            <div className="header__logo-text-container">
              <h4 className="heading header__logo-heading">Apart Delivery</h4>
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
        </div>
      </header>
      <div className="container">
        <div className="main-content">
          <div className="error-fallback">
            <div className="error-fallback__image-wrapper">
              <OopsSVG />
            </div>
            <h1 className="error-fallback__title">
              Похоже что-то сломалось!😦
            </h1>
            <p className="error-fallback__error">
              Вот ошибка:{" "}
              <span className="error-text">{props.errorMessage}</span>
            </p>
            <p className="error-fallback__button-description">
              Сообщи разработчику, пусть скорее чинит!
            </p>
            <a
              href={`https://t.me/x_kovalev?&text=Привет!+У+тебя+на+сайте+${window.location.href}+ошибка:+"${props.errorMessage}"`}
              target="_blanc"
              className="error-fallback__button"
            >
              Сообщить разработчику
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorFallBack;
