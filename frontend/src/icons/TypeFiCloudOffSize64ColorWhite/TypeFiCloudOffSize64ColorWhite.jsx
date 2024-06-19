import PropTypes from "prop-types";
import React from "react";

export const TypeFiCloudOffSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M60.2933 45.2001C61.1525 43.1716 61.4956 40.9618 61.2921 38.7682C61.0886 36.5747 60.3447 34.4657 59.127 32.6299C57.9092 30.7941 56.2556 29.2886 54.3139 28.248C52.3722 27.2074 50.2029 26.6641 48 26.6667H44.64C43.5514 22.38 41.1575 18.5376 37.7894 15.6712C34.4213 12.8047 30.2456 11.0559 25.84 10.6667M13.3333 13.3334C9.16817 15.6365 5.89279 19.2662 4.0282 23.6452C2.16361 28.0242 1.81691 32.9009 3.04324 37.4997C4.26957 42.0984 6.9985 46.155 10.7959 49.0241C14.5933 51.8932 19.2411 53.4101 24 53.3334H48C49.546 53.3316 51.08 53.0609 52.5333 52.5334"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M2.66666 2.66675L61.3333 61.3334"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiCloudOffSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
