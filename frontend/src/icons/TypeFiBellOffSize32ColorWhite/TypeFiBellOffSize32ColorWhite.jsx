import PropTypes from "prop-types";
import React from "react";

export const TypeFiBellOffSize32ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_5316)">
        <path
          d="M18.3067 28C18.0722 28.4041 17.7358 28.7395 17.331 28.9727C16.9261 29.2059 16.4672 29.3286 16 29.3286C15.5328 29.3286 15.0738 29.2059 14.669 28.9727C14.2642 28.7395 13.9277 28.4041 13.6933 28"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M24.84 17.3333C24.2468 15.1619 23.964 12.9174 24 10.6667"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M8.34667 8.34668C8.11502 9.09816 7.99815 9.88031 8 10.6667C8 20 4 22.6667 4 22.6667H22.6667"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M24 10.6667C24.0021 9.21747 23.6106 7.79486 22.8671 6.55084C22.1236 5.30682 21.0562 4.28813 19.7788 3.60357C18.5014 2.91901 17.0621 2.59431 15.6145 2.66414C14.167 2.73397 12.7656 3.19572 11.56 4.00005"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M1.33334 1.33334L30.6667 30.6667"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_5316">
          <rect fill="white" height="32" width="32" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiBellOffSize32ColorWhite.propTypes = {
  color: PropTypes.string,
};
