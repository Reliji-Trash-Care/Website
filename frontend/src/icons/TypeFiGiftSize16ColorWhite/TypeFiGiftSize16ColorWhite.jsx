import PropTypes from "prop-types";
import React from "react";

export const TypeFiGiftSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10240)">
        <path
          d="M13.3333 8V14.6667H2.66666V8"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M14.6667 4.66666H1.33334V7.99999H14.6667V4.66666Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M8 14.6667V4.66666" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path
          d="M8 4.66668H11C11.442 4.66668 11.866 4.49108 12.1785 4.17852C12.4911 3.86596 12.6667 3.44204 12.6667 3.00001C12.6667 2.55798 12.4911 2.13406 12.1785 1.8215C11.866 1.50894 11.442 1.33334 11 1.33334C8.66667 1.33334 8 4.66668 8 4.66668Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M8.00001 4.66668H5.00001C4.55798 4.66668 4.13406 4.49108 3.8215 4.17852C3.50894 3.86596 3.33334 3.44204 3.33334 3.00001C3.33334 2.55798 3.50894 2.13406 3.8215 1.8215C4.13406 1.50894 4.55798 1.33334 5.00001 1.33334C7.33334 1.33334 8.00001 4.66668 8.00001 4.66668Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10240">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiGiftSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
