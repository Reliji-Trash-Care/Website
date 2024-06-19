import PropTypes from "prop-types";
import React from "react";

export const TypeFiThumbsUpSize32ColorWhite = ({ color = "white", className }) => {
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
        d="M9.33332 29.3333H5.33332C4.62608 29.3333 3.9478 29.0524 3.4477 28.5523C2.94761 28.0522 2.66666 27.3739 2.66666 26.6667V17.3333C2.66666 16.6261 2.94761 15.9478 3.4477 15.4477C3.9478 14.9476 4.62608 14.6667 5.33332 14.6667H9.33332M18.6667 12V6.66666C18.6667 5.60579 18.2452 4.58838 17.4951 3.83823C16.7449 3.08808 15.7275 2.66666 14.6667 2.66666L9.33332 14.6667V29.3333H24.3733C25.0164 29.3406 25.6405 29.1152 26.1305 28.6987C26.6206 28.2821 26.9436 27.7025 27.04 27.0667L28.88 15.0667C28.938 14.6845 28.9122 14.2942 28.8044 13.923C28.6967 13.5518 28.5095 13.2084 28.2558 12.9167C28.0021 12.625 27.6881 12.3919 27.3354 12.2336C26.9827 12.0753 26.5999 11.9956 26.2133 12H18.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiThumbsUpSize32ColorWhite.propTypes = {
  color: PropTypes.string,
};
