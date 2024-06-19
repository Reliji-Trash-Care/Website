import PropTypes from "prop-types";
import React from "react";

export const TypeFiRotateCcwSize32ColorBlack = ({ color = "black", className }) => {
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
        d="M2.66669 10.6666V26.6666H18.6667"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M9.36002 40C11.0891 44.9076 14.3662 49.1204 18.6978 52.0036C23.0293 54.8868 28.1805 56.2842 33.3753 55.9852C38.57 55.6862 43.5269 53.7071 47.499 50.346C51.4712 46.9849 54.2434 42.4239 55.3979 37.3503C56.5525 32.2766 56.0269 26.9652 53.9004 22.2162C51.7738 17.4673 48.1614 13.5381 43.6076 11.0207C39.0537 8.50326 33.8051 7.534 28.6525 8.25894C23.4999 8.98388 18.7225 11.3638 15.04 15.04L2.66669 26.6666"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiRotateCcwSize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
