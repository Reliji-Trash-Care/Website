import PropTypes from "prop-types";
import React from "react";

export const TypeFiBatteryChargingSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_11514)">
        <path
          d="M15.3333 8.66668V7.33334"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M3.33332 12H1.99999C1.64637 12 1.30723 11.8595 1.05718 11.6095C0.807132 11.3594 0.666656 11.0203 0.666656 10.6667V5.33333C0.666656 4.97971 0.807132 4.64057 1.05718 4.39052C1.30723 4.14048 1.64637 4 1.99999 4H4.12666M9.99999 4H11.3333C11.6869 4 12.0261 4.14048 12.2761 4.39052C12.5262 4.64057 12.6667 4.97971 12.6667 5.33333V10.6667C12.6667 11.0203 12.5262 11.3594 12.2761 11.6095C12.0261 11.8595 11.6869 12 11.3333 12H9.20666"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M7.33332 4L4.66666 8H8.66666L5.99999 12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_11514">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiBatteryChargingSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
