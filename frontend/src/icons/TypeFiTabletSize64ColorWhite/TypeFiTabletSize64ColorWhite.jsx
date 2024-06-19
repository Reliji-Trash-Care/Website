import PropTypes from "prop-types";
import React from "react";

export const TypeFiTabletSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M22.6667 2.66666H9.33332C7.86056 2.66666 6.66666 3.86056 6.66666 5.33332V26.6667C6.66666 28.1394 7.86056 29.3333 9.33332 29.3333H22.6667C24.1394 29.3333 25.3333 28.1394 25.3333 26.6667V5.33332C25.3333 3.86056 24.1394 2.66666 22.6667 2.66666Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M16 24H16.0133" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiTabletSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
