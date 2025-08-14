import React from "react";
import "./phoneinput.css";

const PhoneInput = (props) => {
  const handleFocus = (fullNumber) => {
    if (!fullNumber.startsWith('+7 ')) {
        props.setPhoneValue('+7 ');
    }
  };

  const handleBlur = (fullNumber) => {
    if (fullNumber === '+7 ') {
        props.setPhoneValue('');
    }
  };

  const handleChange = (fullNumber) => {
    if (!/^\+7 \d*$/.test(fullNumber) && fullNumber !== '+7 ') {
        return;
    }
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
        maxLength="13"
        onChange={(e) => handleChange(e.target.value)}
        onFocus={(e) => handleFocus(e.target.value)}
        onBlur={(e) => handleBlur(e.target.value)}
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
