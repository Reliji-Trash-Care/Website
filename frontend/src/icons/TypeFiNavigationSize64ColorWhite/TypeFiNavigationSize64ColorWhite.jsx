import PropTypes from "prop-types";
import React from "react";

export const TypeFiNavigationSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M4 14.6667L29.3333 2.66666L17.3333 28L14.6667 17.3333L4 14.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiNavigationSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
