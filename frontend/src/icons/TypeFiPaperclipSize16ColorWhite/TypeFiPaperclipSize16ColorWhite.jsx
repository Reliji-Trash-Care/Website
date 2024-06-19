import PropTypes from "prop-types";
import React from "react";

export const TypeFiPaperclipSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10018)">
        <path
          d="M14.2933 7.36668L8.16667 13.4934C7.4161 14.2439 6.39812 14.6656 5.33667 14.6656C4.27521 14.6656 3.25723 14.2439 2.50667 13.4934C1.7561 12.7428 1.33444 11.7248 1.33444 10.6634C1.33444 9.6019 1.7561 8.58391 2.50667 7.83335L8.63333 1.70668C9.13371 1.20631 9.81236 0.925201 10.52 0.925201C11.2276 0.925201 11.9063 1.20631 12.4067 1.70668C12.907 2.20706 13.1881 2.88571 13.1881 3.59335C13.1881 4.30099 12.907 4.97964 12.4067 5.48002L6.27333 11.6067C6.02315 11.8569 5.68382 11.9974 5.33 11.9974C4.97618 11.9974 4.63685 11.8569 4.38667 11.6067C4.13648 11.3565 3.99592 11.0172 3.99592 10.6634C3.99592 10.3095 4.13648 9.97021 4.38667 9.72002L10.0467 4.06668"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10018">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiPaperclipSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
