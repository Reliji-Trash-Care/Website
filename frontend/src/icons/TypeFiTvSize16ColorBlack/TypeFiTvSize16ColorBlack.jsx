import PropTypes from "prop-types";
import React from "react";

export const TypeFiTvSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10784)">
        <path
          d="M13.3333 4.66666H2.66668C1.9303 4.66666 1.33334 5.26361 1.33334 5.99999V13.3333C1.33334 14.0697 1.9303 14.6667 2.66668 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V5.99999C14.6667 5.26361 14.0697 4.66666 13.3333 4.66666Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M11.3333 1.33334L7.99999 4.66668L4.66666 1.33334"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10784">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiTvSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
