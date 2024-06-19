import PropTypes from "prop-types";
import React from "react";

export const TypeFiMonitorSize24ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21.3333 56H42.6667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M32 45.3333V55.9999" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M53.3333 8H10.6667C7.72116 8 5.33334 10.3878 5.33334 13.3333V40C5.33334 42.9455 7.72116 45.3333 10.6667 45.3333H53.3333C56.2789 45.3333 58.6667 42.9455 58.6667 40V13.3333C58.6667 10.3878 56.2789 8 53.3333 8Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiMonitorSize24ColorWhite.propTypes = {
  color: PropTypes.string,
};
