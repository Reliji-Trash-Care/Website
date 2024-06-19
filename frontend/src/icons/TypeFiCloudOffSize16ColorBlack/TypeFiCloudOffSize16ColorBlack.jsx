import PropTypes from "prop-types";
import React from "react";

export const TypeFiCloudOffSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10587)">
        <path
          d="M15.0733 11.3C15.2881 10.7929 15.3739 10.2404 15.323 9.69202C15.2722 9.14364 15.0862 8.6164 14.7818 8.15745C14.4773 7.69849 14.0639 7.32212 13.5785 7.06197C13.0931 6.80182 12.5508 6.666 12 6.66666H11.16C10.8879 5.59498 10.2894 4.63438 9.44737 3.91776C8.60535 3.20114 7.56141 2.76394 6.46001 2.66666M3.33335 3.33332C2.29207 3.90908 1.47322 4.81651 1.00707 5.91126C0.540926 7.00601 0.45425 8.2252 0.760832 9.37488C1.06741 10.5246 1.74965 11.5387 2.699 12.256C3.64836 12.9733 4.81031 13.3525 6.00001 13.3333H12C12.3865 13.3329 12.77 13.2652 13.1333 13.1333"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M0.666656 0.666656L15.3333 15.3333"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10587">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiCloudOffSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
