import PropTypes from "prop-types";
import React from "react";

export const TypeFiPrinterSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M7.99999 24H5.33332C4.62608 24 3.9478 23.719 3.4477 23.219C2.94761 22.7189 2.66666 22.0406 2.66666 21.3333V14.6667C2.66666 13.9594 2.94761 13.2811 3.4477 12.781C3.9478 12.281 4.62608 12 5.33332 12H26.6667C27.3739 12 28.0522 12.281 28.5523 12.781C29.0524 13.2811 29.3333 13.9594 29.3333 14.6667V21.3333C29.3333 22.0406 29.0524 22.7189 28.5523 23.219C28.0522 23.719 27.3739 24 26.6667 24H24"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M24 18.6667H8V29.3333H24V18.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M8 12V2.66666H24V12" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiPrinterSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
