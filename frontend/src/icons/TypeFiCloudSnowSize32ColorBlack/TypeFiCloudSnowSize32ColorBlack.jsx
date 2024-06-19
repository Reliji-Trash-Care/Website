import PropTypes from "prop-types";
import React from "react";

export const TypeFiCloudSnowSize32ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M32 58.6667H32.0267" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M42.6667 53.3333H42.6933" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M21.3333 53.3333H21.36" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M32 48H32.0267" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M53.3333 46.8799C56.1366 45.6522 58.4322 43.4974 59.8348 40.7774C61.2374 38.0573 61.6616 34.9375 61.0362 31.9417C60.4108 28.9459 58.7738 26.2565 56.4001 24.3248C54.0263 22.3931 51.0603 21.3368 48 21.3332H44.64C43.7947 18.06 42.1836 15.0344 39.9395 12.5061C37.6953 9.97765 34.8825 8.01879 31.7327 6.79091C28.5829 5.56303 25.1864 5.10129 21.8231 5.44377C18.4598 5.78624 15.2261 6.92311 12.3885 8.76067C9.55083 10.5982 7.19053 13.0839 5.5021 16.0127C3.81368 18.9415 2.84548 22.2297 2.67732 25.6062C2.50916 28.9827 3.14585 32.3508 4.5349 35.4329C5.92396 38.515 8.02561 41.2228 10.6666 43.3332"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M42.6667 42.6667H42.6933" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M21.3333 42.6667H21.36" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiCloudSnowSize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
