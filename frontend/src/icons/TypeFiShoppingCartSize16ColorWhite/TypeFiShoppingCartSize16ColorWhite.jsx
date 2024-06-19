import PropTypes from "prop-types";
import React from "react";

export const TypeFiShoppingCartSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_9873)">
        <path
          d="M13.3333 14.6667C13.7015 14.6667 14 14.3682 14 14C14 13.6318 13.7015 13.3333 13.3333 13.3333C12.9651 13.3333 12.6667 13.6318 12.6667 14C12.6667 14.3682 12.9651 14.6667 13.3333 14.6667Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M6.00001 14.6667C6.3682 14.6667 6.66668 14.3682 6.66668 14C6.66668 13.6318 6.3682 13.3333 6.00001 13.3333C5.63182 13.3333 5.33334 13.6318 5.33334 14C5.33334 14.3682 5.63182 14.6667 6.00001 14.6667Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M0.666656 0.666656H3.33332L5.11999 9.59332C5.18095 9.90025 5.34793 10.176 5.59169 10.3722C5.83544 10.5684 6.14045 10.6727 6.45332 10.6667H12.9333C13.2462 10.6727 13.5512 10.5684 13.795 10.3722C14.0387 10.176 14.2057 9.90025 14.2667 9.59332L15.3333 3.99999H3.99999"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_9873">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiShoppingCartSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
