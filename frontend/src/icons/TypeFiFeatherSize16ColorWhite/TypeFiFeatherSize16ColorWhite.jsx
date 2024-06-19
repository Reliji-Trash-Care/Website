import PropTypes from "prop-types";
import React from "react";

export const TypeFiFeatherSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10276)">
        <path
          d="M13.4933 8.15998C14.2439 7.40942 14.6656 6.39144 14.6656 5.32998C14.6656 4.26853 14.2439 3.25055 13.4933 2.49998C12.7428 1.74942 11.7248 1.32776 10.6633 1.32776C9.60189 1.32776 8.58391 1.74942 7.83334 2.49998L3.33334 6.99998V12.6667H9.00001L13.4933 8.15998Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M10.6667 5.33334L1.33334 14.6667"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M11.6667 10H6" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
      <defs>
        <clipPath id="clip0_143_10276">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiFeatherSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
