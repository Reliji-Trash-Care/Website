import PropTypes from "prop-types";
import React from "react";

export const TypeFiGithubSize24ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10224)">
        <path
          d="M6.00001 12.6667C2.66668 13.6667 2.66668 11 1.33334 10.6667M10.6667 14.6667V12.0867C10.6917 11.7688 10.6487 11.4492 10.5407 11.1492C10.4326 10.8492 10.262 10.5756 10.04 10.3467C12.1333 10.1133 14.3333 9.32 14.3333 5.68C14.3332 4.74922 13.9751 3.85413 13.3333 3.18C13.6372 2.36567 13.6158 1.46557 13.2733 0.666666C13.2733 0.666666 12.4867 0.433332 10.6667 1.65333C9.13868 1.23921 7.528 1.23921 6.00001 1.65333C4.18001 0.433332 3.39334 0.666666 3.39334 0.666666C3.05093 1.46557 3.02944 2.36567 3.33334 3.18C2.68676 3.85913 2.32836 4.76231 2.33334 5.7C2.33334 9.31333 4.53334 10.1067 6.62668 10.3667C6.40734 10.5933 6.23819 10.8636 6.13022 11.1599C6.02225 11.4563 5.97788 11.772 6.00001 12.0867V14.6667"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10224">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiGithubSize24ColorBlack.propTypes = {
  color: PropTypes.string,
};
