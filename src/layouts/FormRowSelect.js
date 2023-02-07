import React from "react";

const FormRowSelect = ({ name, labelText, options, value, handleChange }) => {
  return (
    <div className="form-row">
      <label className="form-label" htmlFor={name}>
        {labelText || name}
      </label>
      <select
        className="form-select"
        id={name}
        name={name}
        onChange={handleChange}
        value={value}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormRowSelect;
