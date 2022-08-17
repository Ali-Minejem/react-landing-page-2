import React from "react";
import "./PeopleSection.css";
import { peopleData } from "../../data";
import { v4 as uuidV4 } from "uuid";
import SectionTitle from "../SectionTitle/SectionTitle";
import ScrollAnimation from "react-animate-on-scroll";

function PeopleSection() {
  const SEPARATOR_STYLE = {
    width: "100%",
    height: 2,
    marginTop: 10,
    background: "#f8f9fa",
  };
  const sectionTitle = "behind the people";
  const subtitle =
    "It is a long established fact that create category leading brand experiences a reader will be distracted by the readable content of a page when looking at its layout";

  return (
    <>
      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut"
        animateOnce={true}
      >
        <SectionTitle title={sectionTitle} subtitle={subtitle} />
        <section className="people__section__parent page__section" id="team">
          {peopleData.map(({ src, role, fullName }) => (
            <div key={uuidV4()} className="people__card__container">
              <div>
                <img src={src} alt={fullName} className="img__fluid rounded" />
              </div>
              <div className="people__card__fullname">{fullName}</div>
              <div className="people__card__role">{role}</div>
              <div style={SEPARATOR_STYLE}></div>
            </div>
          ))}
        </section>
      </ScrollAnimation>
    </>
  );
}

export default PeopleSection;
