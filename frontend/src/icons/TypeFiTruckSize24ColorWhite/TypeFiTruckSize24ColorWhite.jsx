import PropTypes from "prop-types";
import React from "react";

export const TypeFiTruckSize24ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.6667 28C26.5076 28 28 26.5076 28 24.6667C28 22.8257 26.5076 21.3333 24.6667 21.3333C22.8257 21.3333 21.3333 22.8257 21.3333 24.6667C21.3333 26.5076 22.8257 28 24.6667 28Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M7.33333 28C9.17428 28 10.6667 26.5076 10.6667 24.6667C10.6667 22.8257 9.17428 21.3333 7.33333 21.3333C5.49238 21.3333 4 22.8257 4 24.6667C4 26.5076 5.49238 28 7.33333 28Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M21.3333 10.6667H26.6667L30.6667 14.6667V21.3333H21.3333V10.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M21.3333 4H1.33334V21.3333H21.3333V4Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiTruckSize24ColorWhite.propTypes = {
  color: PropTypes.string,
};
