import PropTypes from "prop-types";
import React from "react";

export const TypeFiEyeOffSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M26.4 11.3068C28.2355 10.8771 30.1148 10.6624 32 10.6668C50.6667 10.6668 61.3333 32.0001 61.3333 32.0001C59.7146 35.0284 57.7841 37.8794 55.5733 40.5068M37.6533 37.6535C36.9209 38.4394 36.0377 39.0699 35.0564 39.5071C34.0751 39.9444 33.0157 40.1795 31.9416 40.1984C30.8674 40.2174 29.8004 40.0198 28.8043 39.6174C27.8081 39.2151 26.9032 38.6162 26.1436 37.8565C25.3839 37.0969 24.785 36.192 24.3827 35.1958C23.9803 34.1997 23.7827 33.1327 23.8017 32.0585C23.8206 30.9844 24.0557 29.925 24.493 28.9437C24.9302 27.9624 25.5607 27.0792 26.3467 26.3468M47.84 47.8401C43.2816 51.3148 37.7309 53.2398 32 53.3335C13.3333 53.3335 2.66666 32.0001 2.66666 32.0001C5.9837 25.8185 10.5844 20.4177 16.16 16.1601L47.84 47.8401Z"
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

TypeFiEyeOffSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
