import PropTypes from "prop-types";
import React from "react";

export const TypeFiLinkSize32ColorBlack = ({ color = "black", className }) => {
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
        d="M13.3333 17.3333C13.9059 18.0988 14.6365 18.7322 15.4754 19.1906C16.3143 19.6489 17.242 19.9215 18.1955 19.9898C19.1491 20.0581 20.1061 19.9205 21.0018 19.5864C21.8975 19.2523 22.7108 18.7294 23.3867 18.0533L27.3867 14.0533C28.6011 12.796 29.273 11.112 29.2578 9.36399C29.2426 7.61601 28.5415 5.94392 27.3055 4.70787C26.0694 3.47182 24.3973 2.77069 22.6494 2.7555C20.9014 2.74031 19.2174 3.41227 17.96 4.62666L15.6667 6.90666"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M18.6667 14.6667C18.0941 13.9012 17.3635 13.2678 16.5246 12.8094C15.6857 12.3511 14.758 12.0785 13.8045 12.0102C12.8509 11.9419 11.8939 12.0795 10.9982 12.4136C10.1025 12.7477 9.28917 13.2706 8.61332 13.9467L4.61333 17.9467C3.39894 19.204 2.72698 20.888 2.74216 22.636C2.75735 24.384 3.45848 26.0561 4.69453 27.2921C5.93059 28.5282 7.60267 29.2293 9.35065 29.2445C11.0986 29.2597 12.7826 28.5877 14.04 27.3733L16.32 25.0933"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiLinkSize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
