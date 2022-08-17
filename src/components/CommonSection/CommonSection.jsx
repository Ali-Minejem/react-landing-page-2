import React from "react";
import Button from "../Button/Button";
import "./CommonSection.css";
import PropTypes from "prop-types";

function DreamSection(props) {
  const { title = "", text = "", btnText = "", src = "" } = props;
  const btnStyle = {
    zIndex: 2,
    background: "#fff",
    color: "#000",
    width: "fit-content",
    margin: "0 auto",
    marginTop: 15,
    fontSize: 14,
    fontWeight: 400,
    padding: "10px 25px",
    borderRadius: 6,
    cursor: "pointer",
  };
  return (
    <section className="dream__parent">
      <div
        className="dream__container page__section"
        style={{ backgroundImage: `url(${src})` }}
      >
        <h2>{title}</h2>
        <p style={{ maxWidth: 600, margin: "15px auto" }}>{text}</p>
        <Button text={btnText} style={btnStyle} />
      </div>
      <div className="bg-overlay"></div>
    </section>
  );
}

export default DreamSection;

DreamSection.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  btnText: PropTypes.string,
  src: PropTypes.string,
};
