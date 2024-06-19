import PropTypes from "prop-types";
import React from "react";

export const TypeFiActivitySize64ColorWhite = ({ color = "white", className }) => {
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
        d="M14.6667 8H12L10 14L6.00001 2L4.00001 8H1.33334"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiActivitySize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
