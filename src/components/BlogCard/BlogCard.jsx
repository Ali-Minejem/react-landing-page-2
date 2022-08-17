import React from "react";
import Button from "../Button/Button";
import "./BlogCard.css";
import PropTypes from "prop-types";

function BlogCard(props) {
  const { categorie = "", title = "", body = "", src = "" } = props;
  const btnText = "Read more ";
  const btnStyle = {
    background: "inherit",
    fontSize: 17,
    fontWeight: 500,
    color: "#fb3e3e",
    cursor: "pointer",
    marginTop: 10,
  };

  return (
    <div className="blog__card__container">
      <div className="blog__card__img">
        <img src={src} alt={title} className="img__fluid" />
      </div>
      <div className="blog__card__categorie">{categorie}</div>
      <div className="blog__card__title">{title}</div>
      <div className="blog__card__body">{body}</div>
      <Button text={btnText} style={btnStyle} showArrow />
    </div>
  );
}

export default BlogCard;

BlogCard.propTypes = {
  categorie: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  src: PropTypes.string,
};
