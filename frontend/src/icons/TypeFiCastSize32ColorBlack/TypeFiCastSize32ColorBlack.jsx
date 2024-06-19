import PropTypes from "prop-types";
import React from "react";

export const TypeFiCastSize32ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.33331 53.3333H5.35998" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M5.33331 42.9334C7.89569 43.456 10.2478 44.7206 12.097 46.5697C13.9462 48.4189 15.2107 50.771 15.7333 53.3334M5.33331 32.1334C10.7488 32.7357 15.798 35.1629 19.651 39.0158C23.5039 42.8687 25.931 47.918 26.5333 53.3334M5.33331 21.3334V16.0001C5.33331 14.5856 5.89522 13.229 6.89541 12.2288C7.8956 11.2287 9.25216 10.6667 10.6666 10.6667H53.3333C54.7478 10.6667 56.1044 11.2287 57.1045 12.2288C58.1047 13.229 58.6666 14.5856 58.6666 16.0001V48.0001C58.6666 49.4146 58.1047 50.7711 57.1045 51.7713C56.1044 52.7715 54.7478 53.3334 53.3333 53.3334H37.3333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiCastSize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
