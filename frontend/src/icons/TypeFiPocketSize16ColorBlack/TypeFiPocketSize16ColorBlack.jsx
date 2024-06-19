import PropTypes from "prop-types";
import React from "react";

export const TypeFiPocketSize16ColorBlack = ({ color = "black", className }) => {
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
        d="M10.6667 8H53.3333C54.7478 8 56.1044 8.5619 57.1046 9.5621C58.1048 10.5623 58.6667 11.9188 58.6667 13.3333V29.3333C58.6667 36.4058 55.8572 43.1885 50.8562 48.1895C45.8552 53.1905 39.0725 56 32 56C28.4981 56 25.0305 55.3103 21.7951 53.9701C18.5598 52.63 15.6201 50.6657 13.1438 48.1895C8.14286 43.1885 5.33334 36.4058 5.33334 29.3333V13.3333C5.33334 11.9188 5.89525 10.5623 6.89544 9.5621C7.89563 8.5619 9.25219 8 10.6667 8V8Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M21.3333 26.6667L32 37.3334L42.6667 26.6667"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiPocketSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
