import React from "react";
import PropTypes from "prop-types";

function TextArea(props) {
  const {
    type = "text",
    placeholder = "",
    style = {},
    value = "",
    name = "",
    handleChange = () => {},
  } = props;
  return (
    <>
      <textarea
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

export default TextArea;

TextArea.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};
