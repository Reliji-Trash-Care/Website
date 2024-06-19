import PropTypes from "prop-types";
import React from "react";

export const TypeFiActivitySize32ColorBlack = ({ color = "black", className }) => {
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
        d="M29.3333 16H24L20 28L12 4L7.99999 16H2.66666"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiActivitySize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
