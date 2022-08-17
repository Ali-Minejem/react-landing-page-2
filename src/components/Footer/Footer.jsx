import React from "react";
import "./Footer.css";
import { footerData } from "../../data";
import { v4 as uuidV4 } from "uuid";

function Footer() {
  const footerContent = footerData.map(({ title, links }) => (
    <div key={uuidV4()} className="footer__col">
      <div className="footer__col__title">{title}</div>
      <div className="footer__col__links__container">
        {links.map(({ value, href }) => (
          <a key={uuidV4()} href={href} className="footer__col__link">
            {value}
          </a>
        ))}
      </div>
    </div>
  ));

  return (
    <footer>
      <div
        className="page__section footer__content__container"
        style={{ marginTop: "-40px", marginBottom: 0 }}
      >
        {footerContent}
      </div>
      <div className="footer__alt">
        <div className="footer__alt__content">
          <div>
            Developed by{" "}
            <a
              href="https://github.com/Ali-Minejem"
              target="_blank"
              rel="noreferrer"
            >
              Ali
            </a>
          </div>
          <div>
            Inspired by
            <a
              href="http://dorsin.react.themesbrand.com/home-three"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              DORSIN
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
