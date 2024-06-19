import PropTypes from "prop-types";
import React from "react";

export const TypeFiArrowUpLeftSize64ColorBlack = ({ color = "black", className }) => {
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
        d="M22.6667 22.6667L9.33334 9.33334"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M9.33334 22.6667V9.33334H22.6667"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiArrowUpLeftSize64ColorBlack.propTypes = {
  color: PropTypes.string,
};
