import PropTypes from "prop-types";
import React from "react";

export const TypeFiMapSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10108)">
        <path
          d="M0.666656 4.00001V14.6667L5.33332 12L10.6667 14.6667L15.3333 12V1.33334L10.6667 4.00001L5.33332 1.33334L0.666656 4.00001Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M10.6667 4V14.6667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M5.33334 1.33334V12" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
      <defs>
        <clipPath id="clip0_143_10108">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiMapSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
