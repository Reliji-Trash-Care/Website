import PropTypes from "prop-types";
import React from "react";

export const TypeFiLayersSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_11214)">
        <path
          d="M1.33334 11.3333L8.00001 14.6667L14.6667 11.3333"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M1.33334 8L8.00001 11.3333L14.6667 8"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M8.00001 1.33334L1.33334 4.66668L8.00001 8.00001L14.6667 4.66668L8.00001 1.33334Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_11214">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiLayersSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
