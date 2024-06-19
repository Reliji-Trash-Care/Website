import PropTypes from "prop-types";
import React from "react";

export const TypeFiCheckCircleSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M58.6667 29.5468V32.0002C58.6634 37.7506 56.8013 43.346 53.3582 47.9517C49.9151 52.5574 45.0754 55.9268 39.561 57.5572C34.0465 59.1877 28.1527 58.9919 22.7586 56.9991C17.3645 55.0062 12.7591 51.3231 9.62924 46.499C6.49939 41.6749 5.01279 35.9683 5.39115 30.2303C5.76951 24.4923 7.99256 19.0304 11.7288 14.659C15.465 10.2877 20.5141 7.24119 26.1232 5.97389C31.7323 4.70659 37.6007 5.2864 42.8534 7.62684"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M58.6667 10.6667L32 37.3601L24 29.3601"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiCheckCircleSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
