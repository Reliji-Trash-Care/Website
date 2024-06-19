import PropTypes from "prop-types";
import React from "react";

export const TypeFiEdit2Size16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_9567)">
        <path
          d="M11.3333 2.00001C11.5084 1.82491 11.7163 1.68602 11.9451 1.59126C12.1739 1.4965 12.4191 1.44772 12.6667 1.44772C12.9143 1.44772 13.1595 1.4965 13.3883 1.59126C13.617 1.68602 13.8249 1.82491 14 2.00001C14.1751 2.1751 14.314 2.38297 14.4088 2.61175C14.5035 2.84052 14.5523 3.08572 14.5523 3.33334C14.5523 3.58096 14.5035 3.82616 14.4088 4.05494C14.314 4.28371 14.1751 4.49158 14 4.66667L5.00001 13.6667L1.33334 14.6667L2.33334 11L11.3333 2.00001Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_9567">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiEdit2Size16ColorWhite.propTypes = {
  color: PropTypes.string,
};
