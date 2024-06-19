import PropTypes from "prop-types";
import React from "react";

export const TypeFiFramerSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10251)">
        <path
          d="M3.33334 10.6667H8.00001M3.33334 10.6667V6.00001H12.6667V1.33334H3.33334L12.6667 10.6667H8.00001H3.33334ZM3.33334 10.6667L8.00001 15.3333V10.6667H3.33334Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10251">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiFramerSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
