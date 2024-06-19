import PropTypes from "prop-types";
import React from "react";

export const TypeFiRotateCcwSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_9928)">
        <path
          d="M0.666656 2.66666V6.66666H4.66666"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M2.33999 10C2.77225 11.2269 3.59155 12.2801 4.67443 13.0009C5.75731 13.7217 7.04511 14.0711 8.3438 13.9963C9.64249 13.9216 10.8817 13.4268 11.8747 12.5865C12.8678 11.7462 13.5608 10.606 13.8495 9.33758C14.1381 8.06917 14.0067 6.74131 13.4751 5.55407C12.9434 4.36684 12.0403 3.38454 10.9019 2.75518C9.76342 2.12583 8.45126 1.88352 7.16311 2.06475C5.87496 2.24599 4.6806 2.84095 3.75999 3.76001L0.666656 6.66667"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_9928">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiRotateCcwSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
