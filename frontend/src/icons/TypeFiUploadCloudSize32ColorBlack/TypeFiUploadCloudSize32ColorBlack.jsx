import PropTypes from "prop-types";
import React from "react";

export const TypeFiUploadCloudSize32ColorBlack = ({ color = "black", className }) => {
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
        d="M21.3333 21.3333L16 16L10.6667 21.3333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M16 16V28" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M27.1866 24.52C28.4871 23.811 29.5144 22.6892 30.1065 21.3315C30.6985 19.9738 30.8216 18.4576 30.4563 17.0222C30.0909 15.5869 29.258 14.314 28.0889 13.4046C26.9198 12.4952 25.4811 12.001 24 12H22.32C21.9164 10.439 21.1642 8.98977 20.1199 7.76131C19.0756 6.53286 17.7664 5.55712 16.2908 4.90747C14.8151 4.25781 13.2114 3.95113 11.6001 4.0105C9.98889 4.06986 8.41207 4.49372 6.98821 5.25021C5.56436 6.0067 4.33053 7.07613 3.37947 8.3781C2.42842 9.68007 1.7849 11.1807 1.49728 12.7672C1.20967 14.3537 1.28545 15.9847 1.71893 17.5377C2.15241 19.0906 2.9323 20.5251 3.99998 21.7333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M21.3333 21.3333L16 16L10.6667 21.3333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiUploadCloudSize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
