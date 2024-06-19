import PropTypes from "prop-types";
import React from "react";

export const TypeFiCreditCardSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_9562)">
        <path
          d="M14 2.66666H1.99999C1.26361 2.66666 0.666656 3.26361 0.666656 3.99999V12C0.666656 12.7364 1.26361 13.3333 1.99999 13.3333H14C14.7364 13.3333 15.3333 12.7364 15.3333 12V3.99999C15.3333 3.26361 14.7364 2.66666 14 2.66666Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M0.666656 6.66666H15.3333"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_9562">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiCreditCardSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
