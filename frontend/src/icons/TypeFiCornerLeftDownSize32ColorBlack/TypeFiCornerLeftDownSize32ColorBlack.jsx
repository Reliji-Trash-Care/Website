import PropTypes from "prop-types";
import React from "react";

export const TypeFiCornerLeftDownSize32ColorBlack = ({ color = "black", className }) => {
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
        d="M18.6667 20L12 26.6667L5.33334 20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M26.6667 5.33334H17.3333C15.9188 5.33334 14.5623 5.89525 13.5621 6.89544C12.5619 7.89563 12 9.25219 12 10.6667V26.6667"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiCornerLeftDownSize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
