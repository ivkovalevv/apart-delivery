import React from "react";

const TextareaInput = (props) => {
  return (
    <div className="form-group">
      <label htmlFor="textarea">Есть пожелания к заказу?</label>
      <textarea
        required=""
        cols="50"
        rows="10"
        id="textarea"
        name="textarea"
        value={props.textareaValue}
        placeholder={props.placeholder}
        onChange={(e) => props.setTextareaValue(e.target.value)}
      ></textarea>
    </div>
  );
};

export default TextareaInput;
