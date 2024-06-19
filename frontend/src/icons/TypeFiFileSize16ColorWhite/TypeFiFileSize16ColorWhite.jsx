import PropTypes from "prop-types";
import React from "react";

export const TypeFiFileSize16ColorWhite = ({ color = "white", className }) => {
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
        d="M34.6667 5.33325H16C14.5855 5.33325 13.229 5.89515 12.2288 6.89535C11.2286 7.89554 10.6667 9.2521 10.6667 10.6666V53.3333C10.6667 54.7477 11.2286 56.1043 12.2288 57.1045C13.229 58.1047 14.5855 58.6666 16 58.6666H48C49.4145 58.6666 50.7711 58.1047 51.7713 57.1045C52.7714 56.1043 53.3334 54.7477 53.3334 53.3333V23.9999L34.6667 5.33325Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M34.6667 5.33325V23.9999H53.3334"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiFileSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
