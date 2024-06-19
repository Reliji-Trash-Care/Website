import PropTypes from "prop-types";
import React from "react";

export const TypeFiBluetoothSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_11512)">
        <path
          d="M4.33334 4.33332L11.6667 11.6667L8.00001 15.3333V0.666656L11.6667 4.33332L4.33334 11.6667"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_11512">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiBluetoothSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
