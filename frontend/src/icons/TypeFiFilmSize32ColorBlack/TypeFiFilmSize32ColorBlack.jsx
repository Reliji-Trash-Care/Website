import PropTypes from "prop-types";
import React from "react";

export const TypeFiFilmSize32ColorBlack = ({ color = "black", className }) => {
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
        d="M52.8533 5.33325H11.1467C7.93606 5.33325 5.33334 7.93597 5.33334 11.1466V52.8533C5.33334 56.0639 7.93606 58.6666 11.1467 58.6666H52.8533C56.064 58.6666 58.6667 56.0639 58.6667 52.8533V11.1466C58.6667 7.93597 56.064 5.33325 52.8533 5.33325Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M18.6667 5.33325V58.6666" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M45.3333 5.33325V58.6666" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M5.33334 32H58.6667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M5.33334 18.6667H18.6667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M5.33334 45.3333H18.6667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M45.3333 45.3333H58.6667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M45.3333 18.6667H58.6667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiFilmSize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
