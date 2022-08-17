import React from "react";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import Title from "../Title/Title";
import "./Header.css";
import ScrollAnimation from "react-animate-on-scroll";

const TITLE_STYLE = {
  margin: "0 auto",
  textAlign: "center",
  color: "#fff",
  fontSize: "50px",
  lineHeight: "74px",
  maxWidth: "680px",
  fontWeight: 400,
  marginTop: 100,
};
const PARAGRAPH_STYLE = {
  margin: "0 auto",
  marginTop: "20px",
  textAlign: "center",
  color: "#fff",
  fontSize: "15px",
  lineHeight: "25px",
  padding: "0 15px",
  maxWidth: "550px",
  fontWeight: "lighter",
};
const BTN_STYLE = {
  display: "block",
  margin: "25px auto",
  textAlign: "center",
  color: "#fff",
  background: "#fb3e3e",
  fontSize: "17px",
  lineHeight: "25px",
  maxWidth: "550px",
  fontWeight: "regular",
  padding: "7px 30px",
  borderRadius: "25px",
  cursor: "pointer",
};

function Header() {
  return (
    <header
      className="Header"
      style={{ backgroundImage: "url('assets/header-img-gradient.png')" }}
    >
      <Navbar />
      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut"
        animateOnce={true}
      >
        <Title
          variant="h1"
          text="We help startups launch their products"
          style={TITLE_STYLE}
        />
        <p style={PARAGRAPH_STYLE}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non maxime,
          odit nesciunt totam quas eius qui commodi deleniti at ullam id fuga
          harum !
        </p>
        <Button text="Try it free" handleClick={() => {}} style={BTN_STYLE} />
      </ScrollAnimation>
    </header>
  );
}

export default Header;
