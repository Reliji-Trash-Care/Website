import PropTypes from "prop-types";
import React from "react";

export const TypeFiCodesandboxSize64ColorBlack = ({ color = "black", className }) => {
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
        d="M56 42.6666V21.3332C55.999 20.398 55.7522 19.4794 55.2841 18.6697C54.8161 17.86 54.1433 17.1875 53.3333 16.7199L34.6667 6.05325C33.8559 5.58515 32.9362 5.33871 32 5.33871C31.0638 5.33871 30.1441 5.58515 29.3333 6.05325L10.6667 16.7199C9.8567 17.1875 9.18395 17.86 8.7159 18.6697C8.24785 19.4794 8.00096 20.398 8 21.3332V42.6666C8.00096 43.6018 8.24785 44.5204 8.7159 45.3301C9.18395 46.1399 9.8567 46.8123 10.6667 47.2799L29.3333 57.9466C30.1441 58.4147 31.0638 58.6611 32 58.6611C32.9362 58.6611 33.8559 58.4147 34.6667 57.9466L53.3333 47.2799C54.1433 46.8123 54.8161 46.1399 55.2841 45.3301C55.7522 44.5204 55.999 43.6018 56 42.6666Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M56 32L44 38.9333V52.7733" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M20 52.7733V38.9333L8 32" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M8.72 18.5598L32 32.0265L55.28 18.5598"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M32 58.88V32" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M20 11.2266L32 18.1599L44 11.2266"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiCodesandboxSize64ColorBlack.propTypes = {
  color: PropTypes.string,
};
