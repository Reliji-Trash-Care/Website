import PropTypes from "prop-types";
import React from "react";

export const TypeFiVolumeXSize32ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M61.3333 24L45.3333 40" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M45.3333 24L61.3333 40" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M29.3333 13.3333L16 23.9999H5.33331V39.9999H16L29.3333 50.6666V13.3333Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiVolumeXSize32ColorWhite.propTypes = {
  color: PropTypes.string,
};
