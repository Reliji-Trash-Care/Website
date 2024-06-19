import PropTypes from "prop-types";
import React from "react";

export const TypeFiVolumeXSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10711)">
        <path d="M15.3333 6L11.3333 10" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M11.3333 6L15.3333 10" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path
          d="M7.33334 3.33334L4.00001 6.00001H1.33334V10H4.00001L7.33334 12.6667V3.33334Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10711">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiVolumeXSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
