import React from "react";
import "./TestimonialCard.css";
import PropTypes from "prop-types";

function TestimonialCard(props) {
  const { src = "", testimonial = "", owner = "" } = props;
  return (
    <div className="testimonial__card__container">
      <div className="testimonial__img__container">
        <img src={src} alt={owner} className="testimonial__img" />
      </div>
      <div className="testimonial__content">
        <i>" </i>
        {testimonial}
        <i> "</i>
      </div>
      <div className="testimonial__owner">{owner}</div>
    </div>
  );
}

export default TestimonialCard;

TestimonialCard.propTypes = {
  src: PropTypes.string,
  testimonial: PropTypes.string,
  owner: PropTypes.string,
};
