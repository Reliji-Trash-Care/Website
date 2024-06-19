import PropTypes from "prop-types";
import React from "react";

export const TypeFiKeySize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10168)">
        <path
          d="M10.3333 5.00001L12.6667 2.66668M14 1.33334L12.6667 2.66668L14 1.33334ZM7.59333 7.74001C7.93756 8.07965 8.2112 8.48404 8.3985 8.92987C8.5858 9.37571 8.68306 9.85419 8.68468 10.3378C8.6863 10.8213 8.59225 11.3005 8.40794 11.7475C8.22363 12.1946 7.95271 12.6008 7.61076 12.9428C7.26882 13.2847 6.86261 13.5556 6.41553 13.74C5.96845 13.9243 5.48933 14.0183 5.00575 14.0167C4.52218 14.0151 4.0437 13.9178 3.59786 13.7305C3.15203 13.5432 2.74764 13.2696 2.408 12.9253C1.74009 12.2338 1.37051 11.3076 1.37886 10.3462C1.38722 9.38482 1.77284 8.46517 2.45266 7.78534C3.13249 7.10551 4.05214 6.71989 5.01353 6.71154C5.97492 6.70318 6.90113 7.07276 7.59267 7.74068L7.59333 7.74001ZM7.59333 7.74001L10.3333 5.00001L7.59333 7.74001ZM10.3333 5.00001L12.3333 7.00001L14.6667 4.66668L12.6667 2.66668L10.3333 5.00001Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10168">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiKeySize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
