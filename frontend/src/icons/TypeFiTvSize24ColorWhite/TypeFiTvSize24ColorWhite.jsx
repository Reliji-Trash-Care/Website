import PropTypes from "prop-types";
import React from "react";

export const TypeFiTvSize24ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M53.3333 18.6667H10.6666C7.72113 18.6667 5.33331 21.0546 5.33331 24.0001V53.3334C5.33331 56.2789 7.72113 58.6667 10.6666 58.6667H53.3333C56.2788 58.6667 58.6666 56.2789 58.6666 53.3334V24.0001C58.6666 21.0546 56.2788 18.6667 53.3333 18.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M45.3334 5.33325L32 18.6666L18.6667 5.33325"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiTvSize24ColorWhite.propTypes = {
  color: PropTypes.string,
};
