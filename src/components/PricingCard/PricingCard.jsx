import React from "react";
import Button from "../Button/Button";
import "./PricingCard.css";
import PropTypes from "prop-types";

function PricingCard(props) {
  const {
    type = "",
    pricing = 0,
    billing = "",
    bandwidth = "",
    onlineSpace = "",
    support = "",
    domain = "",
    hiddenFees = "",
  } = props;
  const btnStyle = {
    backgroundColor: "#fb3e3e",
    color: "#fff",
    borderRadius: 8,
    padding: "10px 25px",
    fontWeight: 500,
    fontSize: 14,
    cursor: "pointer",
  };
  return (
    <div className="pricing__card__container rounded">
      <div className="pricing__card__header">
        <div className="pricing__card__header__title">{type}</div>
        <div className="pricing__card__header__pricing">${pricing}</div>
        <div className="pricing__card__header__billing">{billing}</div>
      </div>
      <hr />
      <br />
      <div className="pricing__card__body">
        <div>
          Bandwidth: <span>{bandwidth}</span>
        </div>
        <div>
          OnlineSpace: <span>{onlineSpace}</span>
        </div>
        <div>
          Support: <span>{support}</span>
        </div>
        <div>
          Domain: <span>{domain}</span>
        </div>
        <div>
          Hidden Fees: <span>{hiddenFees}</span>
        </div>
        <Button text="Join Now" style={btnStyle} />
      </div>
    </div>
  );
}

export default PricingCard;

PricingCard.propTypes = {
  type: PropTypes.string,
  pricing: PropTypes.number,
  billing: PropTypes.string,
  bandwidth: PropTypes.string,
  onlineSpace: PropTypes.string,
  support: PropTypes.string,
  domain: PropTypes.string,
  hiddenFees: PropTypes.string,
};
