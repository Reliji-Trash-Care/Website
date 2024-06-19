import PropTypes from "prop-types";
import React from "react";

export const TypeFiSlackSize64ColorBlack = ({ color = "black", className }) => {
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
        d="M41.3333 50.6667H37.3333V54.6667C37.3333 56.8801 39.12 58.6667 41.3333 58.6667C43.5466 58.6667 45.3333 56.8801 45.3333 54.6667C45.3333 52.4534 43.5466 50.6667 41.3333 50.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M25.3333 37.3333C27.5466 37.3333 29.3333 39.1199 29.3333 41.3333V54.6666C29.3333 56.8799 27.5466 58.6666 25.3333 58.6666C23.12 58.6666 21.3333 56.8799 21.3333 54.6666V41.3333C21.3333 39.1199 23.12 37.3333 25.3333 37.3333Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M9.33331 37.3333H13.3333V41.3332C13.3333 43.5466 11.5466 45.3332 9.33331 45.3332C7.11998 45.3332 5.33331 43.5466 5.33331 41.3332C5.33331 39.1199 7.11998 37.3333 9.33331 37.3333Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M37.3333 38.6667C37.3333 36.4534 39.12 34.6667 41.3333 34.6667H54.6666C56.88 34.6667 58.6666 36.4534 58.6666 38.6667C58.6666 40.8801 56.88 42.6668 54.6666 42.6668H41.3333C39.12 42.6668 37.3333 40.8801 37.3333 38.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M26.6666 25.3334C26.6666 23.12 24.88 21.3334 22.6666 21.3334H9.33331C7.11998 21.3334 5.33331 23.12 5.33331 25.3334C5.33331 27.5467 7.11998 29.3334 9.33331 29.3334H22.6666C24.88 29.3334 26.6666 27.5467 26.6666 25.3334Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M54.6667 26.6666H50.6667V22.6666C50.6667 20.4533 52.4534 18.6666 54.6667 18.6666C56.88 18.6666 58.6667 20.4533 58.6667 22.6666C58.6667 24.88 56.88 26.6666 54.6667 26.6666Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M38.6667 26.6667C36.4534 26.6667 34.6667 24.88 34.6667 22.6667V9.33337C34.6667 7.12004 36.4534 5.33337 38.6667 5.33337C40.88 5.33337 42.6667 7.12004 42.6667 9.33337V22.6667C42.6667 24.88 40.88 26.6667 38.6667 26.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M22.6667 13.3334H26.6667V9.33337C26.6667 7.12004 24.88 5.33337 22.6667 5.33337C20.4534 5.33337 18.6667 7.12004 18.6667 9.33337C18.6667 11.5467 20.4534 13.3334 22.6667 13.3334Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiSlackSize64ColorBlack.propTypes = {
  color: PropTypes.string,
};
