import React from "react";
import "./CardService.css";
import PropTypes from "prop-types";

function CardService(props) {
  const { Icon, title = "", body = "" } = props;
  return (
    <div className="card__service">
      <div className="card__icon">{Icon}</div>
      <div className="card__title">{title}</div>
      <div className="card__body">{body}</div>
    </div>
  );
}

export default CardService;

CardService.propTypes = {
  Icon: PropTypes.element,
  title: PropTypes.string,
  body: PropTypes.string,
};
