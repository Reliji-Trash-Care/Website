import PropTypes from "prop-types";
import React from "react";

export const TypeFiTwitchSize24ColorBlack = ({ color = "black", className }) => {
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
        d="M21.3333 14.6667V9.33332M28 2.66666H4V24H10.6667V29.3333L16 24H22.6667L28 18.6667V2.66666ZM14.6667 14.6667V9.33332V14.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiTwitchSize24ColorBlack.propTypes = {
  color: PropTypes.string,
};
