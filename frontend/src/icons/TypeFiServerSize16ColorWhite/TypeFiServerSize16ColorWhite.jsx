import PropTypes from "prop-types";
import React from "react";

export const TypeFiServerSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_9900)">
        <path
          d="M13.3333 9.33334H2.66668C1.9303 9.33334 1.33334 9.9303 1.33334 10.6667V13.3333C1.33334 14.0697 1.9303 14.6667 2.66668 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V10.6667C14.6667 9.9303 14.0697 9.33334 13.3333 9.33334Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M4 12H4.00667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path
          d="M13.3333 1.33334H2.66668C1.9303 1.33334 1.33334 1.9303 1.33334 2.66668V5.33334C1.33334 6.06972 1.9303 6.66668 2.66668 6.66668H13.3333C14.0697 6.66668 14.6667 6.06972 14.6667 5.33334V2.66668C14.6667 1.9303 14.0697 1.33334 13.3333 1.33334Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M4 4H4.00667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
      <defs>
        <clipPath id="clip0_143_9900">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiServerSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
