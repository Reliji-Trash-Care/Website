import PropTypes from "prop-types";
import React from "react";

export const TypeFiServerSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M26.6667 18.6667H5.33332C3.86056 18.6667 2.66666 19.8606 2.66666 21.3333V26.6667C2.66666 28.1394 3.86056 29.3333 5.33332 29.3333H26.6667C28.1394 29.3333 29.3333 28.1394 29.3333 26.6667V21.3333C29.3333 19.8606 28.1394 18.6667 26.6667 18.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M8 24H8.01333" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M26.6667 2.66666H5.33332C3.86056 2.66666 2.66666 3.86056 2.66666 5.33332V10.6667C2.66666 12.1394 3.86056 13.3333 5.33332 13.3333H26.6667C28.1394 13.3333 29.3333 12.1394 29.3333 10.6667V5.33332C29.3333 3.86056 28.1394 2.66666 26.6667 2.66666Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M8 8H8.01333" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiServerSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
