import PropTypes from "prop-types";
import React from "react";

export const TypeFiGitBranchSize32ColorBlack = ({ color = "black", className }) => {
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
        d="M16 56C20.4183 56 24 52.4183 24 48C24 43.5817 20.4183 40 16 40C11.5817 40 8 43.5817 8 48C8 52.4183 11.5817 56 16 56Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M48 24C48 30.3652 45.4714 36.4697 40.9706 40.9706C36.4697 45.4714 30.3652 48 24 48"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M48 24C52.4183 24 56 20.4183 56 16C56 11.5817 52.4183 8 48 8C43.5817 8 40 11.5817 40 16C40 20.4183 43.5817 24 48 24Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M16 8V40" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiGitBranchSize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
