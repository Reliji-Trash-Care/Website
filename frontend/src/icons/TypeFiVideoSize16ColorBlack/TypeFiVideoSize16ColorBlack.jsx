import PropTypes from "prop-types";
import React from "react";

export const TypeFiVideoSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10730)">
        <path
          d="M15.3333 4.66666L10.6667 7.99999L15.3333 11.3333V4.66666Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M9.33332 3.33334H1.99999C1.26361 3.33334 0.666656 3.9303 0.666656 4.66668V11.3333C0.666656 12.0697 1.26361 12.6667 1.99999 12.6667H9.33332C10.0697 12.6667 10.6667 12.0697 10.6667 11.3333V4.66668C10.6667 3.9303 10.0697 3.33334 9.33332 3.33334Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10730">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiVideoSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
