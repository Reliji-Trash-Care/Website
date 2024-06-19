import PropTypes from "prop-types";
import React from "react";

export const TypeFiImageSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M50.6667 8H13.3333C10.3878 8 8 10.3878 8 13.3333V50.6667C8 53.6122 10.3878 56 13.3333 56H50.6667C53.6122 56 56 53.6122 56 50.6667V13.3333C56 10.3878 53.6122 8 50.6667 8Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M56 40.0001L42.6667 26.6667L13.3333 56.0001"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M22.6667 26.6667C24.8758 26.6667 26.6667 24.8759 26.6667 22.6667C26.6667 20.4576 24.8758 18.6667 22.6667 18.6667C20.4575 18.6667 18.6667 20.4576 18.6667 22.6667C18.6667 24.8759 20.4575 26.6667 22.6667 26.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiImageSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
