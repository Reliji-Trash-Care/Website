import PropTypes from "prop-types";
import React from "react";

export const TypeFiLogOutSize64ColorBlack = ({ color = "black", className }) => {
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
        d="M42.6667 45.3334L56 32.0001L42.6667 18.6667"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M56 32H24" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M24 56H13.3333C11.9188 56 10.5623 55.4381 9.5621 54.4379C8.5619 53.4377 8 52.0812 8 50.6667V13.3333C8 11.9188 8.5619 10.5623 9.5621 9.5621C10.5623 8.5619 11.9188 8 13.3333 8H24"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiLogOutSize64ColorBlack.propTypes = {
  color: PropTypes.string,
};
