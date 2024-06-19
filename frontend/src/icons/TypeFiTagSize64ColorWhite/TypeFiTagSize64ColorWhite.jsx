import PropTypes from "prop-types";
import React from "react";

export const TypeFiTagSize64ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.4533 17.88L17.8933 27.44C17.6457 27.6879 17.3516 27.8846 17.0278 28.0188C16.7041 28.153 16.3571 28.2221 16.0067 28.2221C15.6562 28.2221 15.3092 28.153 14.9855 28.0188C14.6618 27.8846 14.3677 27.6879 14.12 27.44L2.66666 16V2.66666H16L27.4533 14.12C27.95 14.6196 28.2288 15.2955 28.2288 16C28.2288 16.7045 27.95 17.3804 27.4533 17.88V17.88Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M9.33334 9.33334H9.34668" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiTagSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
