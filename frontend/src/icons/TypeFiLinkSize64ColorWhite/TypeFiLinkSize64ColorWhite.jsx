import PropTypes from "prop-types";
import React from "react";

export const TypeFiLinkSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M26.6667 34.6667C27.8119 36.1977 29.2729 37.4645 30.9508 38.3812C32.6286 39.2979 34.484 39.843 36.3911 39.9796C38.2981 40.1161 40.2122 39.841 42.0036 39.1728C43.7949 38.5045 45.4216 37.4589 46.7733 36.1067L54.7733 28.1067C57.2021 25.592 58.546 22.224 58.5156 18.728C58.4853 15.232 57.083 11.8879 54.6109 9.41577C52.1388 6.94366 48.7946 5.54141 45.2987 5.51103C41.8027 5.48065 38.4347 6.82458 35.92 9.25335L31.3333 13.8134"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M37.3333 29.3333C36.1881 27.8023 34.7271 26.5355 33.0492 25.6188C31.3714 24.7021 29.516 24.157 27.6089 24.0204C25.7019 23.8838 23.7878 24.159 21.9964 24.8272C20.2051 25.4955 18.5784 26.5411 17.2267 27.8933L9.22668 35.8933C6.79791 38.408 5.45398 41.776 5.48436 45.272C5.51474 48.768 6.91699 52.1121 9.3891 54.5842C11.8612 57.0563 15.2054 58.4586 18.7013 58.489C22.1973 58.5193 25.5653 57.1754 28.08 54.7466L32.64 50.1866"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiLinkSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
