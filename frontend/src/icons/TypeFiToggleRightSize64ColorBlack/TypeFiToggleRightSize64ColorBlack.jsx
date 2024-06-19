import PropTypes from "prop-types";
import React from "react";

export const TypeFiToggleRightSize64ColorBlack = ({ color = "black", className }) => {
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
        d="M21.3333 6.66666H10.6667C5.51202 6.66666 1.33334 10.8453 1.33334 16C1.33334 21.1546 5.51202 25.3333 10.6667 25.3333H21.3333C26.488 25.3333 30.6667 21.1546 30.6667 16C30.6667 10.8453 26.488 6.66666 21.3333 6.66666Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M21.3333 20C23.5425 20 25.3333 18.2091 25.3333 16C25.3333 13.7909 23.5425 12 21.3333 12C19.1242 12 17.3333 13.7909 17.3333 16C17.3333 18.2091 19.1242 20 21.3333 20Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiToggleRightSize64ColorBlack.propTypes = {
  color: PropTypes.string,
};
