import PropTypes from "prop-types";
import React from "react";

export const TypeFiShoppingCartSize64ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.6667 29.3333C27.4031 29.3333 28 28.7364 28 28C28 27.2636 27.4031 26.6667 26.6667 26.6667C25.9303 26.6667 25.3333 27.2636 25.3333 28C25.3333 28.7364 25.9303 29.3333 26.6667 29.3333Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M12 29.3333C12.7364 29.3333 13.3333 28.7364 13.3333 28C13.3333 27.2636 12.7364 26.6667 12 26.6667C11.2636 26.6667 10.6667 27.2636 10.6667 28C10.6667 28.7364 11.2636 29.3333 12 29.3333Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M1.33334 1.33334H6.66668L10.24 19.1867C10.3619 19.8005 10.6959 20.352 11.1834 20.7444C11.6709 21.1369 12.2809 21.3453 12.9067 21.3333H25.8667C26.4924 21.3453 27.1024 21.1369 27.5899 20.7444C28.0775 20.352 28.4114 19.8005 28.5333 19.1867L30.6667 8.00001H8.00001"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiShoppingCartSize64ColorBlack.propTypes = {
  color: PropTypes.string,
};
