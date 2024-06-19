import PropTypes from "prop-types";
import React from "react";

export const TypeFiSpeakerSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1.33334H3.99999C3.26361 1.33334 2.66666 1.9303 2.66666 2.66668V13.3333C2.66666 14.0697 3.26361 14.6667 3.99999 14.6667H12C12.7364 14.6667 13.3333 14.0697 13.3333 13.3333V2.66668C13.3333 1.9303 12.7364 1.33334 12 1.33334Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M8.00001 12C9.47277 12 10.6667 10.8061 10.6667 9.33332C10.6667 7.86056 9.47277 6.66666 8.00001 6.66666C6.52725 6.66666 5.33334 7.86056 5.33334 9.33332C5.33334 10.8061 6.52725 12 8.00001 12Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M8 4H8.00667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiSpeakerSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
