import PropTypes from "prop-types";
import React from "react";

export const TypeFiPowerSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M12.24 4.42667C13.0789 5.26586 13.6502 6.33496 13.8815 7.49879C14.1129 8.66263 13.994 9.86893 13.5398 10.9652C13.0856 12.0614 12.3165 12.9984 11.3299 13.6576C10.3432 14.3168 9.18328 14.6686 7.99668 14.6686C6.81007 14.6686 5.65011 14.3168 4.66346 13.6576C3.67681 12.9984 2.90777 12.0614 2.45359 10.9652C1.9994 9.86893 1.88047 8.66263 2.11182 7.49879C2.34317 6.33496 2.91442 5.26586 3.75334 4.42667"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M8 1.33334V8.00001" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiPowerSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
