import PropTypes from "prop-types";
import React from "react";

export const TypeFiVoicemailSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_9673)">
        <path
          d="M3.66666 10.6667H12.3333"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M12.3333 10.6667C13.9902 10.6667 15.3333 9.32351 15.3333 7.66666C15.3333 6.0098 13.9902 4.66666 12.3333 4.66666C10.6765 4.66666 9.33334 6.0098 9.33334 7.66666C9.33334 9.32351 10.6765 10.6667 12.3333 10.6667Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M3.66666 10.6667C5.32351 10.6667 6.66666 9.32351 6.66666 7.66666C6.66666 6.0098 5.32351 4.66666 3.66666 4.66666C2.0098 4.66666 0.666656 6.0098 0.666656 7.66666C0.666656 9.32351 2.0098 10.6667 3.66666 10.6667Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_9673">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiVoicemailSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
