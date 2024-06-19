import PropTypes from "prop-types";
import React from "react";

export const TypeFiCodeSize32ColorBlack = ({ color = "black", className }) => {
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
        d="M42.6667 48L58.6667 32L42.6667 16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M21.3333 16L5.33331 32L21.3333 48"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiCodeSize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
