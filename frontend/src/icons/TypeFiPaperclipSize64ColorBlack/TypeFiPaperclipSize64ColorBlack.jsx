import PropTypes from "prop-types";
import React from "react";

export const TypeFiPaperclipSize64ColorBlack = ({ color = "black", className }) => {
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
        d="M28.5867 14.7333L16.3334 26.9866C14.8322 28.4878 12.7963 29.3311 10.6734 29.3311C8.55045 29.3311 6.51449 28.4878 5.01336 26.9866C3.51224 25.4855 2.66891 23.4496 2.66891 21.3266C2.66891 19.2037 3.51224 17.1678 5.01336 15.6666L17.2667 3.41331C18.2674 2.41256 19.6248 1.85034 21.04 1.85034C22.4553 1.85034 23.8126 2.41256 24.8134 3.41331C25.8141 4.41406 26.3763 5.77137 26.3763 7.18664C26.3763 8.60192 25.8141 9.95922 24.8134 10.96L12.5467 23.2133C12.0463 23.7137 11.3677 23.9948 10.66 23.9948C9.95239 23.9948 9.27374 23.7137 8.77336 23.2133C8.27299 22.7129 7.99188 22.0343 7.99188 21.3266C7.99188 20.619 8.27299 19.9404 8.77336 19.44L20.0934 8.13331"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiPaperclipSize64ColorBlack.propTypes = {
  color: PropTypes.string,
};
