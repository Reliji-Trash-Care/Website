import PropTypes from "prop-types";
import React from "react";

export const TypeFiZapSize24ColorWhite = ({ color = "white", className }) => {
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
        d="M8.66667 1.33334L2 9.33334H8L7.33333 14.6667L14 6.66668H8L8.66667 1.33334Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiZapSize24ColorWhite.propTypes = {
  color: PropTypes.string,
};
