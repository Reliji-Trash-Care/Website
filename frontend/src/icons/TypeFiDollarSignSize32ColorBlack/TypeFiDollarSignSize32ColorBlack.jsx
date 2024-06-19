import PropTypes from "prop-types";
import React from "react";

export const TypeFiDollarSignSize32ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M32 2.66675V61.3334" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M45.3333 13.3333H25.3333C22.858 13.3333 20.484 14.3166 18.7337 16.0669C16.9833 17.8173 16 20.1912 16 22.6666C16 25.1419 16.9833 27.5159 18.7337 29.2662C20.484 31.0166 22.858 31.9999 25.3333 31.9999H38.6667C41.142 31.9999 43.516 32.9833 45.2663 34.7336C47.0167 36.4839 48 38.8579 48 41.3333C48 43.8086 47.0167 46.1826 45.2663 47.9329C43.516 49.6833 41.142 50.6666 38.6667 50.6666H16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiDollarSignSize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
