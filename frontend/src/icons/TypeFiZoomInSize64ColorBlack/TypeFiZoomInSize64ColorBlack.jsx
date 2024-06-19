import PropTypes from "prop-types";
import React from "react";

export const TypeFiZoomInSize64ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.3333 50.6667C41.1154 50.6667 50.6667 41.1154 50.6667 29.3333C50.6667 17.5513 41.1154 8 29.3333 8C17.5513 8 8 17.5513 8 29.3333C8 41.1154 17.5513 50.6667 29.3333 50.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M56 56.0001L44.4 44.4001" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M29.3333 21.3333V37.3333" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M21.3333 29.3333H37.3333" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiZoomInSize64ColorBlack.propTypes = {
  color: PropTypes.string,
};
