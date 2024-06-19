import PropTypes from "prop-types";
import React from "react";

export const TypeFiCoffeeSize32ColorWhite = ({ color = "white", className }) => {
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
        d="M24 10.6667H25.3333C26.7478 10.6667 28.1044 11.2286 29.1046 12.2288C30.1048 13.2289 30.6667 14.5855 30.6667 16C30.6667 17.4145 30.1048 18.771 29.1046 19.7712C28.1044 20.7714 26.7478 21.3333 25.3333 21.3333H24"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M2.66666 10.6667H24V22.6667C24 24.0811 23.4381 25.4377 22.4379 26.4379C21.4377 27.4381 20.0811 28 18.6667 28H7.99999C6.5855 28 5.22895 27.4381 4.22875 26.4379C3.22856 25.4377 2.66666 24.0811 2.66666 22.6667V10.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M18.6667 1.33334V5.33334" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M13.3333 1.33334V5.33334" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M8 1.33334V5.33334" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiCoffeeSize32ColorWhite.propTypes = {
  color: PropTypes.string,
};
