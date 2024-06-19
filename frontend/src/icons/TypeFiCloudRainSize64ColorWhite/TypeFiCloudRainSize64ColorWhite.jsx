import PropTypes from "prop-types";
import React from "react";

export const TypeFiCloudRainSize64ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M42.6667 34.6667V56.0001" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M21.3333 34.6667V56.0001" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M32 40V61.3333" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M53.3333 44.2132C56.1366 42.9854 58.4323 40.8307 59.8349 38.1106C61.2375 35.3906 61.6617 32.2708 61.0362 29.275C60.4108 26.2792 58.7738 23.5897 56.4001 21.6581C54.0264 19.7264 51.0604 18.6701 48 18.6665H44.64C43.7947 15.3932 42.1836 12.3677 39.9395 9.8393C37.6954 7.31091 34.8825 5.35204 31.7327 4.12416C28.5829 2.89628 25.1864 2.43455 21.8231 2.77702C18.4599 3.11949 15.2261 4.25636 12.3885 6.09392C9.55086 7.93149 7.19056 10.4171 5.50213 13.346C3.81371 16.2748 2.84551 19.563 2.67735 22.9394C2.50919 26.3159 3.14588 29.684 4.53493 32.7661C5.92399 35.8482 8.02564 38.5561 10.6667 40.6665"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiCloudRainSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
