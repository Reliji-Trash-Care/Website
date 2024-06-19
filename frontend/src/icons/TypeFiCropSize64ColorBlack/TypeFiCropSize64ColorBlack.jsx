import PropTypes from "prop-types";
import React from "react";

export const TypeFiCropSize64ColorBlack = ({ color = "black", className }) => {
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
        d="M16.3467 2.66675L16 42.6667C16 44.0812 16.5619 45.4378 17.5621 46.438C18.5623 47.4382 19.9188 48.0001 21.3333 48.0001H61.3333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M2.66669 16.3467L42.6667 16C44.0812 16 45.4377 16.5619 46.4379 17.5621C47.4381 18.5623 48 19.9188 48 21.3333V61.3333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiCropSize64ColorBlack.propTypes = {
  color: PropTypes.string,
};
