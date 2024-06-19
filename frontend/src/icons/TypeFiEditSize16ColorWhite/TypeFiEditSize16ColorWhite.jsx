import PropTypes from "prop-types";
import React from "react";

export const TypeFiEditSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10295)">
        <path
          d="M7.33334 2.66666H2.66668C2.31305 2.66666 1.97392 2.80713 1.72387 3.05718C1.47382 3.30723 1.33334 3.64637 1.33334 3.99999V13.3333C1.33334 13.6869 1.47382 14.0261 1.72387 14.2761C1.97392 14.5262 2.31305 14.6667 2.66668 14.6667H12C12.3536 14.6667 12.6928 14.5262 12.9428 14.2761C13.1929 14.0261 13.3333 13.6869 13.3333 13.3333V8.66666"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M12.3333 1.66665C12.5986 1.40144 12.9583 1.25244 13.3333 1.25244C13.7084 1.25244 14.0681 1.40144 14.3333 1.66665C14.5986 1.93187 14.7476 2.29158 14.7476 2.66665C14.7476 3.04173 14.5986 3.40144 14.3333 3.66665L8.00001 9.99999L5.33334 10.6667L6.00001 7.99999L12.3333 1.66665Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10295">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiEditSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
