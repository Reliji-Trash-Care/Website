import PropTypes from "prop-types";
import React from "react";

export const TypeFiCopySize32ColorBlack = ({ color = "black", className }) => {
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
        d="M26.6667 12H14.6667C13.1939 12 12 13.1939 12 14.6667V26.6667C12 28.1394 13.1939 29.3333 14.6667 29.3333H26.6667C28.1394 29.3333 29.3333 28.1394 29.3333 26.6667V14.6667C29.3333 13.1939 28.1394 12 26.6667 12Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M6.66666 20H5.33332C4.62608 20 3.9478 19.719 3.4477 19.2189C2.94761 18.7188 2.66666 18.0406 2.66666 17.3333V5.33332C2.66666 4.62608 2.94761 3.9478 3.4477 3.4477C3.9478 2.94761 4.62608 2.66666 5.33332 2.66666H17.3333C18.0406 2.66666 18.7188 2.94761 19.2189 3.4477C19.719 3.9478 20 4.62608 20 5.33332V6.66666"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiCopySize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
