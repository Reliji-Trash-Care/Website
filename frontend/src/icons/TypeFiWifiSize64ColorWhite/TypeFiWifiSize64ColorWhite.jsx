import PropTypes from "prop-types";
import React from "react";

export const TypeFiWifiSize64ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M32 53.3333H32.0267" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M22.7467 42.9599C25.4539 41.0365 28.6925 40.0032 32.0133 40.0032C35.3342 40.0032 38.5728 41.0365 41.28 42.9599"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M13.3333 33.4669C18.6042 29.0767 25.247 26.6725 32.1067 26.6725C38.9664 26.6725 45.6092 29.0767 50.88 33.4669"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M3.78665 24.0001C11.5798 17.1307 21.6114 13.3405 32 13.3405C42.3885 13.3405 52.4202 17.1307 60.2133 24.0001"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiWifiSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
