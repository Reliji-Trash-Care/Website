import PropTypes from "prop-types";
import React from "react";

export const TypeFiSunSize24ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_6657)">
        <path d="M16 28V30.6667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path
          d="M24.48 24.48L26.3733 26.3734"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M5.62665 26.3734L7.51998 24.48"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M28 16H30.6667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M1.33334 16H4.00001" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path
          d="M16 22.6667C19.6819 22.6667 22.6667 19.6819 22.6667 16C22.6667 12.3181 19.6819 9.33334 16 9.33334C12.3181 9.33334 9.33334 12.3181 9.33334 16C9.33334 19.6819 12.3181 22.6667 16 22.6667Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M24.48 7.51998L26.3733 5.62665"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M5.62665 5.62665L7.51998 7.51998"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M16 1.33334V4.00001" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
      <defs>
        <clipPath id="clip0_143_6657">
          <rect fill="white" height="32" width="32" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiSunSize24ColorWhite.propTypes = {
  color: PropTypes.string,
};
