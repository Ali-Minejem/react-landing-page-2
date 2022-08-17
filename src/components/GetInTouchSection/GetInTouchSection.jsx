import React, { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./GetInTouchSection.css";
import { getInTouchData } from "../../data";
import { v4 as uuidV4 } from "uuid";
import Input from "../Input/Input";
import TextArea from "../Textarea/Textarea";
import Button from "../Button/Button";
import ScrollAnimation from "react-animate-on-scroll";

function GetInTouchSection() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const title = "get in touch";
  const subtitle =
    "We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with measurable results.";
  const inputStyle = {
    border: "1px solid #ccc",
    borderRadius: 5,
    padding: "18px 20px",
    outline: "none",
    display: "block",
    width: "100%",
    marginBottom: 25,
  };
  const btnStyle = {
    backgroundColor: "#fb3e3e",
    color: "#fff",
    borderRadius: 8,
    padding: "12px 25px",
    fontWeight: 500,
    fontSize: 16,
    cursor: "pointer",
  };
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  return (
    <section className="page__section">
      <SectionTitle title={title} subtitle={subtitle} />
      <div className="get__in__touch__container">
        <ScrollAnimation
          animateIn="bounceInLeft"
          animateOut="bounceOutRight"
          animateOnce={true}
        >
          <div className="get__in__touch__container__col1">
            {getInTouchData.map(({ type, values }) => (
              <React.Fragment key={uuidV4()}>
                <div className="get__in__touch__col1__label">{type}</div>
                {values.map((value) => (
                  <div key={uuidV4()} className="get__in__touch__col1__values">
                    {value}
                  </div>
                ))}
                <br />
              </React.Fragment>
            ))}
          </div>
        </ScrollAnimation>

        <form className="get__in__touch__container__col2">
          <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="bounceOutLeft"
            animateOnce={true}
          >
            <div className="name__and__email__input__container">
              <Input
                placeholder="Your name"
                style={inputStyle}
                name="name"
                value={inputs.name}
                handleChange={handleChange}
              />
              <Input
                type="email"
                placeholder="Your email"
                style={inputStyle}
                name="email"
                value={inputs.email}
                handleChange={handleChange}
              />
            </div>
            <Input
              placeholder="Your subject..."
              style={inputStyle}
              name="subject"
              value={inputs.subject}
              handleChange={handleChange}
            />
            <TextArea
              placeholder="Your message..."
              style={inputStyle}
              name="message"
              value={inputs.message}
              handleChange={handleChange}
            />
            <div style={{ textAlign: "right" }}>
              <Button text="Send Message" style={btnStyle} />
            </div>
          </ScrollAnimation>
        </form>
      </div>
    </section>
  );
}

export default GetInTouchSection;
