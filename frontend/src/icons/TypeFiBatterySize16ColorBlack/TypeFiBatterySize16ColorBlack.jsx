import PropTypes from "prop-types";
import React from "react";

export const TypeFiBatterySize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_11518)">
        <path
          d="M15.3333 8.66668V7.33334"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M11.3333 4H1.99999C1.26361 4 0.666656 4.59695 0.666656 5.33333V10.6667C0.666656 11.403 1.26361 12 1.99999 12H11.3333C12.0697 12 12.6667 11.403 12.6667 10.6667V5.33333C12.6667 4.59695 12.0697 4 11.3333 4Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_11518">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiBatterySize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
