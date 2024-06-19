import PropTypes from "prop-types";
import React from "react";

export const AddOutline116 = ({ color = "#112211", className }) => {
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
        d="M12 5.25V18.75M18.75 12H5.25"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

AddOutline116.propTypes = {
  color: PropTypes.string,
};
