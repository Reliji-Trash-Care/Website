import PropTypes from "prop-types";
import React from "react";

export const TypeFiBatteryChargingSize24ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M61.3333 34.6667V29.3334" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M13.3334 48H8.00002C6.58553 48 5.22898 47.4381 4.22878 46.4379C3.22859 45.4377 2.66669 44.0812 2.66669 42.6667V21.3333C2.66669 19.9188 3.22859 18.5623 4.22878 17.5621C5.22898 16.5619 6.58553 16 8.00002 16H16.5067M40 16H45.3334C46.7478 16 48.1044 16.5619 49.1046 17.5621C50.1048 18.5623 50.6667 19.9188 50.6667 21.3333V42.6667C50.6667 44.0812 50.1048 45.4377 49.1046 46.4379C48.1044 47.4381 46.7478 48 45.3334 48H36.8267"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M29.3334 16L18.6667 32H34.6667L24 48"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiBatteryChargingSize24ColorBlack.propTypes = {
  color: PropTypes.string,
};
