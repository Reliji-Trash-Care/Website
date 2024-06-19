import PropTypes from "prop-types";
import React from "react";

export const TypeFiBoldSize24ColorWhite = ({ color = "white", className }) => {
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
        d="M16 32H40C42.829 32 45.5421 33.1238 47.5425 35.1242C49.5429 37.1246 50.6667 39.8377 50.6667 42.6667C50.6667 45.4956 49.5429 48.2087 47.5425 50.2091C45.5421 52.2095 42.829 53.3333 40 53.3333H16V32Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M16 10.6667H37.3333C40.1623 10.6667 42.8754 11.7906 44.8758 13.7909C46.8762 15.7913 48 18.5044 48 21.3334C48 24.1624 46.8762 26.8755 44.8758 28.8759C42.8754 30.8763 40.1623 32.0001 37.3333 32.0001H16V10.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiBoldSize24ColorWhite.propTypes = {
  color: PropTypes.string,
};
