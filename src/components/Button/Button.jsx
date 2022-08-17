import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

function Button(props) {
  const {
    text = "",
    style = {},
    handleClick = () => {},
    type = "button",
    showArrow = false,
  } = props;

  return (
    <button className="btn" type={type} onClick={handleClick} style={style}>
      {text} {showArrow && <>&#8594;</>}
    </button>
  );
}

export default Button;

Button.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
  handleClick: PropTypes.func,
  type: PropTypes.string,
  showArrow: PropTypes.bool,
};
