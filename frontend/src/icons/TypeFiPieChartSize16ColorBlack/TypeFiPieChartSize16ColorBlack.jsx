import PropTypes from "prop-types";
import React from "react";

export const TypeFiPieChartSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_11026)">
        <path
          d="M14.14 10.5933C13.7159 11.5963 13.0525 12.4801 12.2079 13.1675C11.3633 13.8549 10.3632 14.3249 9.29493 14.5365C8.22671 14.7481 7.12292 14.6948 6.08007 14.3812C5.03722 14.0676 4.08706 13.5034 3.31265 12.7378C2.53825 11.9722 1.96318 11.0285 1.63773 9.98929C1.31228 8.95009 1.24635 7.84698 1.44571 6.77641C1.64506 5.70584 2.10364 4.70041 2.78134 3.84801C3.45904 2.99561 4.33523 2.3222 5.33331 1.88666"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M14.6667 8.00001C14.6667 7.12453 14.4942 6.25762 14.1592 5.44879C13.8242 4.63995 13.3331 3.90502 12.714 3.28596C12.095 2.66691 11.3601 2.17584 10.5512 1.84081C9.74239 1.50578 8.87548 1.33334 8 1.33334V8.00001H14.6667Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_11026">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiPieChartSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
