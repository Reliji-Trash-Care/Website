import PropTypes from "prop-types";
import React from "react";

export const TypeFiRewindSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M58.6667 50.6667L34.6667 32L58.6667 13.3334V50.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M29.3333 50.6667L5.33331 32L29.3333 13.3334V50.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiRewindSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
