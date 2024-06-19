import PropTypes from "prop-types";
import React from "react";

export const TypeFiSlackSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_9849)">
        <path
          d="M10.3333 12.6667H9.33334V13.6667C9.33334 14.22 9.78001 14.6667 10.3333 14.6667C10.8867 14.6667 11.3333 14.22 11.3333 13.6667C11.3333 13.1133 10.8867 12.6667 10.3333 12.6667Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M6.33334 9.33334C6.88668 9.33334 7.33334 9.78001 7.33334 10.3333V13.6667C7.33334 14.22 6.88668 14.6667 6.33334 14.6667C5.78001 14.6667 5.33334 14.22 5.33334 13.6667V10.3333C5.33334 9.78001 5.78001 9.33334 6.33334 9.33334Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M2.33334 9.33334H3.33334V10.3333C3.33334 10.8867 2.88668 11.3333 2.33334 11.3333C1.78001 11.3333 1.33334 10.8867 1.33334 10.3333C1.33334 9.78001 1.78001 9.33334 2.33334 9.33334Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M9.33334 9.66666C9.33334 9.11332 9.78001 8.66666 10.3333 8.66666H13.6667C14.22 8.66666 14.6667 9.11332 14.6667 9.66666C14.6667 10.22 14.22 10.6667 13.6667 10.6667H10.3333C9.78001 10.6667 9.33334 10.22 9.33334 9.66666Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M6.66668 6.33334C6.66668 5.78001 6.22001 5.33334 5.66668 5.33334H2.33334C1.78001 5.33334 1.33334 5.78001 1.33334 6.33334C1.33334 6.88668 1.78001 7.33334 2.33334 7.33334H5.66668C6.22001 7.33334 6.66668 6.88668 6.66668 6.33334Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M13.6667 6.66666H12.6667V5.66666C12.6667 5.11332 13.1133 4.66666 13.6667 4.66666C14.22 4.66666 14.6667 5.11332 14.6667 5.66666C14.6667 6.21999 14.22 6.66666 13.6667 6.66666Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M9.66666 6.66668C9.11332 6.66668 8.66666 6.22001 8.66666 5.66668V2.33334C8.66666 1.78001 9.11332 1.33334 9.66666 1.33334C10.22 1.33334 10.6667 1.78001 10.6667 2.33334V5.66668C10.6667 6.22001 10.22 6.66668 9.66666 6.66668Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M5.66666 3.33334H6.66666V2.33334C6.66666 1.78001 6.21999 1.33334 5.66666 1.33334C5.11332 1.33334 4.66666 1.78001 4.66666 2.33334C4.66666 2.88668 5.11332 3.33334 5.66666 3.33334Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_9849">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiSlackSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
