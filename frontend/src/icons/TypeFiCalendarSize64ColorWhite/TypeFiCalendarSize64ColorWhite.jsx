import PropTypes from "prop-types";
import React from "react";

export const TypeFiCalendarSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M25.3333 5.33334H6.66667C5.19391 5.33334 4 6.52725 4 8.00001V26.6667C4 28.1394 5.19391 29.3333 6.66667 29.3333H25.3333C26.8061 29.3333 28 28.1394 28 26.6667V8.00001C28 6.52725 26.8061 5.33334 25.3333 5.33334Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M4 13.3333H28" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M21.3333 2.66666V7.99999" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M10.6667 2.66666V7.99999" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiCalendarSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
