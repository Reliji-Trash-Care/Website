import PropTypes from "prop-types";
import React from "react";

export const TypeFiThumbsDownSize32ColorBlack = ({ color = "black", className }) => {
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
        d="M22.6667 2.66671H26.2267C26.9813 2.65337 27.7145 2.91756 28.2872 3.40914C28.8599 3.90071 29.2322 4.58546 29.3333 5.33338V14.6667C29.2322 15.4146 28.8599 16.0994 28.2872 16.591C27.7145 17.0825 26.9813 17.3467 26.2267 17.3334H22.6667M13.3333 20V25.3334C13.3333 26.3942 13.7548 27.4117 14.5049 28.1618C15.2551 28.912 16.2725 29.3334 17.3333 29.3334L22.6667 17.3334V2.66671H7.62668C6.98357 2.65944 6.35951 2.88484 5.86947 3.30137C5.37943 3.7179 5.05644 4.2975 4.96001 4.93338L3.12001 16.9334C3.062 17.3156 3.08778 17.7058 3.19556 18.077C3.30334 18.4483 3.49054 18.7917 3.7442 19.0834C3.99786 19.3751 4.3119 19.6081 4.66458 19.7664C5.01726 19.9247 5.40013 20.0044 5.78668 20H13.3333Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiThumbsDownSize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
