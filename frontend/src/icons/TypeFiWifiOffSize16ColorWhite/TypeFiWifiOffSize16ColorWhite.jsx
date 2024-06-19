import PropTypes from "prop-types";
import React from "react";

export const TypeFiWifiOffSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_4394)">
        <path d="M1 1L23 23" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M12 20H12.01" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path
          d="M8.53 16.11C9.5452 15.3887 10.7597 15.0013 12.005 15.0013C13.2503 15.0013 14.4648 15.3887 15.48 16.11"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M16.72 11.06C17.5391 11.4597 18.305 11.9603 19 12.55"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M5 12.55C6.48208 11.3108 8.26587 10.4862 10.17 10.16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M1.42001 9C2.80718 7.77385 4.39771 6.79922 6.12001 6.12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M10.71 5.05001C12.8524 4.87738 15.0076 5.13818 17.047 5.81683C19.0864 6.49549 20.9682 7.57809 22.58 9.00001"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_4394">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiWifiOffSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
