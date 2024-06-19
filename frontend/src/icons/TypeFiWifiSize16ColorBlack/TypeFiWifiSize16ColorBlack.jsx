import PropTypes from "prop-types";
import React from "react";

export const TypeFiWifiSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10702)">
        <path d="M8 13.3333H8.00667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path
          d="M5.68665 10.74C6.36345 10.2592 7.17309 10.0008 8.00331 10.0008C8.83353 10.0008 9.64318 10.2592 10.32 10.74"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M3.33334 8.36667C4.65105 7.26912 6.31175 6.66809 8.02668 6.66809C9.74161 6.66809 11.4023 7.26912 12.72 8.36667"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M0.946655 5.99998C2.89494 4.28263 5.40285 3.33508 7.99999 3.33508C10.5971 3.33508 13.105 4.28263 15.0533 5.99998"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10702">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiWifiSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
