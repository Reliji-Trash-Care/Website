import PropTypes from "prop-types";
import React from "react";

export const TypeFiAirplaySize24ColorBlack = ({ color = "black", className }) => {
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
        d="M13.3333 45.3333H10.6666C9.25216 45.3333 7.8956 44.7714 6.89541 43.7712C5.89522 42.771 5.33331 41.4145 5.33331 40V13.3333C5.33331 11.9188 5.89522 10.5623 6.89541 9.5621C7.8956 8.5619 9.25216 8 10.6666 8H53.3333C54.7478 8 56.1044 8.5619 57.1045 9.5621C58.1047 10.5623 58.6666 11.9188 58.6666 13.3333V40C58.6666 41.4145 58.1047 42.771 57.1045 43.7712C56.1044 44.7714 54.7478 45.3333 53.3333 45.3333H50.6666"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M32 40L45.3334 56H18.6667L32 40Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiAirplaySize24ColorBlack.propTypes = {
  color: PropTypes.string,
};
