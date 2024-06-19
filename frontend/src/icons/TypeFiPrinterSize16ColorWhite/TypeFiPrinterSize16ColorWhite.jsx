import PropTypes from "prop-types";
import React from "react";

export const TypeFiPrinterSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_9950)">
        <path
          d="M4.00001 12H2.66668C2.31305 12 1.97392 11.8595 1.72387 11.6095C1.47382 11.3594 1.33334 11.0203 1.33334 10.6667V7.33333C1.33334 6.97971 1.47382 6.64057 1.72387 6.39052C1.97392 6.14048 2.31305 6 2.66668 6H13.3333C13.687 6 14.0261 6.14048 14.2762 6.39052C14.5262 6.64057 14.6667 6.97971 14.6667 7.33333V10.6667C14.6667 11.0203 14.5262 11.3594 14.2762 11.6095C14.0261 11.8595 13.687 12 13.3333 12H12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M12 9.33334H4V14.6667H12V9.33334Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M4 6.00001V1.33334H12V6.00001"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_9950">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiPrinterSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
