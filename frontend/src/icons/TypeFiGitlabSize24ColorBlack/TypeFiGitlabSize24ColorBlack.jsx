import PropTypes from "prop-types";
import React from "react";

export const TypeFiGitlabSize24ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_4972)">
        <path
          d="M22.65 14.39L12 22.13L1.34999 14.39C1.20722 14.285 1.10131 14.1375 1.04743 13.9687C0.993542 13.7998 0.99444 13.6183 1.04999 13.45L2.26999 9.66999L4.70999 2.15999C4.73366 2.0988 4.77133 2.044 4.81999 1.99999C4.89923 1.92761 5.00267 1.88748 5.10999 1.88748C5.21731 1.88748 5.32075 1.92761 5.39999 1.99999C5.45137 2.04966 5.48924 2.11161 5.50999 2.17999L7.94999 9.66999H16.05L18.49 2.15999C18.5137 2.0988 18.5513 2.044 18.6 1.99999C18.6792 1.92761 18.7827 1.88748 18.89 1.88748C18.9973 1.88748 19.1008 1.92761 19.18 1.99999C19.2314 2.04966 19.2692 2.11161 19.29 2.17999L21.73 9.68999L23 13.45C23.0505 13.6235 23.0437 13.8086 22.9807 13.978C22.9176 14.1473 22.8017 14.2918 22.65 14.39V14.39Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_4972">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiGitlabSize24ColorBlack.propTypes = {
  color: PropTypes.string,
};
