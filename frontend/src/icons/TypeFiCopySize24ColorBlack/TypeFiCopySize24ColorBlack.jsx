import PropTypes from "prop-types";
import React from "react";

export const TypeFiCopySize24ColorBlack = ({ color = "black", className }) => {
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
        d="M53.3333 24H29.3333C26.3878 24 24 26.3878 24 29.3333V53.3333C24 56.2789 26.3878 58.6667 29.3333 58.6667H53.3333C56.2789 58.6667 58.6667 56.2789 58.6667 53.3333V29.3333C58.6667 26.3878 56.2789 24 53.3333 24Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M13.3333 39.9999H10.6666C9.25216 39.9999 7.8956 39.438 6.89541 38.4378C5.89522 37.4376 5.33331 36.0811 5.33331 34.6666V10.6666C5.33331 9.2521 5.89522 7.89554 6.89541 6.89535C7.8956 5.89515 9.25216 5.33325 10.6666 5.33325H34.6666C36.0811 5.33325 37.4377 5.89515 38.4379 6.89535C39.4381 7.89554 40 9.2521 40 10.6666V13.3333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiCopySize24ColorBlack.propTypes = {
  color: PropTypes.string,
};
