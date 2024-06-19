import PropTypes from "prop-types";
import React from "react";

export const TypeFiHelpCircleSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10194)">
        <path
          d="M8.00001 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00001C14.6667 4.31811 11.6819 1.33334 8.00001 1.33334C4.31811 1.33334 1.33334 4.31811 1.33334 8.00001C1.33334 11.6819 4.31811 14.6667 8.00001 14.6667Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M8 11.3333H8.00667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path
          d="M6.06 6.00001C6.21673 5.55446 6.5261 5.17875 6.9333 4.93944C7.3405 4.70012 7.81926 4.61264 8.28478 4.69249C8.7503 4.77234 9.17254 5.01436 9.47671 5.3757C9.78089 5.73703 9.94737 6.19436 9.94666 6.66668C9.94666 8.00001 7.94666 8.66668 7.94666 8.66668"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10194">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiHelpCircleSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
