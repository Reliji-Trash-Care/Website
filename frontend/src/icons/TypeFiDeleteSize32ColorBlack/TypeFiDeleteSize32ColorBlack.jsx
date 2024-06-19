import PropTypes from "prop-types";
import React from "react";

export const TypeFiDeleteSize32ColorBlack = ({ color = "black", className }) => {
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
        d="M56 10.6667H21.3334L2.66669 32.0001L21.3334 53.3334H56C57.4145 53.3334 58.7711 52.7715 59.7713 51.7713C60.7714 50.7711 61.3334 49.4146 61.3334 48.0001V16.0001C61.3334 14.5856 60.7714 13.229 59.7713 12.2288C58.7711 11.2287 57.4145 10.6667 56 10.6667V10.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M48 24L32 40" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M32 24L48 40" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiDeleteSize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
