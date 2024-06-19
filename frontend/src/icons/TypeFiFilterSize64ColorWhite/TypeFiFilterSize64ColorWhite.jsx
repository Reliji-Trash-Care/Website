import PropTypes from "prop-types";
import React from "react";

export const TypeFiFilterSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M29.3333 4H2.66666L13.3333 16.6133V25.3333L18.6667 28V16.6133L29.3333 4Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiFilterSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
