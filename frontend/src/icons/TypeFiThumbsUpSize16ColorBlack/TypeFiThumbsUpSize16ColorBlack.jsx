import PropTypes from "prop-types";
import React from "react";

export const TypeFiThumbsUpSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10820)">
        <path
          d="M4.66668 14.6667H2.66668C2.31305 14.6667 1.97392 14.5262 1.72387 14.2762C1.47382 14.0261 1.33334 13.687 1.33334 13.3333V8.66668C1.33334 8.31306 1.47382 7.97392 1.72387 7.72387C1.97392 7.47382 2.31305 7.33334 2.66668 7.33334H4.66668M9.33334 6.00001V3.33334C9.33334 2.80291 9.12263 2.2942 8.74756 1.91913C8.37248 1.54406 7.86378 1.33334 7.33334 1.33334L4.66668 7.33334V14.6667H12.1867C12.5082 14.6703 12.8203 14.5576 13.0653 14.3493C13.3103 14.1411 13.4718 13.8513 13.52 13.5333L14.44 7.53334C14.469 7.34225 14.4561 7.14713 14.4022 6.96151C14.3483 6.77589 14.2547 6.60421 14.1279 6.45835C14.0011 6.3125 13.8441 6.19596 13.6677 6.11682C13.4914 6.03768 13.2999 5.99782 13.1067 6.00001H9.33334Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10820">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiThumbsUpSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
