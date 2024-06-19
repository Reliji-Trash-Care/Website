import PropTypes from "prop-types";
import React from "react";

export const TypeFiHardDriveSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.6667 8H1.33334" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M3.63334 3.40666L1.33334 7.99999V12C1.33334 12.3536 1.47382 12.6927 1.72387 12.9428C1.97392 13.1928 2.31305 13.3333 2.66668 13.3333H13.3333C13.687 13.3333 14.0261 13.1928 14.2762 12.9428C14.5262 12.6927 14.6667 12.3536 14.6667 12V7.99999L12.3667 3.40666C12.2563 3.18451 12.0861 2.99757 11.8753 2.86684C11.6645 2.73612 11.4214 2.66679 11.1733 2.66666H4.82668C4.57862 2.66679 4.33552 2.73612 4.12471 2.86684C3.91389 2.99757 3.74373 3.18451 3.63334 3.40666V3.40666Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M6.66666 10.6667H6.67332" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M4 10.6667H4.00667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiHardDriveSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
