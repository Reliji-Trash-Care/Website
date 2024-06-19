import PropTypes from "prop-types";
import React from "react";

export const TypeFiChevronsUpSize24ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3333 12L7.99999 8.66666L4.66666 12"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M11.3333 7.33333L7.99999 4L4.66666 7.33333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiChevronsUpSize24ColorWhite.propTypes = {
  color: PropTypes.string,
};
