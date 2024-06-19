import PropTypes from "prop-types";
import React from "react";

export const TypeFiSendSize24ColorWhite = ({ color = "white", className }) => {
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
        d="M29.3333 2.66666L14.6667 17.3333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M29.3333 2.66666L20 29.3333L14.6667 17.3333L2.66666 12L29.3333 2.66666Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiSendSize24ColorWhite.propTypes = {
  color: PropTypes.string,
};
