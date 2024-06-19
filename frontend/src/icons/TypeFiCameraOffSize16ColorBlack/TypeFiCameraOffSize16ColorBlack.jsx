import PropTypes from "prop-types";
import React from "react";

export const TypeFiCameraOffSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10575)">
        <path
          d="M0.666656 0.666656L15.3333 15.3333"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M5.99999 2H9.99999L11.3333 4H14C14.3536 4 14.6927 4.14048 14.9428 4.39052C15.1928 4.64057 15.3333 4.97971 15.3333 5.33333V11.56M10.1867 10.1867C9.96539 10.51 9.67558 10.7807 9.33785 10.9793C9.00012 11.178 8.62276 11.2997 8.23262 11.336C7.84248 11.3722 7.44914 11.3221 7.08059 11.1891C6.71204 11.056 6.37733 10.8434 6.10027 10.5664C5.82321 10.2893 5.61061 9.95462 5.47759 9.58606C5.34457 9.21751 5.29441 8.82418 5.33066 8.43404C5.36691 8.0439 5.4887 7.66654 5.68734 7.32881C5.88599 6.99107 6.15662 6.70127 6.47999 6.48M14 14H1.99999C1.64637 14 1.30723 13.8595 1.05718 13.6095C0.807132 13.3594 0.666656 13.0203 0.666656 12.6667V5.33333C0.666656 4.97971 0.807132 4.64057 1.05718 4.39052C1.30723 4.14048 1.64637 4 1.99999 4H3.99999L14 14Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10575">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiCameraOffSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
