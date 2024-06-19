import PropTypes from "prop-types";
import React from "react";

export const TypeFiChevronsDownSize24ColorBlack = ({ color = "black", className }) => {
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
        d="M9.33334 17.3333L16 24L22.6667 17.3333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M9.33334 8L16 14.6667L22.6667 8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiChevronsDownSize24ColorBlack.propTypes = {
  color: PropTypes.string,
};
