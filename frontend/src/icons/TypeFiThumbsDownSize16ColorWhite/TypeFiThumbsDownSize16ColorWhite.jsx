import PropTypes from "prop-types";
import React from "react";

export const TypeFiThumbsDownSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_9772)">
        <path
          d="M11.3333 1.33334H13.1133C13.4906 1.32667 13.8573 1.45876 14.1436 1.70455C14.4299 1.95034 14.6161 2.29271 14.6667 2.66667V7.33334C14.6161 7.7073 14.4299 8.04967 14.1436 8.29546C13.8573 8.54125 13.4906 8.67335 13.1133 8.66667H11.3333M6.66666 10V12.6667C6.66666 13.1971 6.87737 13.7058 7.25244 14.0809C7.62752 14.456 8.13622 14.6667 8.66666 14.6667L11.3333 8.66667V1.33334H3.81332C3.49177 1.32971 3.17974 1.4424 2.93472 1.65067C2.6897 1.85894 2.52821 2.14874 2.47999 2.46667L1.55999 8.46667C1.53098 8.65777 1.54387 8.85289 1.59776 9.03851C1.65165 9.22413 1.74525 9.39581 1.87208 9.54166C1.99891 9.68752 2.15594 9.80405 2.33228 9.88319C2.50861 9.96234 2.70005 10.0022 2.89332 10H6.66666Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_9772">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiThumbsDownSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
