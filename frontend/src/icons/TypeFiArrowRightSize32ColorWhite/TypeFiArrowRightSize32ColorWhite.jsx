import PropTypes from "prop-types";
import React from "react";

export const TypeFiArrowRightSize32ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.3333 32H50.6666" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M32 13.3333L50.6667 31.9999L32 50.6666"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiArrowRightSize32ColorWhite.propTypes = {
  color: PropTypes.string,
};
