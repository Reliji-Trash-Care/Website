import PropTypes from "prop-types";
import React from "react";

export const TypeFiCloudSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_4098)">
        <path
          d="M18 10H16.74C16.3659 8.551 15.5928 7.23599 14.5086 6.2044C13.4245 5.1728 12.0727 4.46599 10.6069 4.16428C9.14112 3.86256 7.62008 3.97804 6.21664 4.49759C4.8132 5.01714 3.58363 5.91993 2.66764 7.10338C1.75165 8.28683 1.18598 9.70348 1.0349 11.1924C0.883813 12.6812 1.15338 14.1826 1.81296 15.526C2.47255 16.8693 3.4957 18.0007 4.76617 18.7916C6.03663 19.5824 7.50347 20.0011 8.99999 20H18C19.3261 20 20.5978 19.4732 21.5355 18.5355C22.4732 17.5979 23 16.3261 23 15C23 13.6739 22.4732 12.4021 21.5355 11.4645C20.5978 10.5268 19.3261 10 18 10Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_4098">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiCloudSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
