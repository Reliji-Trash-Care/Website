import PropTypes from "prop-types";
import React from "react";

export const TypeFiVideoOffSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_5477)">
        <path
          d="M14.2133 6.66666H18.6667C19.3739 6.66666 20.0522 6.94761 20.5523 7.4477C21.0524 7.9478 21.3333 8.62608 21.3333 9.33332V13.7867L22.6667 15.12L30.6667 9.33332V22.6667M21.3333 21.3333V22.6667C21.3333 23.3739 21.0524 24.0522 20.5523 24.5523C20.0522 25.0524 19.3739 25.3333 18.6667 25.3333H4.00001C3.29277 25.3333 2.61449 25.0524 2.11439 24.5523C1.6143 24.0522 1.33334 23.3739 1.33334 22.6667V9.33332C1.33334 8.62608 1.6143 7.9478 2.11439 7.4477C2.61449 6.94761 3.29277 6.66666 4.00001 6.66666H6.66668L21.3333 21.3333Z"
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
        <clipPath id="clip0_143_5477">
          <rect fill="white" height="32" width="32" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiVideoOffSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
