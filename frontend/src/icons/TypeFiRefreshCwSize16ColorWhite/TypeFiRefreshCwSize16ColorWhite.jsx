import PropTypes from "prop-types";
import React from "react";

export const TypeFiRefreshCwSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_9939)">
        <path
          d="M0.666656 13.3333V9.33334H4.66666"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M15.3333 2.66666V6.66666H11.3333"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M2.33999 6.00001C2.6781 5.04453 3.25275 4.19028 4.0103 3.51696C4.76786 2.84363 5.68363 2.37319 6.67218 2.14952C7.66073 1.92584 8.68983 1.95624 9.66345 2.23786C10.6371 2.51948 11.5235 3.04315 12.24 3.76001L15.3333 6.66668M0.666656 9.33334L3.75999 12.24C4.47649 12.9569 5.36291 13.4805 6.33653 13.7622C7.31015 14.0438 8.33925 14.0742 9.3278 13.8505C10.3163 13.6268 11.2321 13.1564 11.9897 12.4831C12.7472 11.8097 13.3219 10.9555 13.66 10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_9939">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiRefreshCwSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
