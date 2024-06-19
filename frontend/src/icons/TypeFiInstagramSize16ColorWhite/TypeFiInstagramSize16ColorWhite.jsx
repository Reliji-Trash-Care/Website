import PropTypes from "prop-types";
import React from "react";

export const TypeFiInstagramSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10174)">
        <path
          d="M11.3333 1.33334H4.66668C2.82573 1.33334 1.33334 2.82573 1.33334 4.66668V11.3333C1.33334 13.1743 2.82573 14.6667 4.66668 14.6667H11.3333C13.1743 14.6667 14.6667 13.1743 14.6667 11.3333V4.66668C14.6667 2.82573 13.1743 1.33334 11.3333 1.33334Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M10.6667 7.57999C10.7489 8.13482 10.6542 8.70146 10.3958 9.19933C10.1375 9.6972 9.72877 10.1009 9.22776 10.3531C8.72675 10.6053 8.15897 10.6931 7.6052 10.6039C7.05143 10.5148 6.53985 10.2534 6.14323 9.85676C5.74662 9.46015 5.48516 8.94857 5.39605 8.3948C5.30694 7.84102 5.39472 7.27325 5.64689 6.77224C5.89907 6.27122 6.3028 5.86248 6.80066 5.60415C7.29853 5.34582 7.86518 5.25105 8.42001 5.33332C8.98596 5.41724 9.50991 5.68096 9.91447 6.08553C10.319 6.49009 10.5828 7.01404 10.6667 7.57999Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M11.6667 4.33334H11.6733"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10174">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiInstagramSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
