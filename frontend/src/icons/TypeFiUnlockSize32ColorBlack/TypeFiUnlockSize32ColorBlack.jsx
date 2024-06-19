import PropTypes from "prop-types";
import React from "react";

export const TypeFiUnlockSize32ColorBlack = ({ color = "black", className }) => {
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
        d="M12.6667 7.33334H3.33333C2.59695 7.33334 2 7.9303 2 8.66668V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V8.66668C14 7.9303 13.403 7.33334 12.6667 7.33334Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M4.66666 7.33334V4.66668C4.66583 3.84004 4.97218 3.04259 5.52624 2.42912C6.0803 1.81566 6.84254 1.42995 7.66499 1.34687C8.48744 1.26379 9.31142 1.48928 9.97697 1.97955C10.6425 2.46983 11.1022 3.18991 11.2667 4.00001"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiUnlockSize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
