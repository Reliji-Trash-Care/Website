import PropTypes from "prop-types";
import React from "react";

export const TypeFiChevronsLeftSize32ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.3333 45.3334L16 32.0001L29.3333 18.6667"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M48 45.3334L34.6667 32.0001L48 18.6667"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiChevronsLeftSize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
