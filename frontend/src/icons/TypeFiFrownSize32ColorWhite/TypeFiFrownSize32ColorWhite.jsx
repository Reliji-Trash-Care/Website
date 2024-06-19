import PropTypes from "prop-types";
import React from "react";

export const TypeFiFrownSize32ColorWhite = ({ color = "white", className }) => {
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
        d="M32 58.6666C46.7276 58.6666 58.6667 46.7275 58.6667 31.9999C58.6667 17.2723 46.7276 5.33325 32 5.33325C17.2724 5.33325 5.33334 17.2723 5.33334 31.9999C5.33334 46.7275 17.2724 58.6666 32 58.6666Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M42.6667 42.6666C42.6667 42.6666 38.6667 37.3333 32 37.3333C25.3333 37.3333 21.3333 42.6666 21.3333 42.6666"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M40 24H40.0267" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M24 24H24.0267" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiFrownSize32ColorWhite.propTypes = {
  color: PropTypes.string,
};
