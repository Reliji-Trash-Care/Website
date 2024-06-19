import PropTypes from "prop-types";
import React from "react";

export const TypeFiThermometerSize64ColorBlack = ({ color = "black", className }) => {
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
        d="M18.6667 19.68V4.66668C18.6667 3.78262 18.3155 2.93478 17.6904 2.30965C17.0652 1.68453 16.2174 1.33334 15.3333 1.33334C14.4493 1.33334 13.6014 1.68453 12.9763 2.30965C12.3512 2.93478 12 3.78262 12 4.66668V19.68C10.9297 20.3951 10.1178 21.4355 9.68411 22.6475C9.25044 23.8594 9.21804 25.1787 9.59169 26.4105C9.96534 27.6423 10.7252 28.7213 11.7591 29.4881C12.793 30.2549 14.0461 30.6689 15.3333 30.6689C16.6206 30.6689 17.8737 30.2549 18.9076 29.4881C19.9415 28.7213 20.7014 27.6423 21.075 26.4105C21.4487 25.1787 21.4162 23.8594 20.9826 22.6475C20.5489 21.4355 19.737 20.3951 18.6667 19.68Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiThermometerSize64ColorBlack.propTypes = {
  color: PropTypes.string,
};
