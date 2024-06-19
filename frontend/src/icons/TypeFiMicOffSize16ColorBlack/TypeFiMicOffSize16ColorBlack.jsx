import PropTypes from "prop-types";
import React from "react";

export const TypeFiMicOffSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_11124)">
        <path
          d="M5.33334 15.3333H10.6667"
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
        <path
          d="M10 6.22666V2.66666C10.0005 2.17068 9.81669 1.6922 9.48425 1.32412C9.15181 0.956044 8.69447 0.724618 8.201 0.674772C7.70753 0.624927 7.21314 0.760218 6.81381 1.05438C6.41448 1.34855 6.1387 1.7806 6.04 2.26666M6 5.99999V7.99999C6.00035 8.3953 6.11783 8.78164 6.33762 9.11021C6.55741 9.43878 6.86964 9.69486 7.23487 9.84609C7.60011 9.99732 8.00197 10.0369 8.3897 9.9599C8.77743 9.88287 9.13363 9.69267 9.41333 9.41332L6 5.99999Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M11.3333 11.3C10.6825 11.9643 9.8481 12.419 8.93709 12.6057C8.02607 12.7925 7.08003 12.7028 6.22034 12.3482C5.36065 11.9936 4.62652 11.3902 4.11213 10.6154C3.59773 9.84068 3.32654 8.92992 3.33335 7.99999V6.66666M12.6667 6.66666V7.99999C12.6664 8.27495 12.6419 8.54935 12.5933 8.81999"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M8 12.6667V15.3333" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
      <defs>
        <clipPath id="clip0_143_11124">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiMicOffSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
