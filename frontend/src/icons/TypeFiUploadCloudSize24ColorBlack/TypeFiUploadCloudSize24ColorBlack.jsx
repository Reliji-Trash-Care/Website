import PropTypes from "prop-types";
import React from "react";

export const TypeFiUploadCloudSize24ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10759)">
        <path
          d="M10.6667 10.6667L8.00001 8L5.33334 10.6667"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M8 8V14" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path
          d="M13.5933 12.26C14.2436 11.9055 14.7572 11.3446 15.0533 10.6658C15.3493 9.98692 15.4108 9.22883 15.2281 8.51114C15.0455 7.79344 14.629 7.15702 14.0445 6.70231C13.4599 6.2476 12.7406 6.0005 12 6.00001H11.16C10.9582 5.2195 10.5821 4.4949 10.06 3.88067C9.53783 3.26644 8.88323 2.77858 8.1454 2.45375C7.40757 2.12892 6.6057 1.97558 5.80008 2.00526C4.99446 2.03495 4.20605 2.24688 3.49412 2.62512C2.7822 3.00336 2.16528 3.53808 1.68975 4.18906C1.21423 4.84005 0.892464 5.59037 0.748657 6.38361C0.60485 7.17684 0.642741 7.99236 0.85948 8.76885C1.07622 9.54534 1.46617 10.2626 2 10.8667"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M10.6667 10.6667L8.00001 8L5.33334 10.6667"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10759">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiUploadCloudSize24ColorBlack.propTypes = {
  color: PropTypes.string,
};
