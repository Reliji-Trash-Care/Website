import PropTypes from "prop-types";
import React from "react";

export const TypeFiClipboardSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M21.3333 5.33334H24C24.7073 5.33334 25.3855 5.61429 25.8856 6.11439C26.3857 6.61449 26.6667 7.29277 26.6667 8.00001V26.6667C26.6667 27.3739 26.3857 28.0522 25.8856 28.5523C25.3855 29.0524 24.7073 29.3333 24 29.3333H8.00001C7.29277 29.3333 6.61449 29.0524 6.11439 28.5523C5.61429 28.0522 5.33334 27.3739 5.33334 26.6667V8.00001C5.33334 7.29277 5.61429 6.61449 6.11439 6.11439C6.61449 5.61429 7.29277 5.33334 8.00001 5.33334H10.6667"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M20 2.66666H12C11.2636 2.66666 10.6667 3.26361 10.6667 3.99999V6.66666C10.6667 7.40304 11.2636 7.99999 12 7.99999H20C20.7364 7.99999 21.3333 7.40304 21.3333 6.66666V3.99999C21.3333 3.26361 20.7364 2.66666 20 2.66666Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiClipboardSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
