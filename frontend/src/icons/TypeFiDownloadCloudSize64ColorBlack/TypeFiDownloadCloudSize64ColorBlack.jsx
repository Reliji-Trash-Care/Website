import PropTypes from "prop-types";
import React from "react";

export const TypeFiDownloadCloudSize64ColorBlack = ({ color = "black", className }) => {
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
        d="M21.3334 45.3333L32 55.9999L42.6667 45.3333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M32 32V56" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M55.6799 48.2399C57.9983 46.6096 59.7368 44.283 60.6433 41.5976C61.5498 38.9123 61.577 36.0079 60.7209 33.3061C59.8649 30.6042 58.1702 28.2455 55.8827 26.572C53.5953 24.8986 50.8341 23.9977 47.9999 23.9999H44.6399C43.8379 20.8742 42.3372 17.9712 40.2509 15.5094C38.1645 13.0477 35.5469 11.0912 32.5951 9.78749C29.6433 8.48374 26.4341 7.86662 23.2093 7.98259C19.9844 8.09856 16.8279 8.9446 13.9774 10.457C11.1268 11.9694 8.65648 14.1088 6.75238 16.7141C4.84828 19.3194 3.56002 22.3227 2.98458 25.4979C2.40914 28.6731 2.56151 31.9375 3.43023 35.0453C4.29895 38.1531 5.86137 41.0233 7.99988 43.4399"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiDownloadCloudSize64ColorBlack.propTypes = {
  color: PropTypes.string,
};
