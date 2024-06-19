import PropTypes from "prop-types";
import React from "react";

export const TypeFiCheckSquareSize24ColorBlack = ({ color = "black", className }) => {
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
        d="M24 29.3334L32 37.3334L58.6667 10.6667"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M56 32V50.6667C56 52.0812 55.4381 53.4377 54.4379 54.4379C53.4377 55.4381 52.0812 56 50.6667 56H13.3333C11.9188 56 10.5623 55.4381 9.5621 54.4379C8.5619 53.4377 8 52.0812 8 50.6667V13.3333C8 11.9188 8.5619 10.5623 9.5621 9.5621C10.5623 8.5619 11.9188 8 13.3333 8H42.6667"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiCheckSquareSize24ColorBlack.propTypes = {
  color: PropTypes.string,
};
