import PropTypes from "prop-types";
import React from "react";

export const TypeFiCloudRainSize24ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10590)">
        <path d="M10.6667 8.66666V14" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M5.33334 8.66666V14" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M8 10V15.3333" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path
          d="M13.3333 11.0533C14.0341 10.7464 14.6081 10.2077 14.9587 9.52768C15.3094 8.84766 15.4154 8.06772 15.259 7.31877C15.1027 6.56982 14.6934 5.89746 14.1 5.41454C13.5066 4.93162 12.7651 4.66755 12 4.66665H11.16C10.9487 3.84833 10.5459 3.09195 9.98486 2.45985C9.42383 1.82775 8.72061 1.33803 7.93316 1.03106C7.14571 0.724093 6.29659 0.60866 5.45577 0.694278C4.61495 0.779895 3.80652 1.06411 3.09711 1.5235C2.3877 1.98289 1.79762 2.6043 1.37552 3.33651C0.953412 4.06872 0.711363 4.89076 0.669323 5.73488C0.627282 6.579 0.786454 7.42102 1.13372 8.19155C1.48098 8.96208 2.00639 9.63904 2.66665 10.1666"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10590">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiCloudRainSize24ColorWhite.propTypes = {
  color: PropTypes.string,
};
