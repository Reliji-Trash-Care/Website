import PropTypes from "prop-types";
import React from "react";

export const TypeFiUserPlusSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_9693)">
        <path
          d="M10.6667 14V12.6667C10.6667 11.9594 10.3857 11.2811 9.88561 10.781C9.38551 10.281 8.70723 10 7.99999 10H3.33332C2.62608 10 1.9478 10.281 1.44771 10.781C0.947608 11.2811 0.666656 11.9594 0.666656 12.6667V14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M13.3333 5.33334V9.33334"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M15.3333 7.33334H11.3333"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M5.66667 7.33333C7.13943 7.33333 8.33333 6.13943 8.33333 4.66667C8.33333 3.19391 7.13943 2 5.66667 2C4.19391 2 3 3.19391 3 4.66667C3 6.13943 4.19391 7.33333 5.66667 7.33333Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_9693">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiUserPlusSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
