import { makeAutoObservable, observable, action } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._user = {}; // {id: 1}
    this._userCart = []; // [{id: 1, cart: [{id: 1, quantity: 2}, {...},]}, ...]

    this._userOrderList = [];
    this._userOrders = []; // [{id: 9, orders: []}, ...]

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
    const storedCarts = localStorage.getItem(`userCart-${data.id}`);
    let allCarts = storedCarts ? JSON.parse(storedCarts) : [];

    const existingCartIndex = allCarts.findIndex((cart) => cart.id === data.id);

    if (existingCartIndex !== -1) {
      allCarts[existingCartIndex] = {
        id: data.id,
        cart: data.cart || allCarts[existingCartIndex].cart,
      };
    } else {
      allCarts.push({ id: data.id, cart: data.cart || [] });
    }

    this._userCart = allCarts;
    localStorage.setItem(`userCart-${data.id}`, JSON.stringify(allCarts));
  }

  get userCart() {
    return this._userCart;
  }

  addToCart(userId, productId) {
    let userIndex = this._userCart.findIndex((item) => item.id === userId);
    const userCart = this._userCart[userIndex];
    userCart.cart.push({ id: productId, quantity: 1 });

    localStorage.setItem(`userCart-${userId}`, JSON.stringify(this._userCart));
  }

  removeFromCart(userId, productId) {
    let userIndex = this._userCart.findIndex((item) => item.id === userId);
    const userCart = this._userCart[userIndex];

    userCart.cart = userCart.cart.filter((item) => item.id !== productId);

    localStorage.setItem(`userCart-${userId}`, JSON.stringify(this._userCart));
  }

  clearCart(userId) {
    let userIndex = this._userCart.findIndex((item) => item.id === userId);
    const userCart = this._userCart[userIndex];

    userCart.cart.splice(0, userCart.cart.length);

    localStorage.setItem(`userCart-${userId}`, JSON.stringify(this._userCart));
  }

  updateQuantity(userId, productId, newQuantity) {
    let userIndex = this._userCart.findIndex((item) => item.id === userId);
    const userCart = this._userCart[userIndex];

    const product = userCart.cart.find((item) => item.id === productId);
    if (product) {
      product.quantity = newQuantity;
    }

    localStorage.setItem(`userCart-${userId}`, JSON.stringify(this._userCart));
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

  addUserOrder(userId, userOrder) {
    let userIndex = this._userOrders.findIndex((item) => item.id === userId);
    const userOrders = this._userOrders[userIndex];

    if (userOrders) {
      userOrders.orders.push(userOrder);
    } else {
      this._userOrders.push({
        id: userId,
        orders: [userOrder],
      });
    }
  }

  updateStatus(userId, orderId, newStatus) {
    let userIndex = this._userOrders.findIndex((item) => item.id === userId);
    const userOrders = this._userOrders[userIndex];

    const order = userOrders.orders.find((order) => order.id === orderId);
    if (order) {
      order.status = newStatus;
    }
  }
}
