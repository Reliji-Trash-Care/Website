import PropTypes from "prop-types";
import React from "react";

export const TypeFiBellSize24ColorBlack = ({ color = "black", className }) => {
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
        d="M48 21.3333C48 17.0898 46.3143 13.0201 43.3137 10.0195C40.3131 7.01896 36.2435 5.33325 32 5.33325C27.7565 5.33325 23.6869 7.01896 20.6863 10.0195C17.6857 13.0201 16 17.0898 16 21.3333C16 39.9999 8 45.3333 8 45.3333H56C56 45.3333 48 39.9999 48 21.3333Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M36.6134 56C36.1445 56.8082 35.4716 57.4791 34.662 57.9454C33.8523 58.4118 32.9344 58.6572 32 58.6572C31.0657 58.6572 30.1477 58.4118 29.3381 57.9454C28.5284 57.4791 27.8555 56.8082 27.3867 56"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiBellSize24ColorBlack.propTypes = {
  color: PropTypes.string,
};
