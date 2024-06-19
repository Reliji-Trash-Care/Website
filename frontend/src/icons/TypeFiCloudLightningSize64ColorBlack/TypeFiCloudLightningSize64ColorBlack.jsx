import PropTypes from "prop-types";
import React from "react";

export const TypeFiCloudLightningSize64ColorBlack = ({ color = "black", className }) => {
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
        d="M50.6667 45.0668C53.9071 44.4089 56.7875 42.5703 58.7486 39.9081C60.7096 37.2459 61.6116 33.95 61.2793 30.6602C60.947 27.3704 59.4041 24.3214 56.9503 22.1052C54.4964 19.8889 51.3066 18.6635 48.0001 18.6668H44.6401C43.7566 15.2464 42.0375 12.0988 39.6371 9.5068C37.2368 6.91479 34.2303 4.95945 30.8876 3.81634C27.5449 2.67322 23.9707 2.37812 20.4857 2.95752C17.0008 3.53692 13.7144 4.97269 10.9214 7.13593C8.12844 9.29916 5.91639 12.1221 4.48388 15.3514C3.05137 18.5807 2.44323 22.1151 2.71407 25.6375C2.9849 29.1598 4.12623 32.5598 6.03558 35.5321C7.94494 38.5044 10.5625 40.956 13.6534 42.6668"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M34.6667 29.3333L24 45.3332H40L29.3333 61.3332"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiCloudLightningSize64ColorBlack.propTypes = {
  color: PropTypes.string,
};
