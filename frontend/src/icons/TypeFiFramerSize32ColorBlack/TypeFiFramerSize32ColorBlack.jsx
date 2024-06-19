import PropTypes from "prop-types";
import React from "react";

export const TypeFiFramerSize32ColorBlack = ({ color = "black", className }) => {
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
        d="M6.66666 21.3333H16M6.66666 21.3333V12H25.3333V2.66666H6.66666L25.3333 21.3333H16H6.66666ZM6.66666 21.3333L16 30.6667V21.3333H6.66666Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiFramerSize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
