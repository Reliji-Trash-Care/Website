import PropTypes from "prop-types";
import React from "react";

export const TypeFiBookSize32ColorBlack = ({ color = "black", className }) => {
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
        d="M5.33334 26C5.33334 25.1159 5.68453 24.2681 6.30965 23.643C6.93478 23.0178 7.78262 22.6667 8.66668 22.6667H26.6667"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M8.66668 2.66666H26.6667V29.3333H8.66668C7.78262 29.3333 6.93478 28.9821 6.30965 28.357C5.68453 27.7319 5.33334 26.884 5.33334 26V5.99999C5.33334 5.11593 5.68453 4.26809 6.30965 3.64297C6.93478 3.01785 7.78262 2.66666 8.66668 2.66666V2.66666Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiBookSize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
