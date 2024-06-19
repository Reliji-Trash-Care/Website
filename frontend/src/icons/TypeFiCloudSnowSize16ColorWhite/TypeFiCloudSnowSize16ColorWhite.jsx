import PropTypes from "prop-types";
import React from "react";

export const TypeFiCloudSnowSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10379)">
        <path d="M8 14.6667H8.00667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path
          d="M10.6667 13.3333H10.6733"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M5.33334 13.3333H5.34001"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M8 12H8.00667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path
          d="M13.3333 11.72C14.0342 11.4131 14.6081 10.8744 14.9587 10.1944C15.3094 9.51435 15.4154 8.73441 15.2591 7.98546C15.1027 7.23651 14.6935 6.56414 14.1 6.08123C13.5066 5.59831 12.7651 5.33424 12 5.33334H11.16C10.9487 4.51502 10.5459 3.75863 9.98489 3.12654C9.42386 2.49444 8.72064 2.00472 7.93319 1.69775C7.14574 1.39078 6.29662 1.27535 5.4558 1.36096C4.61498 1.44658 3.80655 1.7308 3.09714 2.19019C2.38773 2.64958 1.79765 3.27099 1.37555 4.0032C0.953442 4.73541 0.711394 5.55745 0.669353 6.40157C0.627313 7.24569 0.786484 8.08771 1.13375 8.85824C1.48101 9.62876 2.00642 10.3057 2.66668 10.8333"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M10.6667 10.6667H10.6733"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M5.33334 10.6667H5.34001"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10379">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiCloudSnowSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
