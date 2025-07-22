import { makeAutoObservable } from "mobx";

export default class ModalsStore {
  constructor() {
    this._isModalPromoActivatedOpen = false;
    this._isModalSuccessfulOrderOpen = false;
    this._isModalConfirmOpen = false;
    this._modalConfirmOptions = {
      title: "Очиститиь корзину",
      description: "Вы действительно хотите очистить корзину?",
      function: function () {
        return
      },
      buttons: 2,
      buttonTitle: "Оформить заказ",
    };

    makeAutoObservable(this);
  }

  setIsModalPromoActivatedOpen(bool) {
    this._isModalPromoActivatedOpen = bool;
  }

  get isModalPromoActivatedOpen() {
    return this._isModalPromoActivatedOpen;
  }

  setIsModalSuccessfulOrderOpen(bool) {
    this._isModalSuccessfulOrderOpen = bool;
  }

  get isModalSuccessfulOrderOpen() {
    return this._isModalSuccessfulOrderOpen;
  }

  setIsModalConfirmOpen(bool) {
    this._isModalConfirmOpen = bool;
  }

  get isModalConfirmOpen() {
    return this._isModalConfirmOpen;
  }

  setModalConfirmOptions(obj) {
    this._modalConfirmOptions = obj;
  }

  get modalConfirmOptions() {
    return this._modalConfirmOptions;
  }
}
