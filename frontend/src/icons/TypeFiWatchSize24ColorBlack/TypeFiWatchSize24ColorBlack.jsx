import PropTypes from "prop-types";
import React from "react";

export const TypeFiWatchSize24ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M12 9V12L13.5 13.5" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M16.51 17.35L16.16 21.18C16.115 21.6786 15.8845 22.1422 15.5142 22.4792C15.1439 22.8162 14.6607 23.002 14.16 23H9.83001C9.32934 23.002 8.84612 22.8162 8.47581 22.4792C8.10551 22.1422 7.87507 21.6786 7.83001 21.18L7.48001 17.35M7.49001 6.64999L7.84001 2.81999C7.88492 2.32306 8.11394 1.86087 8.48213 1.52414C8.85031 1.18741 9.33106 1.00046 9.83001 0.999986H14.18C14.6807 0.997954 15.1639 1.18378 15.5342 1.52076C15.9045 1.85773 16.135 2.32134 16.18 2.81999L16.53 6.64999"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiWatchSize24ColorBlack.propTypes = {
  color: PropTypes.string,
};
