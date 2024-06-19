import PropTypes from "prop-types";
import React from "react";

export const TypeFiChevronsRightSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M34.6667 45.3334L48 32.0001L34.6667 18.6667"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M16 45.3334L29.3333 32.0001L16 18.6667"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiChevronsRightSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
