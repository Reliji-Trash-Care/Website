import PropTypes from "prop-types";
import React from "react";

export const TypeFiFacebookSize32ColorBlack = ({ color = "black", className }) => {
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
        d="M48 5.33325H40C36.4638 5.33325 33.0724 6.73801 30.5719 9.23849C28.0714 11.739 26.6667 15.1304 26.6667 18.6666V26.6666H18.6667V37.3333H26.6667V58.6666H37.3334V37.3333H45.3334L48 26.6666H37.3334V18.6666C37.3334 17.9593 37.6143 17.2811 38.1144 16.781C38.6145 16.2809 39.2928 15.9999 40 15.9999H48V5.33325Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiFacebookSize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
