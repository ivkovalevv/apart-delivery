import { makeAutoObservable } from "mobx";

export default class ModalsStore {
  constructor() {
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

  setModalConfirmOptions(obj) {
    this._modalConfirmOptions = obj;
  }

  get modalConfirmOptions() {
    return this._modalConfirmOptions;
  }
}
