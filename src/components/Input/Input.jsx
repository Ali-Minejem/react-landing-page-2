import React from "react";
import PropTypes from "prop-types";

function Input(props) {
  const {
    name = "",
    type = "text",
    placeholder = "",
    style = {},
    value = "",
    handleChange = () => {},
  } = props;
  return (
    <>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        style={style}
        value={value}
        onChange={handleChange}
      />
    </>
  );
}

export default Input;

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};
