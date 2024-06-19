import PropTypes from "prop-types";
import React from "react";

export const TypeFiGlobeSize32ColorWhite = ({ color = "white", className }) => {
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
        d="M16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.63619 23.3638 2.66666 16 2.66666C8.63619 2.66666 2.66666 8.63619 2.66666 16C2.66666 23.3638 8.63619 29.3333 16 29.3333Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M2.66666 16H29.3333" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M16 2.66666C19.335 6.31779 21.2303 11.056 21.3333 16C21.2303 20.9439 19.335 25.6822 16 29.3333C12.6649 25.6822 10.7697 20.9439 10.6667 16C10.7697 11.056 12.6649 6.31779 16 2.66666V2.66666Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiGlobeSize32ColorWhite.propTypes = {
  color: PropTypes.string,
};
