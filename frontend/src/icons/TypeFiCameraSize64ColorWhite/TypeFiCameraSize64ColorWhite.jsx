import PropTypes from "prop-types";
import React from "react";

export const TypeFiCameraSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M30.6667 25.3333C30.6667 26.0406 30.3857 26.7189 29.8856 27.219C29.3855 27.719 28.7073 28 28 28H4.00001C3.29277 28 2.61449 27.719 2.11439 27.219C1.6143 26.7189 1.33334 26.0406 1.33334 25.3333V10.6667C1.33334 9.95942 1.6143 9.28115 2.11439 8.78105C2.61449 8.28095 3.29277 8 4.00001 8H9.33334L12 4H20L22.6667 8H28C28.7073 8 29.3855 8.28095 29.8856 8.78105C30.3857 9.28115 30.6667 9.95942 30.6667 10.6667V25.3333Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M16 22.6667C18.9455 22.6667 21.3333 20.2789 21.3333 17.3333C21.3333 14.3878 18.9455 12 16 12C13.0545 12 10.6667 14.3878 10.6667 17.3333C10.6667 20.2789 13.0545 22.6667 16 22.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiCameraSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
