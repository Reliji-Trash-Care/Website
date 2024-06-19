import PropTypes from "prop-types";
import React from "react";

export const TypeFiUserCheckSize24ColorWhite = ({ color = "white", className }) => {
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
        d="M21.3333 28V25.3333C21.3333 23.9188 20.7714 22.5623 19.7712 21.5621C18.7711 20.5619 17.4145 20 16 20H6.66668C5.25219 20 3.89563 20.5619 2.89544 21.5621C1.89525 22.5623 1.33334 23.9188 1.33334 25.3333V28"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M22.6667 14.6667L25.3333 17.3333L30.6667 12"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M11.3333 14.6667C14.2789 14.6667 16.6667 12.2789 16.6667 9.33333C16.6667 6.38781 14.2789 4 11.3333 4C8.38781 4 6 6.38781 6 9.33333C6 12.2789 8.38781 14.6667 11.3333 14.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiUserCheckSize24ColorWhite.propTypes = {
  color: PropTypes.string,
};
