import { makeAutoObservable, observable, action } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = true;
    this._user = {id: 1};
    this._userCart = [{id: 1, cart: []}];

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

  setUserCart(data) {
    let personalCart = {
      id: data.id,
      cart: [],
    }
    this._userCart.push(personalCart);
  }

  get userCart() {
    return this._userCart;
  }

  addToCart(userId, productId) {
    let userIndex = this._userCart.findIndex(item => item.id === userId);
    const userCart = this._userCart[userIndex];
    userCart.cart.push({ id: productId, quantity: 1 });
  }

  removeFromCart(userId, productId) {
    let userIndex = this._userCart.findIndex(item => item.id === userId);
    const userCart = this._userCart[userIndex];

    userCart.cart = userCart.cart.filter((item) => item.id !== productId);
  }

  clearCart(userId) {
    let userIndex = this._userCart.findIndex(item => item.id === userId);
    const userCart = this._userCart[userIndex];

    userCart.cart.splice(0, this._userCart.length);
  }

  updateQuantity(userId, productId, newQuantity) {
    let userIndex = this._userCart.findIndex(item => item.id === userId);
    const userCart = this._userCart[userIndex];
    
    const product = userCart.cart.find((item) => item.id === productId);
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
