import React from "react";

const NameInput = (props) => {
  return (
    <div className="form-group">
      <label htmlFor="name">Имя</label>
      <input
        required
        name="name"
        id="name"
        value={props.nameValue}
        placeholder="Введите имя"
        minLength="2"
        type="text"
        onChange={(e) => {
          props.setNameValue(e.target.value);
          props.setIsValidName(true);
        }}
        className={props.isValidName ? "" : "input-invalide"}
      />
      <p
        className={
          props.isValidName
            ? "invalid-message invalid-message-name"
            : "invalid-message invalid-message-name invalid-message-active"
        }
      >
        Заполните это поле.
      </p>
    </div>
  );
};

export default NameInput;
