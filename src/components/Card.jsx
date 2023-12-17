  import React from "react";
  import { useEffect } from "react";
  import { useState } from "react";
  import PropTypes from "prop-types";
  import "./Card.css";
  import back from "../assets/back.png";

  const Card = ({ card, handleCardClick, disabled }) => {
    return (
      <button
        className={`card ${card.matchFound ? "matched" : ""}`}
        disabled={disabled}
        onClick={handleCardClick}
        data-id={card.id}>
        <div className="front side">
          <img
            src={back}
            alt="back"
            width="60"
          />
        </div>
        <div className="side back">
          <img
            src={card.pic}
            alt="card"
            width="60"
          />
        </div>
      </button>
    );
  };
  export default Card;

  // add prop validations
  // Prop validations
  Card.propTypes = {
    card: PropTypes.shape({
      id: PropTypes.number.isRequired,
      pic: PropTypes.string.isRequired,
      matchFound: PropTypes.bool.isRequired,
    }).isRequired,
    handleCardClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
  };
