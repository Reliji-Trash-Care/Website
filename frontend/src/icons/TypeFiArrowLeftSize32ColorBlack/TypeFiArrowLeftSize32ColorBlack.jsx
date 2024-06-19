import PropTypes from "prop-types";
import React from "react";

export const TypeFiArrowLeftSize32ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M50.6666 32H13.3333" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M32 50.6666L13.3333 31.9999L32 13.3333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiArrowLeftSize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
