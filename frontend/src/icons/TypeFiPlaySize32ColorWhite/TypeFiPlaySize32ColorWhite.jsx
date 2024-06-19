import PropTypes from "prop-types";
import React from "react";

export const TypeFiPlaySize32ColorWhite = ({ color = "white", className }) => {
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
        d="M6.66666 4L25.3333 16L6.66666 28V4Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiPlaySize32ColorWhite.propTypes = {
  color: PropTypes.string,
};
