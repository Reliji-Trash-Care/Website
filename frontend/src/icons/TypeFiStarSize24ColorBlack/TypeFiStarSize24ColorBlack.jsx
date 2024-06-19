import PropTypes from "prop-types";
import React from "react";

export const TypeFiStarSize24ColorBlack = ({ color = "black", className }) => {
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
        d="M16 2.66666L20.12 11.0133L29.3333 12.36L22.6667 18.8533L24.24 28.0267L16 23.6933L7.75999 28.0267L9.33332 18.8533L2.66666 12.36L11.88 11.0133L16 2.66666Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiStarSize24ColorBlack.propTypes = {
  color: PropTypes.string,
};
