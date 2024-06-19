import PropTypes from "prop-types";
import React from "react";

export const TypeFiCreditCardSize64ColorBlack = ({ color = "black", className }) => {
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
        d="M56 10.6667H8.00002C5.0545 10.6667 2.66669 13.0546 2.66669 16.0001V48.0001C2.66669 50.9456 5.0545 53.3334 8.00002 53.3334H56C58.9455 53.3334 61.3334 50.9456 61.3334 48.0001V16.0001C61.3334 13.0546 58.9455 10.6667 56 10.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M2.66669 26.6667H61.3334" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiCreditCardSize64ColorBlack.propTypes = {
  color: PropTypes.string,
};
