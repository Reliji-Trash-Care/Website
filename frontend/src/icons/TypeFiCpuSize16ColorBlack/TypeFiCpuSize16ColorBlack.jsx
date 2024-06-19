import PropTypes from "prop-types";
import React from "react";

export const TypeFiCpuSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10601)">
        <path
          d="M12 2.66666H3.99999C3.26361 2.66666 2.66666 3.26361 2.66666 3.99999V12C2.66666 12.7364 3.26361 13.3333 3.99999 13.3333H12C12.7364 13.3333 13.3333 12.7364 13.3333 12V3.99999C13.3333 3.26361 12.7364 2.66666 12 2.66666Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M10 6H6V10H10V6Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M6 0.666656V2.66666" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M10 0.666656V2.66666" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M6 13.3333V15.3333" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M10 13.3333V15.3333" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M13.3333 6H15.3333" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path
          d="M13.3333 9.33334H15.3333"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M0.666656 6H2.66666" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path
          d="M0.666656 9.33334H2.66666"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10601">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiCpuSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
