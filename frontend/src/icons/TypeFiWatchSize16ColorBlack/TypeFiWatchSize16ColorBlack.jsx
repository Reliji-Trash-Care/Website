import PropTypes from "prop-types";
import React from "react";

export const TypeFiWatchSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10707)">
        <path
          d="M8.00001 12.6667C10.5773 12.6667 12.6667 10.5773 12.6667 8.00001C12.6667 5.42268 10.5773 3.33334 8.00001 3.33334C5.42268 3.33334 3.33334 5.42268 3.33334 8.00001C3.33334 10.5773 5.42268 12.6667 8.00001 12.6667Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M8 6V8L9 9" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path
          d="M11.0067 11.5667L10.7733 14.12C10.7433 14.4524 10.5897 14.7615 10.3428 14.9862C10.0959 15.2108 9.77378 15.3347 9.44 15.3333H6.55333C6.21955 15.3347 5.8974 15.2108 5.65053 14.9862C5.40366 14.7615 5.25003 14.4524 5.22 14.12L4.98666 11.5667M4.99333 4.43333L5.22666 1.88C5.2566 1.54872 5.40928 1.24059 5.65474 1.0161C5.9002 0.791615 6.2207 0.666981 6.55333 0.666667H9.45333C9.78711 0.665313 10.1093 0.7892 10.3561 1.01385C10.603 1.2385 10.7566 1.54757 10.7867 1.88L11.02 4.43333"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10707">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiWatchSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
