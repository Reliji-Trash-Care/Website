import PropTypes from "prop-types";
import React from "react";

export const TypeFiFolderMinusSize16ColorWhite = ({ color = "white", className }) => {
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
        d="M58.6667 50.6667C58.6667 52.0812 58.1048 53.4377 57.1046 54.4379C56.1044 55.4381 54.7479 56 53.3334 56H10.6667C9.25222 56 7.89567 55.4381 6.89547 54.4379C5.89528 53.4377 5.33337 52.0812 5.33337 50.6667V13.3333C5.33337 11.9188 5.89528 10.5623 6.89547 9.5621C7.89567 8.5619 9.25222 8 10.6667 8H24L29.3334 16H53.3334C54.7479 16 56.1044 16.5619 57.1046 17.5621C58.1048 18.5623 58.6667 19.9188 58.6667 21.3333V50.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M24 37.3333H40" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiFolderMinusSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
