import PropTypes from "prop-types";
import React from "react";

export const TypeFiPercentSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M25.3333 6.66666L6.66666 25.3333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M23.3333 26.6667C25.1743 26.6667 26.6667 25.1743 26.6667 23.3333C26.6667 21.4924 25.1743 20 23.3333 20C21.4924 20 20 21.4924 20 23.3333C20 25.1743 21.4924 26.6667 23.3333 26.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M8.66668 12C10.5076 12 12 10.5076 12 8.66668C12 6.82573 10.5076 5.33334 8.66668 5.33334C6.82573 5.33334 5.33334 6.82573 5.33334 8.66668C5.33334 10.5076 6.82573 12 8.66668 12Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiPercentSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
