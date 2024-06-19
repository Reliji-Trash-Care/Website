import PropTypes from "prop-types";
import React from "react";

export const TypeFiWifiOffSize32ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_5444)">
        <path
          d="M1.33334 1.33334L30.6667 30.6667"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M16 26.6667H16.0133" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path
          d="M11.3734 21.48C12.727 20.5183 14.3462 20.0016 16.0067 20.0016C17.6671 20.0016 19.2864 20.5183 20.64 21.48"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M22.2933 14.7467C23.3855 15.2797 24.4067 15.9471 25.3333 16.7333"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M6.66666 16.7333C8.64277 15.0811 11.0212 13.9816 13.56 13.5466"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M1.89334 12C3.74289 10.3652 5.86361 9.06567 8.16001 8.16003"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M14.28 6.73332C17.1365 6.50315 20.0102 6.85087 22.7294 7.75575C25.4486 8.66062 27.9576 10.1041 30.1067 12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_5444">
          <rect fill="white" height="32" width="32" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiWifiOffSize32ColorWhite.propTypes = {
  color: PropTypes.string,
};
