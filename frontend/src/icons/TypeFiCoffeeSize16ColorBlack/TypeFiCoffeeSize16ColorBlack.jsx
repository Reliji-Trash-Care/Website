import PropTypes from "prop-types";
import React from "react";

export const TypeFiCoffeeSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_11407)">
        <path
          d="M12 5.33334H12.6667C13.3739 5.33334 14.0522 5.61429 14.5523 6.11439C15.0524 6.61449 15.3333 7.29277 15.3333 8.00001C15.3333 8.70725 15.0524 9.38553 14.5523 9.88563C14.0522 10.3857 13.3739 10.6667 12.6667 10.6667H12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M1.33334 5.33334H12V11.3333C12 12.0406 11.7191 12.7189 11.219 13.219C10.7189 13.7191 10.0406 14 9.33334 14H4.00001C3.29277 14 2.61449 13.7191 2.11439 13.219C1.6143 12.7189 1.33334 12.0406 1.33334 11.3333V5.33334Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M9.33334 0.666656V2.66666"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M6.66666 0.666656V2.66666"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M4 0.666656V2.66666" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
      <defs>
        <clipPath id="clip0_143_11407">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiCoffeeSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
