import PropTypes from "prop-types";
import React from "react";

export const TypeFiMicSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_11130)">
        <path
          d="M5.33334 15.3333H10.6667"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M8 12.6667V15.3333" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path
          d="M8 0.666656C7.46957 0.666656 6.96086 0.87737 6.58579 1.25244C6.21071 1.62752 6 2.13622 6 2.66666V7.99999C6 8.53042 6.21071 9.03913 6.58579 9.4142C6.96086 9.78928 7.46957 9.99999 8 9.99999C8.53043 9.99999 9.03914 9.78928 9.41421 9.4142C9.78929 9.03913 10 8.53042 10 7.99999V2.66666C10 2.13622 9.78929 1.62752 9.41421 1.25244C9.03914 0.87737 8.53043 0.666656 8 0.666656V0.666656Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M12.6667 6.66666V7.99999C12.6667 9.23767 12.175 10.4247 11.2998 11.2998C10.4247 12.175 9.23769 12.6667 8.00001 12.6667C6.76233 12.6667 5.57535 12.175 4.70018 11.2998C3.82501 10.4247 3.33334 9.23767 3.33334 7.99999V6.66666"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_11130">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiMicSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
