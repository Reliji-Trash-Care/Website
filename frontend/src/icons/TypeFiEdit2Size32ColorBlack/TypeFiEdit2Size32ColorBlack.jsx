import PropTypes from "prop-types";
import React from "react";

export const TypeFiEdit2Size32ColorBlack = ({ color = "black", className }) => {
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
        d="M45.3333 8.00009C46.0337 7.29971 46.8652 6.74414 47.7803 6.36509C48.6954 5.98605 49.6762 5.79095 50.6666 5.79095C51.6571 5.79095 52.6379 5.98605 53.553 6.36509C54.4681 6.74414 55.2996 7.29971 56 8.00009C56.7004 8.70048 57.2559 9.53195 57.635 10.447C58.014 11.3621 58.2091 12.3429 58.2091 13.3334C58.2091 14.3239 58.014 15.3047 57.635 16.2198C57.2559 17.1349 56.7004 17.9664 56 18.6668L20 54.6668L5.33331 58.6668L9.33331 44.0001L45.3333 8.00009Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiEdit2Size32ColorBlack.propTypes = {
  color: PropTypes.string,
};
