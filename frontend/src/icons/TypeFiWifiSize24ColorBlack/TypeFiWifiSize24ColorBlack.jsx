import PropTypes from "prop-types";
import React from "react";

export const TypeFiWifiSize24ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 20H12.01" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M8.53 16.11C9.5452 15.3887 10.7597 15.0013 12.005 15.0013C13.2503 15.0013 14.4648 15.3887 15.48 16.11"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M5 12.55C6.97656 10.9037 9.46761 10.0021 12.04 10.0021C14.6124 10.0021 17.1034 10.9037 19.08 12.55"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M1.42001 9.00001C4.34244 6.42397 8.10431 5.00266 12 5.00266C15.8957 5.00266 19.6576 6.42397 22.58 9.00001"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiWifiSize24ColorBlack.propTypes = {
  color: PropTypes.string,
};
