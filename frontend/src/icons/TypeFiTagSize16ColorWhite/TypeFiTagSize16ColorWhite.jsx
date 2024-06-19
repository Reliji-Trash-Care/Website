import PropTypes from "prop-types";
import React from "react";

export const TypeFiTagSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_9783)">
        <path
          d="M13.7267 8.94001L8.94668 13.72C8.82285 13.844 8.67579 13.9423 8.51393 14.0094C8.35207 14.0765 8.17856 14.1111 8.00334 14.1111C7.82812 14.1111 7.65462 14.0765 7.49276 14.0094C7.33089 13.9423 7.18384 13.844 7.06001 13.72L1.33334 8.00001V1.33334H8.00001L13.7267 7.06001C13.975 7.30983 14.1144 7.64776 14.1144 8.00001C14.1144 8.35226 13.975 8.69019 13.7267 8.94001V8.94001Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M4.66666 4.66666H4.67332"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_9783">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiTagSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
