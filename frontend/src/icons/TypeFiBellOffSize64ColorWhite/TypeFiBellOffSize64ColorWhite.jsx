import PropTypes from "prop-types";
import React from "react";

export const TypeFiBellOffSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M36.6134 56C36.1445 56.8082 35.4716 57.4791 34.662 57.9454C33.8523 58.4118 32.9344 58.6572 32 58.6572C31.0657 58.6572 30.1477 58.4118 29.3381 57.9454C28.5284 57.4791 27.8555 56.8082 27.3867 56"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M49.68 34.6666C48.4937 30.3237 47.9281 25.8347 48 21.3333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M16.6933 16.6934C16.23 18.1963 15.9963 19.7606 16 21.3334C16 40 8 45.3334 8 45.3334H45.3333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M48 21.3334C48.0043 18.4349 47.2212 15.5897 45.7342 13.1017C44.2473 10.6136 42.1124 8.57625 39.5577 7.20714C37.0029 5.83803 34.1242 5.18862 31.2291 5.32828C28.3339 5.46794 25.5311 6.39143 23.12 8.0001"
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

TypeFiBellOffSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
