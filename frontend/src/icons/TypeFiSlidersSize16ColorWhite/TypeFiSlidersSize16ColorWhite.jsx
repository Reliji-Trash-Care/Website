import PropTypes from "prop-types";
import React from "react";

export const TypeFiSlidersSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_9836)">
        <path d="M13.3333 14V10.6667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path
          d="M11.3333 10.6667H15.3333"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M2.66666 14V9.33334" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path
          d="M0.666656 9.33334H4.66666"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M8 14V8" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M6 5.33334H10" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M13.3333 8V2" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M8 5.33333V2" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M2.66666 6.66667V2" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
      <defs>
        <clipPath id="clip0_143_9836">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiSlidersSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
