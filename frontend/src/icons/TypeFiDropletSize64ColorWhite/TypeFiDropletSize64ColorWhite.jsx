import PropTypes from "prop-types";
import React from "react";

export const TypeFiDropletSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M7.99999 1.79333L11.7733 5.56667C12.5195 6.31241 13.0278 7.26271 13.2339 8.29737C13.44 9.33203 13.3346 10.4046 12.931 11.3793C12.5274 12.3541 11.8439 13.1872 10.9667 13.7734C10.0896 14.3596 9.0583 14.6725 8.00332 14.6725C6.94834 14.6725 5.91705 14.3596 5.03991 13.7734C4.16278 13.1872 3.47919 12.3541 3.07563 11.3793C2.67206 10.4046 2.56665 9.33203 2.77272 8.29737C2.97879 7.26271 3.48709 6.31241 4.23332 5.56667L7.99999 1.79333Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiDropletSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
