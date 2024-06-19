import PropTypes from "prop-types";
import React from "react";

export const TypeFiCornerDownLeftSize24ColorBlack = ({ color = "black", className }) => {
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
        d="M24 26.6667L10.6667 40.0001L24 53.3334"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M53.3333 10.6667V29.3334C53.3333 32.1624 52.2095 34.8755 50.2091 36.8759C48.2087 38.8763 45.4956 40.0001 42.6667 40.0001H10.6667"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiCornerDownLeftSize24ColorBlack.propTypes = {
  color: PropTypes.string,
};
