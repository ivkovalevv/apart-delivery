import React from "react";
import "./phoneinput.css";

const PhoneInput = (props) => {
  const handleChange = (fullNumber) => {
    props.setPhoneValue(fullNumber);

    props.setIsValidPhoneValue(true);
    props.setIsCorrectPhoneValue(true);
  };

  return (
    <div className="form-group">
      <label htmlFor="tel">Телефон для связи</label>
      <input
        id="tel"
        type="text"
        required
        value={props.phoneValue}
        maxLength="12"
        onChange={(e) => handleChange(e.target.value)}
        placeholder={"Введите ваш номер"}
        className={
          !props.isValidPhoneValue || !props.isCorrectPhoneValue
            ? "tel input-invalide"
            : "tel"
        }
      />
      <p
        className={
          !props.isValidPhoneValue || !props.isCorrectPhoneValue
            ? "invalid-message invalid-message-tel invalid-message-active"
            : "invalid-message invalid-message-tel"
        }
      >
        {props.isCorrectPhoneValue
          ? "Заполните это поле."
          : "Введите полный номер телефона."}
      </p>
    </div>
  );
};

export default PhoneInput;
