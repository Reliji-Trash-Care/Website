import PropTypes from "prop-types";
import React from "react";

export const TypeFiYoutubeSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10674)">
        <path
          d="M15.0267 4.27999C14.9475 3.9636 14.7862 3.6737 14.5591 3.43959C14.332 3.20548 14.0472 3.03545 13.7333 2.94666C12.5867 2.66666 8 2.66666 8 2.66666C8 2.66666 3.41334 2.66666 2.26667 2.97332C1.95284 3.06211 1.66799 3.23215 1.4409 3.46626C1.21382 3.70037 1.05253 3.99026 0.973338 4.30666C0.763481 5.47036 0.660829 6.65086 0.666671 7.83332C0.659191 9.02469 0.76185 10.2142 0.973338 11.3867C1.06064 11.6932 1.22554 11.9721 1.4521 12.1963C1.67866 12.4205 1.95922 12.5825 2.26667 12.6667C3.41334 12.9733 8 12.9733 8 12.9733C8 12.9733 12.5867 12.9733 13.7333 12.6667C14.0472 12.5779 14.332 12.4078 14.5591 12.1737C14.7862 11.9396 14.9475 11.6497 15.0267 11.3333C15.2349 10.1784 15.3376 9.00688 15.3333 7.83332C15.3408 6.64196 15.2382 5.45246 15.0267 4.27999V4.27999Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M6.5 10.0133L10.3333 7.83332L6.5 5.65332V10.0133Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10674">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiYoutubeSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
