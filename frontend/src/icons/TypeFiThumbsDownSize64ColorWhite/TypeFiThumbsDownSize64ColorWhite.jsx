import PropTypes from "prop-types";
import React from "react";

export const TypeFiThumbsDownSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M45.3334 5.33321H52.4534C53.9626 5.30652 55.4291 5.8349 56.5745 6.81806C57.7199 7.80121 58.4644 9.1707 58.6667 10.6665V29.3332C58.4644 30.8291 57.7199 32.1985 56.5745 33.1817C55.4291 34.1649 53.9626 34.6932 52.4534 34.6665H45.3334M26.6667 39.9999V50.6666C26.6667 52.7883 27.5096 54.8231 29.0099 56.3234C30.5102 57.8237 32.545 58.6666 34.6667 58.6666L45.3334 34.6665V5.33321H15.2534C13.9672 5.31867 12.719 5.76946 11.739 6.60253C10.7589 7.43559 10.1129 8.59479 9.92005 9.86654L6.24005 33.8665C6.12403 34.6309 6.17559 35.4114 6.39114 36.1539C6.6067 36.8964 6.98111 37.5831 7.48843 38.1665C7.99574 38.7499 8.62384 39.2161 9.32919 39.5326C10.0345 39.8492 10.8003 40.0086 11.5734 39.9999H26.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiThumbsDownSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
