import PropTypes from "prop-types";
import React from "react";

export const TypeFiUserPlusSize32ColorBlack = ({ color = "black", className }) => {
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
        d="M42.6667 56V50.6667C42.6667 47.8377 41.5429 45.1246 39.5425 43.1242C37.5421 41.1238 34.829 40 32 40H13.3334C10.5044 40 7.79127 41.1238 5.79088 43.1242C3.79049 45.1246 2.66669 47.8377 2.66669 50.6667V56"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M53.3333 21.3333V37.3333" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M61.3333 29.3333H45.3333" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M22.6667 29.3333C28.5577 29.3333 33.3333 24.5577 33.3333 18.6667C33.3333 12.7756 28.5577 8 22.6667 8C16.7756 8 12 12.7756 12 18.6667C12 24.5577 16.7756 29.3333 22.6667 29.3333Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiUserPlusSize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
