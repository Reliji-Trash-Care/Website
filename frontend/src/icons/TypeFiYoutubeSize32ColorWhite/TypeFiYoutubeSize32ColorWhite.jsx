import PropTypes from "prop-types";
import React from "react";

export const TypeFiYoutubeSize32ColorWhite = ({ color = "white", className }) => {
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
        d="M30.0533 8.56001C29.895 7.92722 29.5724 7.34744 29.1182 6.87922C28.664 6.411 28.0943 6.07092 27.4667 5.89334C25.1733 5.33334 16 5.33334 16 5.33334C16 5.33334 6.82668 5.33334 4.53334 5.94668C3.90567 6.12426 3.33598 6.46433 2.8818 6.93255C2.42763 7.40077 2.10506 7.98056 1.94668 8.61334C1.52696 10.9408 1.32166 13.3018 1.33334 15.6667C1.31838 18.0494 1.5237 20.4284 1.94668 22.7733C2.12129 23.3865 2.45108 23.9442 2.9042 24.3926C3.35732 24.8411 3.91844 25.1651 4.53334 25.3333C6.82668 25.9467 16 25.9467 16 25.9467C16 25.9467 25.1733 25.9467 27.4667 25.3333C28.0943 25.1558 28.664 24.8157 29.1182 24.3475C29.5724 23.8792 29.895 23.2995 30.0533 22.6667C30.4698 20.3568 30.6751 18.0138 30.6667 15.6667C30.6816 13.2839 30.4763 10.9049 30.0533 8.56001V8.56001Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M13 20.0267L20.6667 15.6667L13 11.3067V20.0267Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiYoutubeSize32ColorWhite.propTypes = {
  color: PropTypes.string,
};
