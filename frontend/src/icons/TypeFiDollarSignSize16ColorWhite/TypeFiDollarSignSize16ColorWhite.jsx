import PropTypes from "prop-types";
import React from "react";

export const TypeFiDollarSignSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10306)">
        <path d="M8 0.666656V15.3333" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path
          d="M11.3333 3.33334H6.33333C5.71449 3.33334 5.121 3.57918 4.68342 4.01676C4.24583 4.45435 4 5.04784 4 5.66668C4 6.28552 4.24583 6.87901 4.68342 7.31659C5.121 7.75418 5.71449 8.00001 6.33333 8.00001H9.66667C10.2855 8.00001 10.879 8.24584 11.3166 8.68343C11.7542 9.12101 12 9.71451 12 10.3333C12 10.9522 11.7542 11.5457 11.3166 11.9833C10.879 12.4208 10.2855 12.6667 9.66667 12.6667H4"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10306">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiDollarSignSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
