import PropTypes from "prop-types";
import React from "react";

export const TypeFiRewindSize32ColorWhite = ({ color = "white", className }) => {
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
        d="M14.6667 12.6667L8.66666 8.00001L14.6667 3.33334V12.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M7.33334 12.6667L1.33334 8.00001L7.33334 3.33334V12.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiRewindSize32ColorWhite.propTypes = {
  color: PropTypes.string,
};
