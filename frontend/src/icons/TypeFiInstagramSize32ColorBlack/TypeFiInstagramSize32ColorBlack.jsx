import PropTypes from "prop-types";
import React from "react";

export const TypeFiInstagramSize32ColorBlack = ({ color = "black", className }) => {
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
        d="M45.3333 5.33325H18.6666C11.3028 5.33325 5.33331 11.3028 5.33331 18.6666V45.3333C5.33331 52.6971 11.3028 58.6666 18.6666 58.6666H45.3333C52.6971 58.6666 58.6666 52.6971 58.6666 45.3333V18.6666C58.6666 11.3028 52.6971 5.33325 45.3333 5.33325Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M42.6667 30.32C42.9958 32.5393 42.6167 34.8059 41.5834 36.7974C40.55 38.7888 38.9151 40.4038 36.911 41.4125C34.907 42.4212 32.6359 42.7723 30.4208 42.4158C28.2057 42.0594 26.1594 41.0136 24.5729 39.4271C22.9864 37.8406 21.9406 35.7943 21.5842 33.5792C21.2277 31.3641 21.5788 29.0931 22.5875 27.089C23.5962 25.085 25.2112 23.45 27.2026 22.4167C29.1941 21.3833 31.4607 21.0042 33.68 21.3333C35.9438 21.669 38.0396 22.7239 39.6579 24.3422C41.2761 25.9604 42.331 28.0562 42.6667 30.32Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M46.6667 17.3333H46.6933" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiInstagramSize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
