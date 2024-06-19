import PropTypes from "prop-types";
import React from "react";

export const TypeFiYoutubeSize64ColorBlack = ({ color = "black", className }) => {
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
        d="M60.1066 17.1201C59.7898 15.8545 59.1447 14.6949 58.2363 13.7585C57.328 12.8221 56.1886 12.1419 54.9333 11.7867C50.3466 10.6667 31.9999 10.6667 31.9999 10.6667C31.9999 10.6667 13.6533 10.6667 9.06659 11.8934C7.81125 12.2486 6.67187 12.9287 5.76352 13.8652C4.85517 14.8016 4.21003 15.9612 3.89326 17.2267C3.05383 21.8816 2.64322 26.6036 2.66659 31.3334C2.63667 36.0989 3.04731 40.8569 3.89326 45.5467C4.24249 46.773 4.90208 47.8885 5.80831 48.7854C6.71454 49.6822 7.83678 50.3302 9.06659 50.6667C13.6533 51.8934 31.9999 51.8934 31.9999 51.8934C31.9999 51.8934 50.3466 51.8934 54.9333 50.6667C56.1886 50.3116 57.328 49.6314 58.2363 48.695C59.1447 47.7586 59.7898 46.599 60.1066 45.3334C60.9395 40.7136 61.3501 36.0276 61.3333 31.3334C61.3632 26.568 60.9525 21.8099 60.1066 17.1201V17.1201Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M26 40.0533L41.3333 31.3333L26 22.6133V40.0533Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiYoutubeSize64ColorBlack.propTypes = {
  color: PropTypes.string,
};
