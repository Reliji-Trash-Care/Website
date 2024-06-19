import PropTypes from "prop-types";
import React from "react";

export const TypeFiShieldSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M32 58.6667C32 58.6667 53.3333 48 53.3333 32V13.3334L32 5.33337L10.6667 13.3334V32C10.6667 48 32 58.6667 32 58.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiShieldSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
