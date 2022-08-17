import React from "react";
import "./SectionTitle.css";
import PropTypes from "prop-types";

function SectionTitle(props) {
  const defaultSubtitle =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis voluptatum obcaecati alias animi maxime optio vitae ex tenetur eum nostrum.";
  const {
    title = "",
    additionnalClasses = "",
    withSubtitle = true,
    subtitle = defaultSubtitle,
  } = props;
  return (
    <>
      {" "}
      <h2 className={`section__title ${additionnalClasses}`}>
        {title.toUpperCase()}
      </h2>
      {withSubtitle && <h3 className="section__subtitle">{subtitle}</h3>}
    </>
  );
}

export default SectionTitle;

SectionTitle.propTypes = {
  title: PropTypes.string,
  additionnalClasses: PropTypes.string,
  withSubtitle: PropTypes.bool,
  subtitle: PropTypes.string,
};
