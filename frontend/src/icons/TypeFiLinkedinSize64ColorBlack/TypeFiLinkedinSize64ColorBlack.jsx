import PropTypes from "prop-types";
import React from "react";

export const TypeFiLinkedinSize64ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.00001 6H1.33334V14H4.00001V6Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M10.6667 5.33334C11.7275 5.33334 12.7449 5.75477 13.4951 6.50492C14.2452 7.25506 14.6667 8.27248 14.6667 9.33334V14H12V9.33334C12 8.97972 11.8595 8.64058 11.6095 8.39053C11.3594 8.14049 11.0203 8.00001 10.6667 8.00001C10.313 8.00001 9.9739 8.14049 9.72385 8.39053C9.4738 8.64058 9.33332 8.97972 9.33332 9.33334V14H6.66666V9.33334C6.66666 8.27248 7.08808 7.25506 7.83823 6.50492C8.58838 5.75477 9.60579 5.33334 10.6667 5.33334V5.33334Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M2.66668 4.00001C3.40306 4.00001 4.00001 3.40306 4.00001 2.66668C4.00001 1.9303 3.40306 1.33334 2.66668 1.33334C1.9303 1.33334 1.33334 1.9303 1.33334 2.66668C1.33334 3.40306 1.9303 4.00001 2.66668 4.00001Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiLinkedinSize64ColorBlack.propTypes = {
  color: PropTypes.string,
};
