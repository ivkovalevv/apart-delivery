import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="section-heading footer__heading">Мы всегда на связи</h2>
      <p className="footer__description">
        Если у вас возникли вопросы, свяжитесь с нами любым удобным для вас
        способом
      </p>
      <div className="footer__contacts">
        <ul className="footer__contacts-list">
          <li className="footer__contacts-item">
            <h4 className="footer__contacts-item-heading">Телефон:</h4>
            <a
              href="tel:+79151049060"
              className="footer__contacts-item-description"
            >
              +7 (915) 104-90-60
            </a>
          </li>
          <li className="footer__contacts-item">
            <h4 className="footer__contacts-item-heading">Почта:</h4>
            <a
              href="mailto:ivkovalevv@gmail.com"
              className="footer__contacts-item-description"
            >
              ivkovalevv@gmail.com
            </a>
          </li>
          <li className="footer__contacts-item">
            <a
              href="https://vk.com/x.kovalev"
              className="footer__contacts-item-social"
            >
              <img
                src="./assets/img/svg/vk.svg"
                className="footer__contacts-item-social-icon icon-vk"
              />
            </a>
            <a
              href="https://t.me/x_kovalev"
              className="footer__contacts-item-social"
            >
              <img
                src="./assets/img/svg/tg.svg"
                className="footer__contacts-item-social-icon icon-tg"
              />
            </a>
            <a
              href="https://wa.me/+79151049060"
              className="footer__contacts-item-social"
            >
              <img
                src="./assets/img/svg/wa.svg"
                className="footer__contacts-item-social-icon icon-wa"
              />
            </a>
          </li>
        </ul>
        <div className="footer__contacts-qr-block">
          <a href="https://t.me/x_kovalev" className="footer__contacts-qr">
            <img
              src="./assets/img/qr.png"
              className="footer__contacts-qr-image"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
