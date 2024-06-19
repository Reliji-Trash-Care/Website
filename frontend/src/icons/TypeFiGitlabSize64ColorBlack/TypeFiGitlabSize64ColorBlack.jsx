import PropTypes from "prop-types";
import React from "react";

export const TypeFiGitlabSize64ColorBlack = ({ color = "black", className }) => {
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
        d="M60.3999 38.3733L32 59.0133L3.59996 38.3733C3.21922 38.0933 2.93681 37.7 2.79312 37.2498C2.64942 36.7995 2.65182 36.3154 2.79996 35.8666L6.05329 25.7866L12.56 5.75993C12.6231 5.59675 12.7235 5.45062 12.8533 5.33326C13.0646 5.14025 13.3404 5.03323 13.6266 5.03323C13.9128 5.03323 14.1887 5.14025 14.4 5.33326C14.537 5.4657 14.6379 5.63091 14.6933 5.81326L21.2 25.7866H42.7999L49.3066 5.75993C49.3697 5.59675 49.4702 5.45062 49.6 5.33326C49.8113 5.14025 50.0871 5.03323 50.3733 5.03323C50.6595 5.03323 50.9353 5.14025 51.1466 5.33326C51.2836 5.4657 51.3846 5.63091 51.44 5.81326L57.9466 25.8399L61.3333 35.8666C61.468 36.3292 61.45 36.823 61.2818 37.2745C61.1137 37.7261 60.8044 38.1114 60.3999 38.3733V38.3733Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiGitlabSize64ColorBlack.propTypes = {
  color: PropTypes.string,
};
