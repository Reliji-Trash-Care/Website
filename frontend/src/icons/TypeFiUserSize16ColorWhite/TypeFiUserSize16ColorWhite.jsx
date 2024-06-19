import PropTypes from "prop-types";
import React from "react";

export const TypeFiUserSize16ColorWhite = ({ color = "white", className }) => {
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
        d="M53.3333 56V50.6667C53.3333 47.8377 52.2095 45.1246 50.2091 43.1242C48.2087 41.1238 45.4956 40 42.6667 40H21.3333C18.5043 40 15.7912 41.1238 13.7909 43.1242C11.7905 45.1246 10.6667 47.8377 10.6667 50.6667V56"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M32 29.3333C37.891 29.3333 42.6667 24.5577 42.6667 18.6667C42.6667 12.7756 37.891 8 32 8C26.109 8 21.3333 12.7756 21.3333 18.6667C21.3333 24.5577 26.109 29.3333 32 29.3333Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiUserSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
