import PropTypes from "prop-types";
import React from "react";

export const TypeFiSunsetSize64ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M30.6667 29.3333H1.33334" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M28 24H30.6667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M1.33334 24H4.00001" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M22.6667 24C22.6667 22.2319 21.9643 20.5362 20.7141 19.286C19.4638 18.0357 17.7681 17.3333 16 17.3333C14.2319 17.3333 12.5362 18.0357 11.286 19.286C10.0357 20.5362 9.33334 22.2319 9.33334 24"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M24.48 15.52L26.3733 13.6266"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M5.62665 13.6266L7.51998 15.52"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M16 12V2.66666" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M21.3333 6.66666L16 12L10.6667 6.66666"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiSunsetSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
