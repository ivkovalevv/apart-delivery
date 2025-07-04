import { makeAutoObservable, observable, action } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._user = {};
    this._userCart = [
      {
        id: 1,
        quantity: 2,
      },
      {
        id: 10,
        quantity: 1,
      },
    ];
    this._userOrderList = [];
    this._userOrders = [];

    makeAutoObservable(this, {
      _isAuth: observable,
      _user: observable,
      _userCart: observable,
      _userOrderList: observable,
      _userOrders: observable,
      updateQuantity: action,
      addToCart: action,
      removeFromCart: action,
      clearCart: action,
      updateStatus: action,
    });
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }

  get isAuth() {
    return this._isAuth;
  }

  setUser(user) {
    this._user = user;
  }

  get user() {
    return this._user;
  }

  setUserCart(userCart) {
    this._userCart = userCart;
  }

  get userCart() {
    return this._userCart;
  }

  addToCart(productId) {
    this._userCart.push({ id: productId, quantity: 1 });
  }

  removeFromCart(productId) {
    this._userCart = this._userCart.filter((item) => item.id !== productId);
  }

  clearCart() {
    this._userCart.splice(0, this._userCart.length);
  }

  updateQuantity(productId, newQuantity) {
    const product = this._userCart.find((item) => item.id === productId);
    if (product) {
      product.quantity = newQuantity;
    }
  }

  setUserOrderList(userOrderList) {
    this._userOrderList = userOrderList;
  }

  get userOrderList() {
    return this._userOrderList;
  }

  setUserOrders(userOrders) {
    this._userOrders = userOrders;
  }

  get userOrders() {
    return this._userOrders;
  }

  addUserOrder(userOrder) {
    this._userOrders.push(userOrder);
  }

  updateStatus(orderId, newStatus) {
    const order = this._userOrders.find((order) => order.id === orderId);
    if (order) {
      order.status = newStatus;
    }
  }
}
