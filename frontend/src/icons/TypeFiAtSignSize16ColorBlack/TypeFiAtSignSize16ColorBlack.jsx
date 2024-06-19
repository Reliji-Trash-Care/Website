import PropTypes from "prop-types";
import React from "react";

export const TypeFiAtSignSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_11532)">
        <path
          d="M8.00001 10.6667C9.47277 10.6667 10.6667 9.47277 10.6667 8.00001C10.6667 6.52725 9.47277 5.33334 8.00001 5.33334C6.52725 5.33334 5.33334 6.52725 5.33334 8.00001C5.33334 9.47277 6.52725 10.6667 8.00001 10.6667Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M10.6667 5.33333V8.66666C10.6667 9.19709 10.8774 9.7058 11.2524 10.0809C11.6275 10.4559 12.1362 10.6667 12.6667 10.6667C13.1971 10.6667 13.7058 10.4559 14.0809 10.0809C14.4559 9.7058 14.6667 9.19709 14.6667 8.66666V7.99999C14.6666 6.49535 14.1575 5.03498 13.2222 3.85635C12.2869 2.67772 10.9804 1.85014 9.51508 1.50819C8.0498 1.16624 6.51194 1.33002 5.15155 1.9729C3.79116 2.61579 2.68825 3.69996 2.02216 5.04914C1.35606 6.39832 1.16596 7.93315 1.48276 9.40407C1.79957 10.875 2.60464 12.1955 3.76707 13.1508C4.92951 14.1062 6.38094 14.6402 7.88537 14.6661C9.38979 14.692 10.8587 14.2082 12.0533 13.2933"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_11532">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiAtSignSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
