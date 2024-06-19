import PropTypes from "prop-types";
import React from "react";

export const TypeFiCornerLeftUpSize24ColorBlack = ({ color = "black", className }) => {
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
        d="M9.33332 5.99999L5.99999 2.66666L2.66666 5.99999"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M13.3333 13.3333H8.66667C7.95942 13.3333 7.28115 13.0524 6.78105 12.5523C6.28095 12.0522 6 11.3739 6 10.6667V2.66666"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiCornerLeftUpSize24ColorBlack.propTypes = {
  color: PropTypes.string,
};
