import PropTypes from "prop-types";
import React from "react";

export const TypeFiLayersSize24ColorWhite = ({ color = "white", className }) => {
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
        d="M5.33331 45.3333L32 58.6666L58.6666 45.3333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M5.33331 32L32 45.3333L58.6666 32"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M32 5.33325L5.33331 18.6666L32 31.9999L58.6666 18.6666L32 5.33325Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiLayersSize24ColorWhite.propTypes = {
  color: PropTypes.string,
};
