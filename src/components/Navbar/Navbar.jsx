import React, { useState, useEffect } from "react";
import { v4 as uuidV4 } from "uuid";
import "./Navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { navLinks } from "../../data";

const BASE_STYLE = { position: "relative" };
const STICKY_STYLE = {
  position: "fixed",
  top: 0,
  width: "100%",
  background: "#272a33",
  zIndex: 5,
  transition: "0.5s",
};
const WIDTH_BREAK_POINT = 800;
const Y_POS_TO_STICKY_NAVBAR = 50;

function Navbar() {
  const [toggleNavBar, setToggleNavBar] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [scrollYPosition, setScrollYPosition] = useState(window.scrollY);
  const [stickyStyle, setStickyStyle] = useState(BASE_STYLE);

  const addMarginTopConditionnaly = scrollYPosition > 0 ? "" : "mt__-20 ";
  const navLogoItemClasses = "Navbar__logo";

  const navLinkListContent = navLinks.map(({ label, href, className }) => (
    <li key={uuidV4()} className={className} onClick={hideNavBar}>
      <a href={href}>{label}</a>
    </li>
  ));

  const handleNavBartoggling = () => {
    if (screenWidth <= WIDTH_BREAK_POINT) setToggleNavBar((prev) => !prev);
  };

  function hideNavBar(){
    setToggleNavBar(false);
  };

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      setScrollYPosition(windowHeight);
      windowHeight > Y_POS_TO_STICKY_NAVBAR
        ? setStickyStyle(STICKY_STYLE)
        : setStickyStyle(BASE_STYLE);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  useEffect(() => {}, [toggleNavBar]);

  useEffect(() => {
    function setWindowSizeListener() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", setWindowSizeListener);
    return () => {
      window.removeEventListener("resize", setWindowSizeListener);
    };
  }, [screenWidth]);

  return (
    <nav className={`Navbar ${addMarginTopConditionnaly}`} style={stickyStyle}>
      <ul>
        <li className={navLogoItemClasses}>
          <a href="/">DORSIN</a>
        </li>
        {toggleNavBar && screenWidth <= WIDTH_BREAK_POINT && navLinkListContent}
        {screenWidth > WIDTH_BREAK_POINT && navLinkListContent}
      </ul>

      <div className="Navbar__hamburger__menu" onClick={handleNavBartoggling}>
        <AiOutlineMenu size={35} color="#fb3e3e" />
      </div>
    </nav>
  );
}

export default Navbar;
