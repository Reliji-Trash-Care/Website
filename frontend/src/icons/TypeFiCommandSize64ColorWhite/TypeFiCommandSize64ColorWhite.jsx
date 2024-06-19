/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypeFiCommandSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M48 8C45.8783 8 43.8434 8.84286 42.3431 10.3431C40.8429 11.8434 40 13.8783 40 16V48C40 50.1217 40.8429 52.1566 42.3431 53.6569C43.8434 55.1571 45.8783 56 48 56C50.1217 56 52.1566 55.1571 53.6569 53.6569C55.1571 52.1566 56 50.1217 56 48C56 45.8783 55.1571 43.8434 53.6569 42.3431C52.1566 40.8429 50.1217 40 48 40H16C13.8783 40 11.8434 40.8429 10.3431 42.3431C8.84286 43.8434 8 45.8783 8 48C8 50.1217 8.84286 52.1566 10.3431 53.6569C11.8434 55.1571 13.8783 56 16 56C18.1217 56 20.1566 55.1571 21.6569 53.6569C23.1571 52.1566 24 50.1217 24 48V16C24 13.8783 23.1571 11.8434 21.6569 10.3431C20.1566 8.84286 18.1217 8 16 8C13.8783 8 11.8434 8.84286 10.3431 10.3431C8.84286 11.8434 8 13.8783 8 16C8 18.1217 8.84286 20.1566 10.3431 21.6569C11.8434 23.1571 13.8783 24 16 24H48C50.1217 24 52.1566 23.1571 53.6569 21.6569C55.1571 20.1566 56 18.1217 56 16C56 13.8783 55.1571 11.8434 53.6569 10.3431C52.1566 8.84286 50.1217 8 48 8Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiCommandSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};