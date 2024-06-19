import PropTypes from "prop-types";
import React from "react";

export const TypeFiAlertTriangleSize32ColorWhite = ({ color = "white", className }) => {
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
        d="M13.72 5.14667L2.42666 24C2.19382 24.4032 2.07062 24.8604 2.06932 25.326C2.06801 25.7917 2.18865 26.2495 2.41923 26.654C2.64981 27.0586 2.9823 27.3957 3.38361 27.6318C3.78492 27.8679 4.24106 27.9949 4.70666 28H27.2933C27.7589 27.9949 28.2151 27.8679 28.6164 27.6318C29.0177 27.3957 29.3502 27.0586 29.5808 26.654C29.8113 26.2495 29.932 25.7917 29.9307 25.326C29.9294 24.8604 29.8062 24.4032 29.5733 24L18.28 5.14667C18.0423 4.75481 17.7076 4.43082 17.3083 4.20598C16.9089 3.98113 16.4583 3.86301 16 3.86301C15.5417 3.86301 15.0911 3.98113 14.6917 4.20598C14.2924 4.43082 13.9577 4.75481 13.72 5.14667V5.14667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M16 12V17.3333" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M16 22.6667H16.0133" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiAlertTriangleSize32ColorWhite.propTypes = {
  color: PropTypes.string,
};
