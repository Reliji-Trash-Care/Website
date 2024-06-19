import PropTypes from "prop-types";
import React from "react";

export const TypeFiPauseCircleSize24ColorBlack = ({ color = "black", className }) => {
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
      <path d="M37.3333 40V24" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M26.6667 40V24" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiPauseCircleSize24ColorBlack.propTypes = {
  color: PropTypes.string,
};
