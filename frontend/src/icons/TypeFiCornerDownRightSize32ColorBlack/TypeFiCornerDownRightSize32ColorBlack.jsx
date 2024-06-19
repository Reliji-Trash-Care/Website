import PropTypes from "prop-types";
import React from "react";

export const TypeFiCornerDownRightSize32ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 6.66666L13.3333 9.99999L10 13.3333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M2.66666 2.66666V7.33332C2.66666 8.04057 2.94761 8.71884 3.4477 9.21894C3.9478 9.71904 4.62608 9.99999 5.33332 9.99999H13.3333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiCornerDownRightSize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
