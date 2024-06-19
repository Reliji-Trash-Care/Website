import PropTypes from "prop-types";
import React from "react";

export const TypeFiChevronDownSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 24L32 40L48 24" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiChevronDownSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
