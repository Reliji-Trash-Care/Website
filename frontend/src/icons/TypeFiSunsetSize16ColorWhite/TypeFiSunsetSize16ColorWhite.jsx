import PropTypes from "prop-types";
import React from "react";

export const TypeFiSunsetSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_9789)">
        <path
          d="M15.3333 14.6667H0.666656"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M14 12H15.3333" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M0.666656 12H1.99999" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path
          d="M11.3333 12C11.3333 11.1159 10.9821 10.2681 10.357 9.64297C9.73189 9.01785 8.88404 8.66666 7.99999 8.66666C7.11593 8.66666 6.26809 9.01785 5.64297 9.64297C5.01785 10.2681 4.66666 11.1159 4.66666 12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M12.24 7.75999L13.1867 6.81332"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M2.81335 6.81332L3.76002 7.75999"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M8 6.00001V1.33334" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path
          d="M10.6667 3.33334L8.00001 6.00001L5.33334 3.33334"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_9789">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiSunsetSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
