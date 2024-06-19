import PropTypes from "prop-types";
import React from "react";

export const TypeFiVolumeSize32ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiVolumeSize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
