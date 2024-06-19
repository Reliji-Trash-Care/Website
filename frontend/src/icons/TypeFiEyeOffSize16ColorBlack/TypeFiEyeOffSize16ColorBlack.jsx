import PropTypes from "prop-types";
import React from "react";

export const TypeFiEyeOffSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_6441)">
        <path
          d="M13.2 5.65335C14.1178 5.43852 15.0574 5.33113 16 5.33335C25.3333 5.33335 30.6667 16 30.6667 16C29.8573 17.5142 28.8921 18.9397 27.7867 20.2533M18.8267 18.8267C18.4605 19.2197 18.0189 19.5349 17.5282 19.7535C17.0375 19.9721 16.5079 20.0897 15.9708 20.0992C15.4337 20.1086 14.9002 20.0098 14.4022 19.8087C13.9041 19.6075 13.4516 19.3081 13.0718 18.9282C12.692 18.5484 12.3925 18.0959 12.1914 17.5979C11.9902 17.0998 11.8914 16.5663 11.9009 16.0292C11.9103 15.4921 12.0279 14.9625 12.2465 14.4718C12.4651 13.9811 12.7803 13.5395 13.1733 13.1733M23.92 23.92C21.6408 25.6574 18.8655 26.6198 16 26.6667C6.66668 26.6667 1.33334 16 1.33334 16C2.99186 12.9092 5.29219 10.2088 8.08001 8.08001L23.92 23.92Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M1.33334 1.33334L30.6667 30.6667"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_6441">
          <rect fill="white" height="32" width="32" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiEyeOffSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
