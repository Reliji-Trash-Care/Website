import PropTypes from "prop-types";
import React from "react";

export const TypeFiTruckSize64ColorBlack = ({ color = "black", className }) => {
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
        d="M49.3334 56.0001C53.0153 56.0001 56 53.0153 56 49.3334C56 45.6515 53.0153 42.6667 49.3334 42.6667C45.6515 42.6667 42.6667 45.6515 42.6667 49.3334C42.6667 53.0153 45.6515 56.0001 49.3334 56.0001Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M14.6667 56.0001C18.3486 56.0001 21.3333 53.0153 21.3333 49.3334C21.3333 45.6515 18.3486 42.6667 14.6667 42.6667C10.9848 42.6667 8 45.6515 8 49.3334C8 53.0153 10.9848 56.0001 14.6667 56.0001Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M42.6667 21.3333H53.3334L61.3334 29.3333V42.6666H42.6667V21.3333Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M42.6667 8H2.66669V42.6667H42.6667V8Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiTruckSize64ColorBlack.propTypes = {
  color: PropTypes.string,
};
