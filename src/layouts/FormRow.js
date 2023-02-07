import React from "react";

const FormRow = ({ name, labelText, type, handleChange, value }) => {
  return (
    <div className="form-row">
      <label className="form-label" htmlFor={name}>
        {labelText || name}
      </label>
      <input
        className="form-input"
        id={name}
        name={name}
        type={type}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default FormRow;
