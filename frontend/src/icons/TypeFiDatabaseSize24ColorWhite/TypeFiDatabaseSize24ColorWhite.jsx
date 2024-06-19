import PropTypes from "prop-types";
import React from "react";

export const TypeFiDatabaseSize24ColorWhite = ({ color = "white", className }) => {
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
        d="M56 32C56 36.4267 45.3333 40 32 40C18.6667 40 8 36.4267 8 32"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M32 21.3333C45.2548 21.3333 56 17.7515 56 13.3333C56 8.91497 45.2548 5.33325 32 5.33325C18.7452 5.33325 8 8.91497 8 13.3333C8 17.7515 18.7452 21.3333 32 21.3333Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M8 13.3333V50.6666C8 55.0933 18.6667 58.6666 32 58.6666C45.3333 58.6666 56 55.0933 56 50.6666V13.3333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiDatabaseSize24ColorWhite.propTypes = {
  color: PropTypes.string,
};
