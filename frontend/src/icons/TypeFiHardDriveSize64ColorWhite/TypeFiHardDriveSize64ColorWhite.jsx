import PropTypes from "prop-types";
import React from "react";

export const TypeFiHardDriveSize64ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M29.3333 16H2.66666" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M7.26666 6.81334L2.66666 16V24C2.66666 24.7073 2.94761 25.3855 3.4477 25.8856C3.9478 26.3857 4.62608 26.6667 5.33332 26.6667H26.6667C27.3739 26.6667 28.0522 26.3857 28.5523 25.8856C29.0524 25.3855 29.3333 24.7073 29.3333 24V16L24.7333 6.81334C24.5126 6.36906 24.1722 5.99517 23.7506 5.73372C23.329 5.47226 22.8428 5.33361 22.3467 5.33334H9.65332C9.15721 5.33361 8.67101 5.47226 8.24938 5.73372C7.82776 5.99517 7.48743 6.36906 7.26666 6.81334V6.81334Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M13.3333 21.3333H13.3467" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M8 21.3333H8.01333" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiHardDriveSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
