import PropTypes from "prop-types";
import React from "react";

export const TypeFiSendSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M58.6667 5.33337L29.3333 34.6667"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M58.6667 5.33337L40 58.6667L29.3333 34.6667L5.33334 24L58.6667 5.33337Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiSendSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
