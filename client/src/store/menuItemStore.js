import { makeAutoObservable } from "mobx";

export default class menuItemStore {
  constructor() {
    this._types = [];

    this._menuItems = [];

    this._menuItemsInCart = [];

    this._types = [
      { id: 1, name: "Завтраки" },
      { id: 2, name: "Салаты" },
      { id: 3, name: "Горячее" },
      { id: 4, name: "Десерты" },
      { id: 5, name: "Закуски" },
      { id: 6, name: "Напитки" },
    ];

    this._menuItems = {
      rows: [
      {
        id: 1,
        name: "Лавашики с сыром",
        price: 94,
        image: "../assets/img/Лавашики-с-сыром.png",
        promo: false,
        raiting: true,
        typeId: 1,
      },
      {
        id: 2,
        name: "Салат цезарь",
        price: 462,
        image: "../assets/img/Салат-цезарь.png",
        promo: false,
        raiting: true,
        typeId: 2,
      },
      {
        id: 3,
        name: "Паста карбонара",
        price: 671,
        image: "../assets/img/Паста-карбонара.png",
        promo: false,
        raiting: true,
        typeId: 3,
      },
      {
        id: 4,
        name: "Чизкейк классический",
        price: 154,
        image: "../assets/img/Чизкейк-классический.png",
        promo: false,
        raiting: true,
        typeId: 4,
      },
      {
        id: 5,
        name: "Чипсы",
        price: 119,
        image: "../assets/img/Чипсы.png",
        promo: false,
        raiting: true,
        typeId: 5,
      },
      {
        id: 6,
        name: "Капучино",
        price: 160,
        image: "../assets/img/Капучино.png",
        promo: false,
        raiting: true,
        typeId: 6,
      },
    ]
    };

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
