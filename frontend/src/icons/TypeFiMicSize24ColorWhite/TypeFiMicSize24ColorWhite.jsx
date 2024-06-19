import PropTypes from "prop-types";
import React from "react";

export const TypeFiMicSize24ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.6667 30.6667H21.3333" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M16 25.3333V30.6667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M16 1.33334C14.9391 1.33334 13.9217 1.75477 13.1716 2.50492C12.4214 3.25506 12 4.27248 12 5.33334V16C12 17.0609 12.4214 18.0783 13.1716 18.8284C13.9217 19.5786 14.9391 20 16 20C17.0609 20 18.0783 19.5786 18.8284 18.8284C19.5786 18.0783 20 17.0609 20 16V5.33334C20 4.27248 19.5786 3.25506 18.8284 2.50492C18.0783 1.75477 17.0609 1.33334 16 1.33334V1.33334Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M25.3333 13.3333V16C25.3333 18.4754 24.35 20.8493 22.5997 22.5997C20.8493 24.35 18.4753 25.3333 16 25.3333C13.5246 25.3333 11.1507 24.35 9.40033 22.5997C7.64999 20.8493 6.66666 18.4754 6.66666 16V13.3333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiMicSize24ColorWhite.propTypes = {
  color: PropTypes.string,
};
