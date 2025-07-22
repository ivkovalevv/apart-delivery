import { makeAutoObservable } from "mobx";

export default class ModalsStore {
  constructor() {
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
