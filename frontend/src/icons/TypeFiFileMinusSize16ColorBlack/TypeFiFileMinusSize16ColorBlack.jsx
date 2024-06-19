import PropTypes from "prop-types";
import React from "react";

export const TypeFiFileMinusSize16ColorBlack = ({ color = "black", className }) => {
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
        d="M18.6667 2.66666H8.00001C7.29277 2.66666 6.61449 2.94761 6.11439 3.4477C5.61429 3.9478 5.33334 4.62608 5.33334 5.33332V26.6667C5.33334 27.3739 5.61429 28.0522 6.11439 28.5523C6.61449 29.0524 7.29277 29.3333 8.00001 29.3333H24C24.7073 29.3333 25.3855 29.0524 25.8856 28.5523C26.3857 28.0522 26.6667 27.3739 26.6667 26.6667V10.6667L18.6667 2.66666Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M18.6667 2.66666V10.6667H26.6667"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M12 20H20" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiFileMinusSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
