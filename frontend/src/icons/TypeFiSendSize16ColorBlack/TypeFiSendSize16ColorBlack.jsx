import PropTypes from "prop-types";
import React from "react";

export const TypeFiSendSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10955)">
        <path
          d="M14.6667 1.33334L7.33334 8.66668"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M14.6667 1.33334L10 14.6667L7.33334 8.66668L1.33334 6.00001L14.6667 1.33334Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10955">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiSendSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
