import PropTypes from "prop-types";
import React from "react";

export const TypeFiHeadphonesSize32ColorBlack = ({ color = "black", className }) => {
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
        d="M8 48V32C8 25.6348 10.5286 19.5303 15.0294 15.0294C19.5303 10.5286 25.6348 8 32 8C38.3652 8 44.4697 10.5286 48.9706 15.0294C53.4714 19.5303 56 25.6348 56 32V48"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M56 50.6666C56 52.0811 55.4381 53.4376 54.4379 54.4378C53.4377 55.438 52.0812 55.9999 50.6667 55.9999H48C46.5855 55.9999 45.229 55.438 44.2288 54.4378C43.2286 53.4376 42.6667 52.0811 42.6667 50.6666V42.6666C42.6667 41.2521 43.2286 39.8955 44.2288 38.8953C45.229 37.8952 46.5855 37.3333 48 37.3333H56V50.6666ZM8 50.6666C8 52.0811 8.5619 53.4376 9.5621 54.4378C10.5623 55.438 11.9188 55.9999 13.3333 55.9999H16C17.4145 55.9999 18.771 55.438 19.7712 54.4378C20.7714 53.4376 21.3333 52.0811 21.3333 50.6666V42.6666C21.3333 41.2521 20.7714 39.8955 19.7712 38.8953C18.771 37.8952 17.4145 37.3333 16 37.3333H8V50.6666Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiHeadphonesSize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
