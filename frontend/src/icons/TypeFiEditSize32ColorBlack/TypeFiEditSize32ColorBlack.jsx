import PropTypes from "prop-types";
import React from "react";

export const TypeFiEditSize32ColorBlack = ({ color = "black", className }) => {
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
        d="M29.3333 10.6667H10.6666C9.25216 10.6667 7.8956 11.2287 6.89541 12.2288C5.89522 13.229 5.33331 14.5856 5.33331 16.0001V53.3334C5.33331 54.7479 5.89522 56.1045 6.89541 57.1047C7.8956 58.1048 9.25216 58.6667 10.6666 58.6667H48C49.4145 58.6667 50.771 58.1048 51.7712 57.1047C52.7714 56.1045 53.3333 54.7479 53.3333 53.3334V34.6667"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M49.3333 6.66665C50.3942 5.60578 51.833 5.0098 53.3333 5.0098C54.8336 5.0098 56.2724 5.60578 57.3333 6.66665C58.3942 7.72752 58.9902 9.16636 58.9902 10.6667C58.9902 12.1669 58.3942 13.6058 57.3333 14.6667L32 40L21.3333 42.6667L24 32L49.3333 6.66665Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiEditSize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
