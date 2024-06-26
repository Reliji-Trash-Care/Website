import PropTypes from "prop-types";
import React from "react";

export const TypeFiCameraSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10578)">
        <path
          d="M15.3333 12.6667C15.3333 13.0203 15.1928 13.3594 14.9428 13.6095C14.6927 13.8595 14.3536 14 14 14H1.99999C1.64637 14 1.30723 13.8595 1.05718 13.6095C0.807132 13.3594 0.666656 13.0203 0.666656 12.6667V5.33333C0.666656 4.97971 0.807132 4.64057 1.05718 4.39052C1.30723 4.14048 1.64637 4 1.99999 4H4.66666L5.99999 2H9.99999L11.3333 4H14C14.3536 4 14.6927 4.14048 14.9428 4.39052C15.1928 4.64057 15.3333 4.97971 15.3333 5.33333V12.6667Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M8.00001 11.3333C9.47277 11.3333 10.6667 10.1394 10.6667 8.66667C10.6667 7.19391 9.47277 6 8.00001 6C6.52725 6 5.33334 7.19391 5.33334 8.66667C5.33334 10.1394 6.52725 11.3333 8.00001 11.3333Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10578">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiCameraSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
