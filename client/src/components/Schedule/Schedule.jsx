import React from "react";
import Ymap from "../YMap/YMap";
import "./schedule.css";

const Schedule = () => {
  return (
    <section className="section section__schedule">
      <h2 className="section-heading section__schedule-heading">
        График работы и доставка
      </h2>
      <div className="section__schedule-content">
        <ul className="section__schedule-list">
          <li className="section__schedule-item">
            <img
              src="./assets/img/svg/delivery.svg"
              className="section__schedule-item-icon"
            />
            <p className="section__schedule-item-description">
              Доставка работает 24 часа
            </p>
          </li>
          <li className="section__schedule-item">
            <img
              src="./assets/img/svg/average-time.svg"
              className="section__schedule-item-icon"
            />
            <p className="section__schedule-item-description">
              Среднее время доставки заказа ~ 20 минут
            </p>
          </li>
          <li className="section__schedule-item">
            <img
              src="./assets/img/svg/rub.svg"
              className="section__schedule-item-icon"
            />
            <p className="section__schedule-item-description">
              Минимальная сумма заказа: от 0 рублей
            </p>
          </li>
          <li className="section__schedule-item">
            <img
              src="./assets/img/svg/gift.svg"
              className="section__schedule-item-icon"
            />
            <p className="section__schedule-item-description">
              Стоимость доставки: Бесплатно!
            </p>
          </li>
          <li className="section__schedule-item">
            <img
              src="./assets/img/svg/attention.svg"
              className="section__schedule-item-icon"
            />
            <p className="section__schedule-item-description">
              Обратите ваше внимание!
              <br />
              Доставка осуществляется только по одному единственному адресу:
              улица Счастья, д. 23, кв. 2000
              <br />
              Доставка по другим адресам не осуществляется.
            </p>
          </li>
        </ul>
        <div className="map section__schedule-map">
          <Ymap/>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
