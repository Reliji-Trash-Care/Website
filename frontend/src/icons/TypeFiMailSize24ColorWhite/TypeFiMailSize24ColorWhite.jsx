import PropTypes from "prop-types";
import React from "react";

export const TypeFiMailSize24ColorWhite = ({ color = "white", className }) => {
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
        d="M5.33332 5.33334H26.6667C28.1333 5.33334 29.3333 6.53334 29.3333 8.00001V24C29.3333 25.4667 28.1333 26.6667 26.6667 26.6667H5.33332C3.86666 26.6667 2.66666 25.4667 2.66666 24V8.00001C2.66666 6.53334 3.86666 5.33334 5.33332 5.33334Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M29.3333 8L16 17.3333L2.66666 8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiMailSize24ColorWhite.propTypes = {
  color: PropTypes.string,
};
