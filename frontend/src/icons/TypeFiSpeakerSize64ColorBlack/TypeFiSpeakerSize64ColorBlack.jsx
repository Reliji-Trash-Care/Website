import PropTypes from "prop-types";
import React from "react";

export const TypeFiSpeakerSize64ColorBlack = ({ color = "black", className }) => {
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
        d="M24 2.66666H8.00001C6.52725 2.66666 5.33334 3.86056 5.33334 5.33332V26.6667C5.33334 28.1394 6.52725 29.3333 8.00001 29.3333H24C25.4728 29.3333 26.6667 28.1394 26.6667 26.6667V5.33332C26.6667 3.86056 25.4728 2.66666 24 2.66666Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M16 24C18.9455 24 21.3333 21.6122 21.3333 18.6667C21.3333 15.7212 18.9455 13.3333 16 13.3333C13.0545 13.3333 10.6667 15.7212 10.6667 18.6667C10.6667 21.6122 13.0545 24 16 24Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M16 8H16.0133" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiSpeakerSize64ColorBlack.propTypes = {
  color: PropTypes.string,
};
