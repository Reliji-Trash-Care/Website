import PropTypes from "prop-types";
import React from "react";

export const TypeFiYoutubeSize24ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8386 5.15941C21.498 4.80824 21.0707 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.11999 4 3.39999 4.46C2.92924 4.59318 2.50197 4.84824 2.16134 5.19941C1.82071 5.55057 1.57878 5.98541 1.45999 6.46C1.14521 8.20556 0.991228 9.97631 0.999992 11.75C0.988771 13.537 1.14276 15.3213 1.45999 17.08C1.59095 17.5398 1.8383 17.9581 2.17814 18.2945C2.51797 18.6308 2.93881 18.8738 3.39999 19C5.11999 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0707 18.8668 21.498 18.6118 21.8386 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0112 9.96295 22.8572 8.1787 22.54 6.42V6.42Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M9.75 15.02L15.5 11.75L9.75 8.48001V15.02Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiYoutubeSize24ColorBlack.propTypes = {
  color: PropTypes.string,
};
