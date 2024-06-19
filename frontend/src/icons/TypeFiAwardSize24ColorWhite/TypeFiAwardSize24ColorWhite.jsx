import PropTypes from "prop-types";
import React from "react";

export const TypeFiAwardSize24ColorWhite = ({ color = "white", className }) => {
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
        d="M32 40.0001C42.3094 40.0001 50.6667 31.6427 50.6667 21.3334C50.6667 11.0241 42.3094 2.66675 32 2.66675C21.6907 2.66675 13.3334 11.0241 13.3334 21.3334C13.3334 31.6427 21.6907 40.0001 32 40.0001Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M21.8933 37.0401L18.6666 61.3335L32 53.3335L45.3333 61.3335L42.1066 37.0135"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiAwardSize24ColorWhite.propTypes = {
  color: PropTypes.string,
};
