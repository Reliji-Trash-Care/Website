import PropTypes from "prop-types";
import React from "react";

export const TypeFiCornerRightUpSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M26.6667 24.0001L40 10.6667L53.3334 24.0001"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M10.6667 53.3334H29.3333C32.1623 53.3334 34.8754 52.2096 36.8758 50.2092C38.8762 48.2088 40 45.4957 40 42.6667V10.6667"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiCornerRightUpSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
