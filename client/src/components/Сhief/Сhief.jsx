import React from "react";
import "./chief.css";

const Chief = () => {
  return (
    <section className="section section__chief">
      <h2 className="section-heading section__chief-heading">Будем знакомы</h2>
      <div className="section__chief-content">
        <img
          src="./assets/img/Шеф.png"
          alt="шеф"
          className="section__chief-image"
        />
        <div className="section__chief-content-block">
          <h3 className="section__chief-content-heading">
            Ваш шеф-повар — Иван&nbsp;Ковалёв
          </h3>
          <p className="section__chief-content-description">
            Иван Ковалёв, известный во Франции как Жан Форжо, родился в
            маленькой деревне и быстро завоевал признание своими кулинарными
            талантами. Он открыл ресторан "Le Forgeron Gourmand" в Париже, где
            его необычные блюда, такие как суфле из трюфелей, сделали его
            знаменитым, а участие в шоу "Мастер-шеф: Кулинарные путешествия"
            укрепило его репутацию. Теперь он путешествует по миру, делясь
            своими рецептами и вдохновляя новых поваров на создание невероятных
            кулинарных шедевров.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Chief;
