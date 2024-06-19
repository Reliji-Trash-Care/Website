import PropTypes from "prop-types";
import React from "react";

export const TypeFiGitlabSize32ColorBlack = ({ color = "black", className }) => {
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
        d="M30.2 19.1866L16 29.5066L1.80001 19.1866C1.60964 19.0466 1.46843 18.85 1.39659 18.6249C1.32474 18.3998 1.32594 18.1577 1.40001 17.9333L3.02668 12.8933L6.28001 2.87998C6.31156 2.79839 6.3618 2.72532 6.42668 2.66665C6.53233 2.57014 6.67025 2.51663 6.81334 2.51663C6.95644 2.51663 7.09436 2.57014 7.20001 2.66665C7.26852 2.73287 7.319 2.81547 7.34668 2.90665L10.6 12.8933H21.4L24.6533 2.87998C24.6849 2.79839 24.7351 2.72532 24.8 2.66665C24.9057 2.57014 25.0436 2.51663 25.1867 2.51663C25.3298 2.51663 25.4677 2.57014 25.5733 2.66665C25.6419 2.73287 25.6923 2.81547 25.72 2.90665L28.9733 12.92L30.6667 17.9333C30.734 18.1646 30.725 18.4115 30.6409 18.6373C30.5569 18.8631 30.4023 19.0557 30.2 19.1866V19.1866Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiGitlabSize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
