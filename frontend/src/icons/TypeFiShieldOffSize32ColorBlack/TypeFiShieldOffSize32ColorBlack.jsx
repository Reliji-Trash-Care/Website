import PropTypes from "prop-types";
import React from "react";

export const TypeFiShieldOffSize32ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10931)">
        <path
          d="M13.1267 9.33334C13.2607 8.90147 13.3304 8.4522 13.3333 8.00001V3.33334L8.00001 1.33334L5.89334 2.12001"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M3.15332 3.15332L2.66666 3.33332V7.99999C2.66666 12 7.99999 14.6667 7.99999 14.6667C9.41134 13.9219 10.6798 12.9334 11.7467 11.7467"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M0.666656 0.666656L15.3333 15.3333"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10931">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiShieldOffSize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
