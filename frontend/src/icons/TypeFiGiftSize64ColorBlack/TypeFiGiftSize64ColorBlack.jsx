import PropTypes from "prop-types";
import React from "react";

export const TypeFiGiftSize64ColorBlack = ({ color = "black", className }) => {
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
        d="M26.6667 16V29.3333H5.33334V16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M29.3333 9.33334H2.66666V16H29.3333V9.33334Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M16 29.3333V9.33334" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M16 9.33332H22C22.8841 9.33332 23.7319 8.98213 24.357 8.35701C24.9821 7.73189 25.3333 6.88404 25.3333 5.99999C25.3333 5.11593 24.9821 4.26809 24.357 3.64297C23.7319 3.01785 22.8841 2.66666 22 2.66666C17.3333 2.66666 16 9.33332 16 9.33332Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M16 9.33332H9.99999C9.11593 9.33332 8.26809 8.98213 7.64297 8.35701C7.01785 7.73189 6.66666 6.88404 6.66666 5.99999C6.66666 5.11593 7.01785 4.26809 7.64297 3.64297C8.26809 3.01785 9.11593 2.66666 9.99999 2.66666C14.6667 2.66666 16 9.33332 16 9.33332Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiGiftSize64ColorBlack.propTypes = {
  color: PropTypes.string,
};
