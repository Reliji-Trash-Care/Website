import PropTypes from "prop-types";
import React from "react";

export const TypeFiDeleteSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10312)">
        <path
          d="M14 2.66666H5.33332L0.666656 7.99999L5.33332 13.3333H14C14.3536 13.3333 14.6927 13.1928 14.9428 12.9428C15.1928 12.6927 15.3333 12.3536 15.3333 12V3.99999C15.3333 3.64637 15.1928 3.30723 14.9428 3.05718C14.6927 2.80713 14.3536 2.66666 14 2.66666V2.66666Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M12 6L8 10" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M8 6L12 10" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
      <defs>
        <clipPath id="clip0_143_10312">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiDeleteSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
