import PropTypes from "prop-types";
import React from "react";

export const TypeFiCopySize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_9548)">
        <path
          d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M3.33334 10H2.66668C2.31305 10 1.97392 9.85953 1.72387 9.60949C1.47382 9.35944 1.33334 9.0203 1.33334 8.66668V2.66668C1.33334 2.31305 1.47382 1.97392 1.72387 1.72387C1.97392 1.47382 2.31305 1.33334 2.66668 1.33334H8.66668C9.0203 1.33334 9.35944 1.47382 9.60949 1.72387C9.85953 1.97392 10 2.31305 10 2.66668V3.33334"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_9548">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiCopySize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
