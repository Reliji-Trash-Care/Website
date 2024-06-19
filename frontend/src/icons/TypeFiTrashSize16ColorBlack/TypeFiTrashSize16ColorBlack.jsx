import PropTypes from "prop-types";
import React from "react";

export const TypeFiTrashSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 8H6.66667H28" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M10.6667 7.99999V5.33332C10.6667 4.62608 10.9476 3.9478 11.4477 3.4477C11.9478 2.94761 12.6261 2.66666 13.3333 2.66666H18.6667C19.3739 2.66666 20.0522 2.94761 20.5523 3.4477C21.0524 3.9478 21.3333 4.62608 21.3333 5.33332V7.99999M25.3333 7.99999V26.6667C25.3333 27.3739 25.0524 28.0522 24.5523 28.5523C24.0522 29.0524 23.3739 29.3333 22.6667 29.3333H9.33332C8.62608 29.3333 7.9478 29.0524 7.4477 28.5523C6.94761 28.0522 6.66666 27.3739 6.66666 26.6667V7.99999H25.3333Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiTrashSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
