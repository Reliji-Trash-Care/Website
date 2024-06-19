import PropTypes from "prop-types";
import React from "react";

export const TypeFiRefreshCcwSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_9943)">
        <path
          d="M15.3333 13.3333V9.33334H11.3333"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M0.666656 2.66666V6.66666H4.66666"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M13.66 6.00001C13.3219 5.04453 12.7472 4.19028 11.9897 3.51696C11.2321 2.84363 10.3163 2.37319 9.3278 2.14952C8.33925 1.92584 7.31015 1.95624 6.33653 2.23786C5.36291 2.51948 4.47649 3.04315 3.75999 3.76001L0.666656 6.66668M15.3333 9.33334L12.24 12.24C11.5235 12.9569 10.6371 13.4805 9.66345 13.7622C8.68983 14.0438 7.66073 14.0742 6.67218 13.8505C5.68363 13.6268 4.76786 13.1564 4.0103 12.4831C3.25275 11.8097 2.6781 10.9555 2.33999 10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_9943">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiRefreshCcwSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
