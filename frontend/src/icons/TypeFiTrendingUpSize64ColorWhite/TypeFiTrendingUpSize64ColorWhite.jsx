import PropTypes from "prop-types";
import React from "react";

export const TypeFiTrendingUpSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M61.3333 16L36 41.3333L22.6667 28L2.66666 48"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M45.3333 16H61.3333V32" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiTrendingUpSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
