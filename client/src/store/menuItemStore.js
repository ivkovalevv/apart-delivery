import { makeAutoObservable } from "mobx";

export default class menuItemStore {
  constructor() {
    this._types = [];

    this._menuItems = [];

    this._menuItemsInCart = [];

    this._types = []; // [{ id: 1, name: "Завтраки" }, { id: 2, name: "Салаты" }, ...]
    
    this._menuItems = {}; // {rows: [{id: 1, name: "Лавашики с сыром", price: 94, image: "../assets/img/Лавашики-с-сыром.png", promo: false, raiting: true, typeId: 1}, ...]}

    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setMenuItems(menuItems) {
    this._menuItems = menuItems;
  }

  setMenuItemsInCart(menuItemsInCart) {
    this._menuItemsInCart = menuItemsInCart;
  }

  get types() {
    return this._types;
  }

  get menuItems() {
    return this._menuItems;
  }

  get menuItemsInCart() {
    return this._menuItemsInCart;
  }
}
