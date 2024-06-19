import PropTypes from "prop-types";
import React from "react";

export const TypeFiTerminalSize64ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 12.6667H13.3333" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M2.66666 11.3333L6.66666 7.33334L2.66666 3.33334"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiTerminalSize64ColorBlack.propTypes = {
  color: PropTypes.string,
};
