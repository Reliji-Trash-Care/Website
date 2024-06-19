import PropTypes from "prop-types";
import React from "react";

export const TypeFiDownloadCloudSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_11348)">
        <path
          d="M5.33334 11.3333L8.00001 14L10.6667 11.3333"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M8 8V14" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path
          d="M13.92 12.06C14.4996 11.6524 14.9343 11.0708 15.1609 10.3994C15.3875 9.72808 15.3943 9.002 15.1803 8.32654C14.9663 7.65107 14.5426 7.06138 13.9707 6.64303C13.3989 6.22467 12.7086 5.99943 12 5.99999H11.16C10.9595 5.21857 10.5843 4.49282 10.0628 3.87737C9.54118 3.26193 8.88678 2.77283 8.14882 2.44689C7.41086 2.12095 6.60858 1.96667 5.80237 1.99566C4.99616 2.02466 4.20703 2.23617 3.49439 2.61427C2.78175 2.99237 2.16417 3.52722 1.68814 4.17854C1.21212 4.82986 0.890051 5.58068 0.74619 6.37449C0.60233 7.16829 0.640423 7.98438 0.857603 8.76133C1.07478 9.53828 1.46539 10.2558 2.00002 10.86"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_11348">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiDownloadCloudSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
