import React from "react";
import { NavLink } from "react-router-dom";
import AdminPanelSVG from "../../components/SVG/AdminPanelSVG";
import { SHOP_ROUTE } from "../../utils/consts";
import "./admin.css";

const AdminPage = () => {
  return (
    <section className="section section-admin">
      <div class="main-container">
        <div class="main-container-padding">
          <h2 className="section-heading">Админ панель</h2>
          <div className="section-admin__content">
            <AdminPanelSVG></AdminPanelSVG>
            <p className="section-admin__description">
              Админ панель в разработке! <br /> Скоро вы сможете добавлять новые
              категории, товары и описания к ним.
            </p>
            <div className="section-admin__buttons-wrapper">
              <NavLink to={SHOP_ROUTE} className="section-account__button">
                <button className="products-item-button">На главную</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminPage;
