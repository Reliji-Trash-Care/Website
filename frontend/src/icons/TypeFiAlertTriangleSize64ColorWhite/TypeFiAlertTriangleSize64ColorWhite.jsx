import PropTypes from "prop-types";
import React from "react";

export const TypeFiAlertTriangleSize64ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.44 10.2932L4.85336 47.9998C4.38767 48.8063 4.14127 49.7206 4.13866 50.6519C4.13605 51.5832 4.37733 52.4989 4.8385 53.3079C5.29966 54.117 5.96463 54.7912 6.76725 55.2634C7.56987 55.7357 8.48216 55.9896 9.41336 55.9998H54.5867C55.5179 55.9896 56.4302 55.7357 57.2328 55.2634C58.0354 54.7912 58.7004 54.117 59.1616 53.3079C59.6227 52.4989 59.864 51.5832 59.8614 50.6519C59.8588 49.7206 59.6124 48.8063 59.1467 47.9998L36.56 10.2932C36.0846 9.50946 35.4153 8.8615 34.6165 8.4118C33.8178 7.96211 32.9167 7.72586 32 7.72586C31.0834 7.72586 30.1822 7.96211 29.3835 8.4118C28.5848 8.8615 27.9154 9.50946 27.44 10.2932V10.2932Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M32 24V34.6667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M32 45.3333H32.0267" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiAlertTriangleSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
