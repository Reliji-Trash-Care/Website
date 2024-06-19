import PropTypes from "prop-types";
import React from "react";

export const TypeFiAlertOctagonSize64ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.96 5.33325H43.04L58.6667 20.9599V43.0399L43.04 58.6666H20.96L5.33337 43.0399V20.9599L20.96 5.33325Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M32 42.6667H32.0267" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M32 21.3333V31.9999" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiAlertOctagonSize64ColorBlack.propTypes = {
  color: PropTypes.string,
};
