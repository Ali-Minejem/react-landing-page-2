import React from "react";
import PropTypes from "prop-types";

function Title(props) {
  const { variant = "h1", style = {}, text = "" } = props;
  const variantHelper = {
    h1: <h1 style={style}>{text}</h1>,
    h2: <h2 style={style}>{text}</h2>,
    h3: <h3 style={style}>{text}</h3>,
    h4: <h4 style={style}>{text}</h4>,
    h5: <h5 style={style}>{text}</h5>,
    h6: <h6 style={style}>{text}</h6>,
  };
  return (
    <>{variantHelper[variant] ? variantHelper[variant] : variantHelper["h1"]}</>
  );
}

export default Title;

Title.propTypes = {
  variant: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string,
};
