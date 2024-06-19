import PropTypes from "prop-types";
import React from "react";

export const TypeFiShareSize24ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.66666 8V13.3333C2.66666 13.687 2.80713 14.0261 3.05718 14.2761C3.30723 14.5262 3.64637 14.6667 3.99999 14.6667H12C12.3536 14.6667 12.6927 14.5262 12.9428 14.2761C13.1928 14.0261 13.3333 13.687 13.3333 13.3333V8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M10.6667 4.00001L8.00001 1.33334L5.33334 4.00001"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M8 1.33334V10" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiShareSize24ColorBlack.propTypes = {
  color: PropTypes.string,
};
