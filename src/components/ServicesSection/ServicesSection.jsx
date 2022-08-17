import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./ServicesSection.css";
import { cardListData } from "../../data";
import { v4 as uuidV4 } from "uuid";
import CardService from "../CardService/CardService";
import ScrollAnimation from "react-animate-on-scroll";

function ServicesSection() {
  const subtitle =
    "We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.";

  const cardListContent = cardListData.map(({ Icon, title, body }, index) => (
    <React.Fragment key={uuidV4()}>
      <CardService Icon={Icon} title={title} body={body} />
      {index + 1 === cardListData.length / 2 && <div className="break"></div>}
    </React.Fragment>
  ));

  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" animateOnce={true}>
      <section className="page__section services__section" id="services">
        <SectionTitle title="Our services" subtitle={subtitle} />
        <div className="services__card__container">{cardListContent}</div>
      </section>
    </ScrollAnimation>
  );
}

export default ServicesSection;
