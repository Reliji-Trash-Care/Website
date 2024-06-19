import PropTypes from "prop-types";
import React from "react";

export const TypeFiVolume2Size24ColorBlack = ({ color = "black", className }) => {
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
        d="M29.3333 13.3333L16 23.9999H5.33334V39.9999H16L29.3333 50.6666V13.3333Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M50.8533 13.1465C55.8525 18.1473 58.6609 24.9288 58.6609 31.9999C58.6609 39.0709 55.8525 45.8525 50.8533 50.8532M41.44 22.5599C43.9396 25.0602 45.3438 28.451 45.3438 31.9865C45.3438 35.5221 43.9396 38.9128 41.44 41.4132"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiVolume2Size24ColorBlack.propTypes = {
  color: PropTypes.string,
};
