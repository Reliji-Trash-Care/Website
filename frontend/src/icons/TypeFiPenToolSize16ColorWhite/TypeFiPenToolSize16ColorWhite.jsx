import PropTypes from "prop-types";
import React from "react";

export const TypeFiPenToolSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10006)">
        <path
          d="M8 12.6667L12.6667 8L14.6667 10L10 14.6667L8 12.6667Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M12 8.66668L11 3.66668L1.33334 1.33334L3.66668 11L8.66668 12L12 8.66668Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M1.33334 1.33334L6.39068 6.39068"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M7.33333 8.66667C8.06971 8.66667 8.66667 8.06971 8.66667 7.33333C8.66667 6.59695 8.06971 6 7.33333 6C6.59695 6 6 6.59695 6 7.33333C6 8.06971 6.59695 8.66667 7.33333 8.66667Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10006">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiPenToolSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
