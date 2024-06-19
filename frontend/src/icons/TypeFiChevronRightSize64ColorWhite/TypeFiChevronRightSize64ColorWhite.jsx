import PropTypes from "prop-types";
import React from "react";

export const TypeFiChevronRightSize64ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 24L20 16L12 8" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiChevronRightSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
