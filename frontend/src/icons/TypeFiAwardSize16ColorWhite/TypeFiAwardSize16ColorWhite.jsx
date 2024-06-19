import PropTypes from "prop-types";
import React from "react";

export const TypeFiAwardSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10479)">
        <path
          d="M8.00001 9.99999C10.5773 9.99999 12.6667 7.91065 12.6667 5.33332C12.6667 2.75599 10.5773 0.666656 8.00001 0.666656C5.42268 0.666656 3.33334 2.75599 3.33334 5.33332C3.33334 7.91065 5.42268 9.99999 8.00001 9.99999Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M5.47332 9.25999L4.66666 15.3333L7.99999 13.3333L11.3333 15.3333L10.5267 9.25333"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10479">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiAwardSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
