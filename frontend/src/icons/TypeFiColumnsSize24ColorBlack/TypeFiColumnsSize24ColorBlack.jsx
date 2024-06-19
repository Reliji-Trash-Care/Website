import PropTypes from "prop-types";
import React from "react";

export const TypeFiColumnsSize24ColorBlack = ({ color = "black", className }) => {
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
        d="M32 8V56M32 8H50.6667C52.0812 8 53.4377 8.5619 54.4379 9.5621C55.4381 10.5623 56 11.9188 56 13.3333V50.6667C56 52.0812 55.4381 53.4377 54.4379 54.4379C53.4377 55.4381 52.0812 56 50.6667 56H32V8ZM32 8H13.3333C11.9188 8 10.5623 8.5619 9.5621 9.5621C8.5619 10.5623 8 11.9188 8 13.3333V50.6667C8 52.0812 8.5619 53.4377 9.5621 54.4379C10.5623 55.4381 11.9188 56 13.3333 56H32V8Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiColumnsSize24ColorBlack.propTypes = {
  color: PropTypes.string,
};
