import PropTypes from "prop-types";
import React from "react";

export const TypeFiRotateCwSize64ColorBlack = ({ color = "black", className }) => {
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
        d="M30.6667 5.33334V13.3333H22.6667"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M27.32 20C26.4533 22.4532 24.8127 24.5583 22.6455 25.998C20.4784 27.4377 17.9019 28.1341 15.3046 27.9821C12.7072 27.8302 10.2295 26.8382 8.24501 25.1556C6.26048 23.473 4.87657 21.191 4.30182 18.6534C3.72708 16.1159 3.99264 13.4603 5.05849 11.0868C6.12433 8.71328 7.93272 6.75049 10.2111 5.49419C12.4896 4.23789 15.1146 3.75614 17.6906 4.12153C20.2667 4.48692 22.6542 5.67966 24.4933 7.52001L30.6667 13.3333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiRotateCwSize64ColorBlack.propTypes = {
  color: PropTypes.string,
};
