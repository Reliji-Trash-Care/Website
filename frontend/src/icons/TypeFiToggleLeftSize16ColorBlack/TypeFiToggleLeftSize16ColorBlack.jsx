import PropTypes from "prop-types";
import React from "react";

export const TypeFiToggleLeftSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10814)">
        <path
          d="M10.6667 3.33334H5.33332C2.75599 3.33334 0.666656 5.42268 0.666656 8.00001C0.666656 10.5773 2.75599 12.6667 5.33332 12.6667H10.6667C13.244 12.6667 15.3333 10.5773 15.3333 8.00001C15.3333 5.42268 13.244 3.33334 10.6667 3.33334Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M10.6667 10C11.7712 10 12.6667 9.10457 12.6667 8C12.6667 6.89543 11.7712 6 10.6667 6C9.56209 6 8.66666 6.89543 8.66666 8C8.66666 9.10457 9.56209 10 10.6667 10Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10814">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiToggleLeftSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
