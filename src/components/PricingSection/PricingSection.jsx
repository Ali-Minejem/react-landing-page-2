import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./PricingSection.css";
import { pricingCardData } from "../../data";
import { v4 as uuidV4 } from "uuid";
import PricingCard from "../PricingCard/PricingCard";
import ScrollAnimation from "react-animate-on-scroll";

function PricingSection() {
  const subtitle =
    "Call to action pricing table is really crucial to your for your business website. Make your bids stand-out with amazing options.";

  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" animateOnce={true}>
      <section className="pricing__parent" id="pricing">
        <div className="pricing__container page__section">
          <SectionTitle title="Our pricing" subtitle={subtitle} />
          <div className="pricing__cards__container">
            {pricingCardData.map((pricingData) => (
              <PricingCard key={uuidV4()} {...pricingData} />
            ))}
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
}

export default PricingSection;
