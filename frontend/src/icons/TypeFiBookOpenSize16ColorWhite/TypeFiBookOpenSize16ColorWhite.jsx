import PropTypes from "prop-types";
import React from "react";

export const TypeFiBookOpenSize16ColorWhite = ({ color = "white", className }) => {
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
        d="M58.6667 8H42.6667C39.8377 8 37.1246 9.12381 35.1242 11.1242C33.1238 13.1246 32 15.8377 32 18.6667V56C32 53.8783 32.8429 51.8434 34.3431 50.3431C35.8434 48.8429 37.8783 48 40 48H58.6667V8Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M5.33337 8H21.3334C24.1624 8 26.8755 9.12381 28.8758 11.1242C30.8762 13.1246 32 15.8377 32 18.6667V56C32 53.8783 31.1572 51.8434 29.6569 50.3431C28.1566 48.8429 26.1218 48 24 48H5.33337V8Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiBookOpenSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
