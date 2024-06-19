import PropTypes from "prop-types";
import React from "react";

export const TypeFiArrowUpRightSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M4.66666 11.3333L11.3333 4.66666"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M4.66666 4.66666H11.3333V11.3333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiArrowUpRightSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
