import PropTypes from "prop-types";
import React from "react";

export const TypeFiFlagSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.66666 14.6667V10" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M2.66666 10C2.66666 10 3.33332 9.33334 5.33332 9.33334C7.33332 9.33334 8.66666 10.6667 10.6667 10.6667C12.6667 10.6667 13.3333 10 13.3333 10V2.00001C13.3333 2.00001 12.6667 2.66668 10.6667 2.66668C8.66666 2.66668 7.33332 1.33334 5.33332 1.33334C3.33332 1.33334 2.66666 2.00001 2.66666 2.00001V10Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiFlagSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
