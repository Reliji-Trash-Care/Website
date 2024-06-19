import PropTypes from "prop-types";
import React from "react";

export const TypeFiLifeBuoySize24ColorBlack = ({ color = "black", className }) => {
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
        d="M32 58.6666C46.7276 58.6666 58.6666 46.7275 58.6666 31.9999C58.6666 17.2723 46.7276 5.33325 32 5.33325C17.2724 5.33325 5.33331 17.2723 5.33331 31.9999C5.33331 46.7275 17.2724 58.6666 32 58.6666Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M32 42.6666C37.891 42.6666 42.6666 37.891 42.6666 31.9999C42.6666 26.1089 37.891 21.3333 32 21.3333C26.1089 21.3333 21.3333 26.1089 21.3333 31.9999C21.3333 37.891 26.1089 42.6666 32 42.6666Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M39.5466 39.5468L50.8533 50.8535"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M13.1467 50.8535L24.4533 39.5468"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M39.5466 24.4532L50.8533 13.1465"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M39.5466 24.4533L48.96 15.0399"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M13.1467 13.1465L24.4533 24.4532"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiLifeBuoySize24ColorBlack.propTypes = {
  color: PropTypes.string,
};
