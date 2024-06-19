import PropTypes from "prop-types";
import React from "react";

export const TypeFiMapSize64ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.33334 7.99999V29.3333L10.6667 24L21.3333 29.3333L30.6667 24V2.66666L21.3333 7.99999L10.6667 2.66666L1.33334 7.99999Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M21.3333 8V29.3333" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M10.6667 2.66666V24" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiMapSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
