import PropTypes from "prop-types";
import React from "react";

export const TypeFiWifiOffSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M2.66666 2.66675L61.3333 61.3334"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M32 53.3333H32.0267" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M22.7467 42.9599C25.4539 41.0365 28.6925 40.0032 32.0133 40.0032C35.3342 40.0032 38.5728 41.0365 41.28 42.9599"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M44.5867 29.4933C46.7709 30.5593 48.8134 31.8941 50.6667 33.4667"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M13.3333 33.4668C17.2856 30.1624 22.0423 27.9634 27.12 27.0935"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M3.78665 24.0002C7.48576 20.7305 11.7272 18.1315 16.32 16.3202"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M28.56 13.4667C34.2731 13.0064 40.0204 13.7018 45.4588 15.5116C50.8972 17.3213 55.9153 20.2083 60.2134 24.0001"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiWifiOffSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
