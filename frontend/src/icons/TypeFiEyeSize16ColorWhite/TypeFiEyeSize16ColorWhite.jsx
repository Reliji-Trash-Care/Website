import PropTypes from "prop-types";
import React from "react";

export const TypeFiEyeSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10285)">
        <path
          d="M0.666656 7.99999C0.666656 7.99999 3.33332 2.66666 7.99999 2.66666C12.6667 2.66666 15.3333 7.99999 15.3333 7.99999C15.3333 7.99999 12.6667 13.3333 7.99999 13.3333C3.33332 13.3333 0.666656 7.99999 0.666656 7.99999Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10285">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiEyeSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
