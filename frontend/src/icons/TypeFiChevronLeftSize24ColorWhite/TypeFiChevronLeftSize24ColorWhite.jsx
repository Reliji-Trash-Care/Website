import PropTypes from "prop-types";
import React from "react";

export const TypeFiChevronLeftSize24ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 18L9 12L15 6" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiChevronLeftSize24ColorWhite.propTypes = {
  color: PropTypes.string,
};
