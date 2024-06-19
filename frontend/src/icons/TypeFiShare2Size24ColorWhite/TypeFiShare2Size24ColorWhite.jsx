import PropTypes from "prop-types";
import React from "react";

export const TypeFiShare2Size24ColorWhite = ({ color = "white", className }) => {
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
        d="M24 29.3333C26.2091 29.3333 28 27.5425 28 25.3333C28 23.1242 26.2091 21.3333 24 21.3333C21.7909 21.3333 20 23.1242 20 25.3333C20 27.5425 21.7909 29.3333 24 29.3333Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M8 20C10.2091 20 12 18.2091 12 16C12 13.7909 10.2091 12 8 12C5.79086 12 4 13.7909 4 16C4 18.2091 5.79086 20 8 20Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M11.4533 18.0133L20.56 23.32"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M24 10.6667C26.2091 10.6667 28 8.8758 28 6.66666C28 4.45752 26.2091 2.66666 24 2.66666C21.7909 2.66666 20 4.45752 20 6.66666C20 8.8758 21.7909 10.6667 24 10.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M20.5466 8.67999L11.4533 13.9867"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiShare2Size24ColorWhite.propTypes = {
  color: PropTypes.string,
};
