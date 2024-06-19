import PropTypes from "prop-types";
import React from "react";

export const TypeFiZapOffSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M49.52 34.4268L56 26.6667H41.76"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M21.3333 21.3333L8 37.3333H32L29.3333 58.6666L42.6667 42.6666"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M33.0933 17.9999L34.6666 5.33325L28.1866 13.1199"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M2.66669 2.66675L61.3334 61.3334"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiZapOffSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
