import PropTypes from "prop-types";
import React from "react";

export const TypeFiTwitterSize32ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.6667 4.00001C29.3899 4.90065 27.9762 5.58949 26.48 6.04001C25.677 5.11669 24.6098 4.46227 23.4227 4.16525C22.2357 3.86822 20.986 3.94294 19.8428 4.37928C18.6996 4.81563 17.7179 5.59255 17.0307 6.60497C16.3434 7.61739 15.9836 8.81646 16 10.04V11.3733C13.6569 11.4341 11.335 10.9144 9.24135 9.8606C7.14767 8.80678 5.3471 7.25152 4.00001 5.33334C4.00001 5.33334 -1.33332 17.3333 10.6667 22.6667C7.92071 24.5306 4.64955 25.4652 1.33334 25.3333C13.3333 32 28 25.3333 28 10C27.9988 9.62861 27.9631 9.25814 27.8933 8.89334C29.2541 7.55133 30.2144 5.85696 30.6667 4.00001V4.00001Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiTwitterSize32ColorWhite.propTypes = {
  color: PropTypes.string,
};
