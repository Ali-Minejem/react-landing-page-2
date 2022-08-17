import React from "react";
import "./ContactInfosSection.css";
import { contactInfos } from "../../data";
import { v4 as uuidV4 } from "uuid";

function ContactInfosSection() {
  const { socialMedia, contacts } = contactInfos;
  const socialMediaContent = socialMedia.map(({ icon }) => (
    <div className="social__media__icon" key={uuidV4()}>
      {icon}
    </div>
  ));
  const contactsContent = contacts.map(({ icon, value }) => (
    <div className="contacts__content__container" key={uuidV4()}>
      <div>{icon}</div>
      <p>{value}</p>
    </div>
  ));

  return (
    <section className="contact__infos__parent" id="contact">
      <div className="page__section contact__infos__container">
        <div className="social__media__container">{socialMediaContent}</div>
        <div className="contacts__container">{contactsContent}</div>
      </div>
    </section>
  );
}

export default ContactInfosSection;
