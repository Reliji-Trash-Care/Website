import PropTypes from "prop-types";
import React from "react";

export const TypeFiGithubSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M24 50.6665C10.6666 54.6665 10.6666 43.9998 5.33331 42.6665M42.6666 58.6665V48.3465C42.7667 47.0749 42.5949 45.7966 42.1627 44.5966C41.7305 43.3966 41.0478 42.3023 40.16 41.3865C48.5333 40.4532 57.3333 37.2798 57.3333 22.7198C57.3326 18.9967 55.9005 15.4163 53.3333 12.7198C54.5489 9.4625 54.463 5.86208 53.0933 2.66648C53.0933 2.66648 49.9466 1.73315 42.6666 6.61315C36.5547 4.95667 30.112 4.95667 24 6.61315C16.72 1.73315 13.5733 2.66648 13.5733 2.66648C12.2036 5.86208 12.1177 9.4625 13.3333 12.7198C10.747 15.4363 9.31337 19.0491 9.33331 22.7998C9.33331 37.2532 18.1333 40.4265 26.5066 41.4665C25.6293 42.3731 24.9527 43.4542 24.5208 44.6396C24.0889 45.825 23.9115 47.088 24 48.3465V58.6665"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiGithubSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
