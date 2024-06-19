import PropTypes from "prop-types";
import React from "react";

export const TypeFiGitCommitSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10231)">
        <path d="M11.34 8H15.3067" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M0.700012 8H4.66668" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path
          d="M8.00001 10.6667C9.47277 10.6667 10.6667 9.47277 10.6667 8.00001C10.6667 6.52725 9.47277 5.33334 8.00001 5.33334C6.52725 5.33334 5.33334 6.52725 5.33334 8.00001C5.33334 9.47277 6.52725 10.6667 8.00001 10.6667Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10231">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiGitCommitSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
