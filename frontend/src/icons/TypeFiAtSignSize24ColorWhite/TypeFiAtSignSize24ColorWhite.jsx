import PropTypes from "prop-types";
import React from "react";

export const TypeFiAtSignSize24ColorWhite = ({ color = "white", className }) => {
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
        d="M16 21.3333C18.9455 21.3333 21.3333 18.9455 21.3333 16C21.3333 13.0545 18.9455 10.6667 16 10.6667C13.0545 10.6667 10.6667 13.0545 10.6667 16C10.6667 18.9455 13.0545 21.3333 16 21.3333Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M21.3333 10.6667V17.3334C21.3333 18.3942 21.7548 19.4117 22.5049 20.1618C23.2551 20.912 24.2725 21.3334 25.3333 21.3334C26.3942 21.3334 27.4116 20.912 28.1618 20.1618C28.9119 19.4117 29.3333 18.3942 29.3333 17.3334V16C29.3331 12.9908 28.315 10.07 26.4444 7.71276C24.5738 5.35549 21.9607 3.70035 19.0302 3.01644C16.0996 2.33254 13.0239 2.6601 10.3031 3.94587C7.58235 5.23164 5.37653 7.39999 4.04435 10.0983C2.71216 12.7967 2.33196 15.8664 2.96556 18.8082C3.59916 21.75 5.2093 24.391 7.53418 26.3017C9.85905 28.2124 12.7619 29.2805 15.7708 29.3322C18.7796 29.384 21.7175 28.4164 24.1067 26.5867"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiAtSignSize24ColorWhite.propTypes = {
  color: PropTypes.string,
};
