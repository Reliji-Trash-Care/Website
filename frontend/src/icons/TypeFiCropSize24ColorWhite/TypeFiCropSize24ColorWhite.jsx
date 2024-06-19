import PropTypes from "prop-types";
import React from "react";

export const TypeFiCropSize24ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_6126)">
        <path
          d="M8.17333 1.33334L8 21.3333C8 22.0406 8.28095 22.7189 8.78105 23.219C9.28115 23.7191 9.95942 24 10.6667 24H30.6667"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M1.33334 8.17333L21.3333 8C22.0406 8 22.7189 8.28095 23.219 8.78105C23.7191 9.28115 24 9.95942 24 10.6667V30.6667"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_6126">
          <rect fill="white" height="32" width="32" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiCropSize24ColorWhite.propTypes = {
  color: PropTypes.string,
};
