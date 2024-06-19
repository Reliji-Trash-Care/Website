import PropTypes from "prop-types";
import React from "react";

export const TypeFiShieldOffSize64ColorBlack = ({ color = "black", className }) => {
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
        d="M52.5066 37.3334C53.0428 35.6059 53.3214 33.8088 53.3333 32V13.3334L31.9999 5.33337L23.5733 8.48004"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M12.6134 12.6133L10.6667 13.3333V32C10.6667 48 32 58.6666 32 58.6666C37.6454 55.6878 42.7192 51.7335 46.9867 46.9866"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M2.66669 2.66663L61.3334 61.3333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiShieldOffSize64ColorBlack.propTypes = {
  color: PropTypes.string,
};
