import PropTypes from "prop-types";
import React from "react";

export const TypeFiFlagSize64ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.33334 29.3333V20" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M5.33334 20C5.33334 20 6.66668 18.6667 10.6667 18.6667C14.6667 18.6667 17.3333 21.3333 21.3333 21.3333C25.3333 21.3333 26.6667 20 26.6667 20V3.99999C26.6667 3.99999 25.3333 5.33332 21.3333 5.33332C17.3333 5.33332 14.6667 2.66666 10.6667 2.66666C6.66668 2.66666 5.33334 3.99999 5.33334 3.99999V20Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiFlagSize64ColorBlack.propTypes = {
  color: PropTypes.string,
};
