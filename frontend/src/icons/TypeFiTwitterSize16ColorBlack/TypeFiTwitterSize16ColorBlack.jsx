import PropTypes from "prop-types";
import React from "react";

export const TypeFiTwitterSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10780)">
        <path
          d="M15.3333 1.99999C14.6949 2.45031 13.9881 2.79473 13.24 3.01999C12.8385 2.55833 12.3049 2.23112 11.7113 2.08261C11.1178 1.9341 10.493 1.97145 9.92138 2.18963C9.34977 2.4078 8.85895 2.79626 8.51531 3.30247C8.17167 3.80868 7.99179 4.40821 7.99999 5.01999V5.68666C6.82841 5.71704 5.66751 5.4572 4.62066 4.93029C3.57382 4.40338 2.67353 3.62575 1.99999 2.66666C1.99999 2.66666 -0.666677 8.66666 5.33332 11.3333C3.96034 12.2653 2.32476 12.7326 0.666656 12.6667C6.66666 16 14 12.6667 14 4.99999C13.9994 4.81429 13.9815 4.62905 13.9467 4.44666C14.6271 3.77565 15.1072 2.92847 15.3333 1.99999V1.99999Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10780">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiTwitterSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
