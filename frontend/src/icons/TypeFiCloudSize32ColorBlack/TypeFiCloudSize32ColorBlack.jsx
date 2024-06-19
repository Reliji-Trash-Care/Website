import PropTypes from "prop-types";
import React from "react";

export const TypeFiCloudSize32ColorBlack = ({ color = "black", className }) => {
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
        d="M48 26.6667H44.64C43.6423 22.8027 41.5808 19.296 38.6897 16.5451C35.7986 13.7942 32.1939 11.9094 28.2851 11.1048C24.3763 10.3002 20.3202 10.6082 16.5777 11.9937C12.8352 13.3791 9.55635 15.7866 7.11372 18.9424C4.67108 22.0983 3.16262 25.876 2.75973 29.8464C2.35684 33.8167 3.07569 37.8204 4.83458 41.4026C6.59347 44.9848 9.32189 48.0019 12.7098 50.1109C16.0977 52.2199 20.0093 53.3364 24 53.3334H48C51.5362 53.3334 54.9276 51.9287 57.4281 49.4282C59.9286 46.9277 61.3333 43.5363 61.3333 40.0001C61.3333 36.4639 59.9286 33.0725 57.4281 30.572C54.9276 28.0715 51.5362 26.6667 48 26.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiCloudSize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
