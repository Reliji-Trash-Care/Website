import PropTypes from "prop-types";
import React from "react";

export const TypeFiRefreshCwSize32ColorWhite = ({ color = "white", className }) => {
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
        d="M2.66666 53.3332V37.3333H18.6667"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M61.3333 10.6667V26.6667H45.3333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M9.35999 24.0002C10.7124 20.1783 13.011 16.7613 16.0412 14.068C19.0715 11.3747 22.7346 9.49293 26.6888 8.59824C30.6429 7.70356 34.7593 7.82513 38.6538 8.95162C42.5483 10.0781 46.094 12.1728 48.96 15.0402L61.3333 26.6669M2.66666 37.3336L15.04 48.9602C17.906 51.8276 21.4517 53.9223 25.3461 55.0488C29.2406 56.1753 33.357 56.2969 37.3112 55.4022C41.2654 54.5075 44.9285 52.6257 47.9587 49.9324C50.989 47.2391 53.2875 43.8221 54.64 40.0002"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiRefreshCwSize32ColorWhite.propTypes = {
  color: PropTypes.string,
};
