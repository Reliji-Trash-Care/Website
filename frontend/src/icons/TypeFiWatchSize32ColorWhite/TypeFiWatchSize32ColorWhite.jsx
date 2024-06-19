import PropTypes from "prop-types";
import React from "react";

export const TypeFiWatchSize32ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 50.6666C42.3093 50.6666 50.6666 42.3092 50.6666 31.9999C50.6666 21.6906 42.3093 13.3333 32 13.3333C21.6907 13.3333 13.3333 21.6906 13.3333 31.9999C13.3333 42.3092 21.6907 50.6666 32 50.6666Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M32 24V32L36 36" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M44.0267 46.2668L43.0934 56.4801C42.9732 57.8098 42.3587 59.0461 41.3712 59.9447C40.3837 60.8433 39.0951 61.3388 37.76 61.3334H26.2134C24.8782 61.3388 23.5896 60.8433 22.6022 59.9447C21.6147 59.0461 21.0002 57.8098 20.88 56.4801L19.9467 46.2668M19.9734 17.7334L20.9067 7.52009C21.0264 6.19497 21.6372 4.96245 22.619 4.0645C23.6008 3.16655 24.8828 2.66801 26.2134 2.66676H37.8134C39.1485 2.66134 40.4371 3.15689 41.4245 4.05549C42.412 4.95409 43.0265 6.19038 43.1467 7.52009L44.08 17.7334"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiWatchSize32ColorWhite.propTypes = {
  color: PropTypes.string,
};
