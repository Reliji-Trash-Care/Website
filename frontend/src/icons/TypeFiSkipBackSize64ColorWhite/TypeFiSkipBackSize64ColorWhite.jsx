import PropTypes from "prop-types";
import React from "react";

export const TypeFiSkipBackSize64ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.3333 50.6667V13.3334" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M50.6667 53.3333L24 32L50.6667 10.6666V53.3333Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiSkipBackSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
