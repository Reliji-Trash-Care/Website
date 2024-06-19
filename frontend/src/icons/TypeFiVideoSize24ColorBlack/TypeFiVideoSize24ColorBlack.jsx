import PropTypes from "prop-types";
import React from "react";

export const TypeFiVideoSize24ColorBlack = ({ color = "black", className }) => {
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
        d="M30.6667 9.33334L21.3333 16L30.6667 22.6667V9.33334Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M18.6667 6.66666H4.00001C2.52725 6.66666 1.33334 7.86056 1.33334 9.33332V22.6667C1.33334 24.1394 2.52725 25.3333 4.00001 25.3333H18.6667C20.1394 25.3333 21.3333 24.1394 21.3333 22.6667V9.33332C21.3333 7.86056 20.1394 6.66666 18.6667 6.66666Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiVideoSize24ColorBlack.propTypes = {
  color: PropTypes.string,
};
