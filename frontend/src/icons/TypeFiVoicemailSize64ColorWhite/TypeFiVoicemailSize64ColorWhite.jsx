import PropTypes from "prop-types";
import React from "react";

export const TypeFiVoicemailSize64ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.6667 42.6667H49.3333" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M49.3333 42.6668C55.9608 42.6668 61.3333 37.2942 61.3333 30.6667C61.3333 24.0393 55.9608 18.6667 49.3333 18.6667C42.7059 18.6667 37.3333 24.0393 37.3333 30.6667C37.3333 37.2942 42.7059 42.6668 49.3333 42.6668Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M14.6667 42.6668C21.2941 42.6668 26.6667 37.2942 26.6667 30.6667C26.6667 24.0393 21.2941 18.6667 14.6667 18.6667C8.03924 18.6667 2.66666 24.0393 2.66666 30.6667C2.66666 37.2942 8.03924 42.6668 14.6667 42.6668Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiVoicemailSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
