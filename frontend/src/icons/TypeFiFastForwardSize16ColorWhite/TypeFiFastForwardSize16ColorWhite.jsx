import PropTypes from "prop-types";
import React from "react";

export const TypeFiFastForwardSize16ColorWhite = ({ color = "white", className }) => {
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
        d="M34.6666 50.6666L58.6666 31.9999L34.6666 13.3333V50.6666Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M5.33337 50.6666L29.3334 31.9999L5.33337 13.3333V50.6666Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiFastForwardSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
