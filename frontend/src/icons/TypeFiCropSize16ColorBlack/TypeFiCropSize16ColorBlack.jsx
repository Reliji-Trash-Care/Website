import PropTypes from "prop-types";
import React from "react";

export const TypeFiCropSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_11376)">
        <path
          d="M4.08667 0.666656L4 10.6667C4 11.0203 4.14048 11.3594 4.39052 11.6095C4.64057 11.8595 4.97971 12 5.33333 12H15.3333"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M0.666656 4.08667L10.6667 4C11.0203 4 11.3594 4.14048 11.6095 4.39052C11.8595 4.64057 12 4.97971 12 5.33333V15.3333"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_11376">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiCropSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
