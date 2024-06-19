import PropTypes from "prop-types";
import React from "react";

export const TypeFiCornerUpRightSize32ColorWhite = ({ color = "white", className }) => {
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
        d="M10 9.33332L13.3333 5.99999L10 2.66666"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M2.66666 13.3333V8.66667C2.66666 7.95942 2.94761 7.28115 3.4477 6.78105C3.9478 6.28095 4.62608 6 5.33332 6H13.3333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiCornerUpRightSize32ColorWhite.propTypes = {
  color: PropTypes.string,
};
