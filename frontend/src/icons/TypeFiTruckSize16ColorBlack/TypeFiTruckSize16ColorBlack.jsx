import PropTypes from "prop-types";
import React from "react";

export const TypeFiTruckSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10787)">
        <path
          d="M12.3333 14C13.2538 14 14 13.2538 14 12.3333C14 11.4128 13.2538 10.6667 12.3333 10.6667C11.4128 10.6667 10.6667 11.4128 10.6667 12.3333C10.6667 13.2538 11.4128 14 12.3333 14Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M3.66667 14C4.58714 14 5.33333 13.2538 5.33333 12.3333C5.33333 11.4128 4.58714 10.6667 3.66667 10.6667C2.74619 10.6667 2 11.4128 2 12.3333C2 13.2538 2.74619 14 3.66667 14Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M10.6667 5.33334H13.3333L15.3333 7.33334V10.6667H10.6667V5.33334Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M10.6667 2H0.666656V10.6667H10.6667V2Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10787">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiTruckSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
