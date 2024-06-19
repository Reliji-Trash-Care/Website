import PropTypes from "prop-types";
import React from "react";

export const TypeFiBookSize16ColorWhite = ({ color = "white", className }) => {
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
        d="M10.6666 51.9999C10.6666 50.2318 11.369 48.5361 12.6192 47.2859C13.8695 46.0356 15.5652 45.3333 17.3333 45.3333H53.3333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M17.3333 5.33325H53.3333V58.6666H17.3333C15.5652 58.6666 13.8695 57.9642 12.6192 56.714C11.369 55.4637 10.6666 53.768 10.6666 51.9999V11.9999C10.6666 10.2318 11.369 8.53612 12.6192 7.28587C13.8695 6.03563 15.5652 5.33325 17.3333 5.33325V5.33325Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiBookSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
