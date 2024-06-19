import PropTypes from "prop-types";
import React from "react";

export const TypeFiStarSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10870)">
        <path
          d="M8.00001 1.33334L10.06 5.50668L14.6667 6.18001L11.3333 9.42668L12.12 14.0133L8.00001 11.8467L3.88001 14.0133L4.66668 9.42668L1.33334 6.18001L5.94001 5.50668L8.00001 1.33334Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10870">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiStarSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
