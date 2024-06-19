import PropTypes from "prop-types";
import React from "react";

export const TypeFiXOctagonSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10681)">
        <path
          d="M5.24001 1.33334H10.76L14.6667 5.24001V10.76L10.76 14.6667H5.24001L1.33334 10.76V5.24001L5.24001 1.33334Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M10 6L6 10" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M6 6L10 10" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
      <defs>
        <clipPath id="clip0_143_10681">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiXOctagonSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
