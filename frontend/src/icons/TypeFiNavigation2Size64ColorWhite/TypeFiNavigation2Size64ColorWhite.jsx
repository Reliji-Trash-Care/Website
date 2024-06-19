import PropTypes from "prop-types";
import React from "react";

export const TypeFiNavigation2Size64ColorWhite = ({ color = "white", className }) => {
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
        d="M16 2.66666L25.3333 28L16 22.6667L6.66666 28L16 2.66666Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiNavigation2Size64ColorWhite.propTypes = {
  color: PropTypes.string,
};
