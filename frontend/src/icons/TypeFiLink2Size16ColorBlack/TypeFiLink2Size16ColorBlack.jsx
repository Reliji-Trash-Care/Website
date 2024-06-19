import PropTypes from "prop-types";
import React from "react";

export const TypeFiLink2Size16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_11196)">
        <path
          d="M9.99999 4.66666H12C12.4377 4.66666 12.8712 4.75288 13.2756 4.92039C13.68 5.08791 14.0475 5.33344 14.357 5.64297C14.6665 5.9525 14.9121 6.31996 15.0796 6.72438C15.2471 7.1288 15.3333 7.56225 15.3333 7.99999C15.3333 8.43773 15.2471 8.87118 15.0796 9.2756C14.9121 9.68002 14.6665 10.0475 14.357 10.357C14.0475 10.6665 13.68 10.9121 13.2756 11.0796C12.8712 11.2471 12.4377 11.3333 12 11.3333H9.99999M5.99999 11.3333H3.99999C3.56225 11.3333 3.1288 11.2471 2.72438 11.0796C2.31996 10.9121 1.9525 10.6665 1.64297 10.357C1.01785 9.73189 0.666656 8.88404 0.666656 7.99999C0.666656 7.11593 1.01785 6.26809 1.64297 5.64297C2.26809 5.01785 3.11593 4.66666 3.99999 4.66666H5.99999"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M5.33334 8H10.6667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
      <defs>
        <clipPath id="clip0_143_11196">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiLink2Size16ColorBlack.propTypes = {
  color: PropTypes.string,
};
