import PropTypes from "prop-types";
import React from "react";

export const TypeFiSunSize64ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M32 56V61.3333" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M48.96 48.9601L52.7466 52.7468"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M11.2534 52.7468L15.04 48.9601"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M56 32H61.3333" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M2.66669 32H8.00002" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M32 45.3334C39.3638 45.3334 45.3334 39.3639 45.3334 32.0001C45.3334 24.6363 39.3638 18.6667 32 18.6667C24.6362 18.6667 18.6667 24.6363 18.6667 32.0001C18.6667 39.3639 24.6362 45.3334 32 45.3334Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M48.96 15.0399L52.7466 11.2532"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M11.2534 11.2532L15.04 15.0399"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M32 2.66675V8.00008" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiSunSize64ColorBlack.propTypes = {
  color: PropTypes.string,
};
