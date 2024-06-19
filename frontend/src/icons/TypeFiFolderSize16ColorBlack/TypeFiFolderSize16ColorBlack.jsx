import PropTypes from "prop-types";
import React from "react";

export const TypeFiFolderSize16ColorBlack = ({ color = "black", className }) => {
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
        d="M29.3333 25.3333C29.3333 26.0406 29.0524 26.7189 28.5523 27.219C28.0522 27.719 27.3739 28 26.6667 28H5.33332C4.62608 28 3.9478 27.719 3.4477 27.219C2.94761 26.7189 2.66666 26.0406 2.66666 25.3333V6.66667C2.66666 5.95942 2.94761 5.28115 3.4477 4.78105C3.9478 4.28095 4.62608 4 5.33332 4H12L14.6667 8H26.6667C27.3739 8 28.0522 8.28095 28.5523 8.78105C29.0524 9.28115 29.3333 9.95942 29.3333 10.6667V25.3333Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiFolderSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
