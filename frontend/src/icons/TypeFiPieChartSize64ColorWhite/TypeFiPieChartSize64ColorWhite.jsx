import PropTypes from "prop-types";
import React from "react";

export const TypeFiPieChartSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M28.28 21.1867C27.4317 23.1927 26.105 24.9603 24.4158 26.3351C22.7266 27.7099 20.7263 28.6499 18.5899 29.0731C16.4534 29.4962 14.2459 29.3895 12.1602 28.7624C10.0745 28.1353 8.17415 27.0068 6.62534 25.4756C5.07653 23.9443 3.9264 22.057 3.27549 19.9786C2.62459 17.9002 2.49273 15.694 2.89144 13.5529C3.29016 11.4117 4.20731 9.40085 5.56271 7.69605C6.91811 5.99125 8.67049 4.64444 10.6666 3.77335"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M29.3333 16C29.3333 14.249 28.9885 12.5152 28.3184 10.8975C27.6483 9.27987 26.6662 7.81001 25.4281 6.5719C24.19 5.33378 22.7201 4.35166 21.1024 3.6816C19.4848 3.01153 17.751 2.66666 16 2.66666V16H29.3333Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiPieChartSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
