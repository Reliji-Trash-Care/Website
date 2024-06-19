import PropTypes from "prop-types";
import React from "react";

export const TypeFiTrendingDownSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_9747)">
        <path
          d="M15.3333 12L8.99999 5.66667L5.66666 9L0.666656 4"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M11.3333 12H15.3333V8" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
      <defs>
        <clipPath id="clip0_143_9747">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiTrendingDownSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
