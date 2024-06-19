import PropTypes from "prop-types";
import React from "react";

export const TypeFiMicOffSize64ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21.3333 61.3333H42.6667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M2.66666 2.66675L61.3333 61.3334"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M40 24.9065V10.6665C40.002 8.68258 39.2667 6.76869 37.937 5.29637C36.6073 3.82405 34.7779 2.89835 32.804 2.69897C30.8301 2.49959 28.8526 3.04075 27.2552 4.21741C25.6579 5.39406 24.5548 7.12226 24.16 9.06651M24 23.9998V31.9998C24.0014 33.5811 24.4713 35.1264 25.3505 36.4407C26.2296 37.755 27.4785 38.7793 28.9395 39.3842C30.4004 39.9892 32.0079 40.1476 33.5588 39.8395C35.1097 39.5314 36.5345 38.7706 37.6533 37.6532L24 23.9998Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M45.3334 45.2001C42.7301 47.8572 39.3924 49.676 35.7483 50.423C32.1043 51.1701 28.3201 50.8113 24.8813 49.3928C21.4426 47.9743 18.506 45.5608 16.4485 42.4618C14.3909 39.3629 13.3061 35.7198 13.3334 32.0001V26.6667M50.6667 26.6667V32.0001C50.6657 33.0999 50.5676 34.1975 50.3734 35.2801"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M32 50.6667V61.3334" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiMicOffSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
