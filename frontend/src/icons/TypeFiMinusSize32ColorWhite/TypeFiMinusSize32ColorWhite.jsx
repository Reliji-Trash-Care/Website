import PropTypes from "prop-types";
import React from "react";

export const TypeFiMinusSize32ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.3333 32H50.6667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiMinusSize32ColorWhite.propTypes = {
  color: PropTypes.string,
};
