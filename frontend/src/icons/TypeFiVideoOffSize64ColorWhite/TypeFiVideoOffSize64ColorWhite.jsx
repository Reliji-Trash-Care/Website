import PropTypes from "prop-types";
import React from "react";

export const TypeFiVideoOffSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M28.4267 13.3333H37.3333C38.7478 13.3333 40.1044 13.8952 41.1046 14.8953C42.1047 15.8955 42.6667 17.2521 42.6667 18.6666V27.5733L45.3333 30.2399L61.3333 18.6666V45.3333M42.6667 42.6666V45.3333C42.6667 46.7477 42.1047 48.1043 41.1046 49.1045C40.1044 50.1047 38.7478 50.6666 37.3333 50.6666H7.99999C6.5855 50.6666 5.22895 50.1047 4.22875 49.1045C3.22856 48.1043 2.66666 46.7477 2.66666 45.3333V18.6666C2.66666 17.2521 3.22856 15.8955 4.22875 14.8953C5.22895 13.8952 6.5855 13.3333 7.99999 13.3333H13.3333L42.6667 42.6666Z"
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

TypeFiVideoOffSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
