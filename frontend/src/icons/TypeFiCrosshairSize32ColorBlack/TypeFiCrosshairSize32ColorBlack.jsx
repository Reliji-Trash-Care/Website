import PropTypes from "prop-types";
import React from "react";

export const TypeFiCrosshairSize32ColorBlack = ({ color = "black", className }) => {
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
        d="M32 58.6666C46.7276 58.6666 58.6666 46.7275 58.6666 31.9999C58.6666 17.2723 46.7276 5.33325 32 5.33325C17.2724 5.33325 5.33331 17.2723 5.33331 31.9999C5.33331 46.7275 17.2724 58.6666 32 58.6666Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M32 58.6667V48" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M58.6667 32H48" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M16 32H5.33331" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M32 15.9999V5.33325" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiCrosshairSize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
