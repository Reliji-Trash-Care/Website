import PropTypes from "prop-types";
import React from "react";

export const TypeFiCheckSize16ColorWhite = ({ color = "white", className }) => {
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
        d="M26.6667 8L12 22.6667L5.33334 16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiCheckSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
