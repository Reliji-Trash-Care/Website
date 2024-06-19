import PropTypes from "prop-types";
import React from "react";

export const TypeFiAlertTriangleSize16ColorWhite = ({ color = "white", className }) => {
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
        d="M10.29 3.85999L1.81999 18C1.64536 18.3024 1.55296 18.6453 1.55198 18.9945C1.551 19.3437 1.64148 19.6871 1.81442 19.9905C1.98735 20.2939 2.23672 20.5467 2.5377 20.7238C2.83868 20.9009 3.18079 20.9962 3.52999 21H20.47C20.8192 20.9962 21.1613 20.9009 21.4623 20.7238C21.7633 20.5467 22.0126 20.2939 22.1856 19.9905C22.3585 19.6871 22.449 19.3437 22.448 18.9945C22.447 18.6453 22.3546 18.3024 22.18 18L13.71 3.85999C13.5317 3.5661 13.2807 3.32311 12.9812 3.15447C12.6817 2.98584 12.3437 2.89725 12 2.89725C11.6563 2.89725 11.3183 2.98584 11.0188 3.15447C10.7193 3.32311 10.4683 3.5661 10.29 3.85999V3.85999Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M12 9V13" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M12 17H12.01" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiAlertTriangleSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
