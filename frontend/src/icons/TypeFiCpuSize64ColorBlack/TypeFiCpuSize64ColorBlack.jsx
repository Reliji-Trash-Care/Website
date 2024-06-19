import PropTypes from "prop-types";
import React from "react";

export const TypeFiCpuSize64ColorBlack = ({ color = "black", className }) => {
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
        d="M48 10.6667H16C13.0545 10.6667 10.6667 13.0546 10.6667 16.0001V48.0001C10.6667 50.9456 13.0545 53.3334 16 53.3334H48C50.9455 53.3334 53.3334 50.9456 53.3334 48.0001V16.0001C53.3334 13.0546 50.9455 10.6667 48 10.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M40 24H24V40H40V24Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M24 2.66675V10.6667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M40 2.66675V10.6667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M24 53.3333V61.3333" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M40 53.3333V61.3333" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M53.3333 24H61.3333" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M53.3333 37.3333H61.3333" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M2.66669 24H10.6667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M2.66669 37.3333H10.6667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiCpuSize64ColorBlack.propTypes = {
  color: PropTypes.string,
};
