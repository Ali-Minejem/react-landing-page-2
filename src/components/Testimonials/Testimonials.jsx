import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Testimonials.css";
import { testimonialsData } from "../../data";
import { v4 as uuidV4 } from "uuid";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import ScrollAnimation from "react-animate-on-scroll";

function Testimonials() {
  const title = "WHAT THEY'VE SAID";
  const subtitle =
    "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli";

  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" animateOnce={true}>
      <section className="page__section" id="testimonials">
        <SectionTitle title={title} subtitle={subtitle} />
        <div className="testimonials__container">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard {...testimonial} key={uuidV4()} />
          ))}
        </div>
        <br />
      </section>
    </ScrollAnimation>
  );
}

export default Testimonials;
