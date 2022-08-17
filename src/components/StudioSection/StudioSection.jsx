import React from "react";
import Button from "../Button/Button";
import "./StudioSection.css";
import ScrollAnimation from "react-animate-on-scroll";

function StudioSection() {
  const btnLearnMoreStyle = {
    backgroundColor: "#fb3e3e",
    padding: "10px 25px",
    color: "#fff",
    fontSize: 14,
    fontWeight: 500,
    borderRadius: 5,
    cursor: "pointer",
  };
  return (
    <section className="studio__section__parent" id="features">
      <div className="studio__section page__section">
        <ScrollAnimation
          animateIn="bounceInLeft"
          animateOut="bounceOutRight"
          animateOnce={true}
        >
          <div className="studio__section__col studio__section__col1">
            <h3>
              A digital web design studio creating
              <br className="no__mobile" />
              modern & engaging online
              <br className="no__mobile" /> experiences
            </h3>
            <p>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean. A small river named Duden flows
              by their place and supplies it with the necessary regelialia.
            </p>
            <ul>
              <li>We put a lot of effort in design.</li>
              <li>The most important ingredient of successful website.</li>
              <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
              <li>Submit Your Orgnization.</li>
            </ul>
            <Button text="Learn More" style={btnLearnMoreStyle} />
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="bounceInRight"
          animateOut="bounceOutLeft"
          animateOnce={true}
        >
          <div className="studio__section__col studio__section__col2">
            <div>
              <img
                src="assets/mobile.png"
                alt="vaslnk"
                className="img__fluid"
              />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

export default StudioSection;
