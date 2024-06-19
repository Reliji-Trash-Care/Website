import PropTypes from "prop-types";
import React from "react";

export const TypeFiThumbsUpSize64ColorBlack = ({ color = "black", className }) => {
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
        d="M18.6666 58.6666H10.6666C9.25216 58.6666 7.8956 58.1047 6.89541 57.1045C5.89522 56.1043 5.33331 54.7477 5.33331 53.3333V34.6666C5.33331 33.2521 5.89522 31.8955 6.89541 30.8954C7.8956 29.8952 9.25216 29.3333 10.6666 29.3333H18.6666M37.3333 23.9999V13.3333C37.3333 11.2115 36.4905 9.17669 34.9902 7.6764C33.4899 6.17611 31.455 5.33325 29.3333 5.33325L18.6666 29.3333V58.6666H48.7466C50.0329 58.6811 51.281 58.2303 52.2611 57.3973C53.2411 56.5642 53.8871 55.405 54.08 54.1333L57.76 30.1333C57.876 29.3689 57.8244 28.5884 57.6089 27.8459C57.3933 27.1034 57.0189 26.4167 56.5116 25.8333C56.0043 25.2499 55.3762 24.7837 54.6708 24.4672C53.9655 24.1506 53.1997 23.9912 52.4266 23.9999H37.3333Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiThumbsUpSize64ColorBlack.propTypes = {
  color: PropTypes.string,
};
