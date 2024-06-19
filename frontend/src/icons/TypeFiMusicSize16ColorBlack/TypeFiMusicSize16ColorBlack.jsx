import PropTypes from "prop-types";
import React from "react";

export const TypeFiMusicSize16ColorBlack = ({ color = "black", className }) => {
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
        d="M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M6 12V3.33333L14 2V10.6667"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M12 12.6667C13.1046 12.6667 14 11.7712 14 10.6667C14 9.56209 13.1046 8.66666 12 8.66666C10.8954 8.66666 10 9.56209 10 10.6667C10 11.7712 10.8954 12.6667 12 12.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiMusicSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
