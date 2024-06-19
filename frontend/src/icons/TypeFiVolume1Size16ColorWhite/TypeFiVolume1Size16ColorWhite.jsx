import PropTypes from "prop-types";
import React from "react";

export const TypeFiVolume1Size16ColorWhite = ({ color = "white", className }) => {
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
        d="M20.72 11.28C21.9698 12.5302 22.6719 14.2256 22.6719 15.9933C22.6719 17.7611 21.9698 19.4565 20.72 20.7067"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M14.6667 6.66666L7.99999 12H2.66666V20H7.99999L14.6667 25.3333V6.66666Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiVolume1Size16ColorWhite.propTypes = {
  color: PropTypes.string,
};
