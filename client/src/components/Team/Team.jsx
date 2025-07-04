import React from "react";
import "./team.css";

const Team = () => {
  return (
    <div className="section__team">
      <div className="section-team__container">
        <div className="main-container-padding">
          <ul className="team__list">
            <li className="team__list-item">
              <img
                src="../../assets/img/Шеф-повар.png"
                className="team__list-image"
              />
              <p className="team__list-description">Шеф-повар</p>
            </li>
            <li className="team__list-item">
              <img
                src="../../assets/img/Охранник.png"
                className="team__list-image"
              />
              <p className="team__list-description">Охранник</p>
            </li>
            <li className="team__list-item">
              <img
                src="../../assets/img/Курьер.png"
                className="team__list-image"
              />
              <p className="team__list-description">Курьер</p>
            </li>
            <li className="team__list-item">
              <img
                src="../../assets/img/Сомелье.png"
                className="team__list-image"
              />
              <p className="team__list-description">Сомелье</p>
            </li>
            <li className="team__list-item">
              <img
                src="../../assets/img/Уборщик.png"
                className="team__list-image"
              />
              <p className="team__list-description">Уборщик</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-container-padding">
        <h3 className="section__team-heading">
          <span className="team-span">Квартирная доставка</span> — это слаженный
          механизм, где каждый играет свою уникальную роль.
        </h3>
        <p className="section__team-description">
          Шеф-повар создает кулинарные шедевры, сомелье подбирает идеальные
          вина, охранник обеспечивает безопасность, уборщик поддерживает чистоту
          и порядок, а курьер — просто курьер. Вместе мы стремимся к
          совершенству, чтобы каждый ваш заказ был незабываемым!
        </p>
      </div>
    </div>
  );
};

export default Team;
