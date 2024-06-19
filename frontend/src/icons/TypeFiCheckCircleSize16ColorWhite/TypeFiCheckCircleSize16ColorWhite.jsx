import PropTypes from "prop-types";
import React from "react";

export const TypeFiCheckCircleSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10431)">
        <path
          d="M14.6666 7.38668V8.00001C14.6658 9.43763 14.2003 10.8365 13.3395 11.9879C12.4788 13.1393 11.2688 13.9817 9.89022 14.3893C8.5116 14.7969 7.03815 14.7479 5.68963 14.2497C4.3411 13.7515 3.18975 12.8307 2.40729 11.6247C1.62482 10.4187 1.25317 8.99205 1.34776 7.55755C1.44235 6.12305 1.99812 4.75756 2.93217 3.66473C3.86621 2.57189 5.1285 1.81027 6.53077 1.49344C7.93304 1.17662 9.40016 1.32157 10.7133 1.90668"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M14.6667 2.66666L8 9.33999L6 7.33999"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10431">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiCheckCircleSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
