import PropTypes from "prop-types";
import React from "react";

export const TypeFiRadioSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M16 18.6667C17.4728 18.6667 18.6667 17.4728 18.6667 16C18.6667 14.5273 17.4728 13.3333 16 13.3333C14.5273 13.3333 13.3333 14.5273 13.3333 16C13.3333 17.4728 14.5273 18.6667 16 18.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M21.6533 10.3466C22.3971 11.0896 22.9872 11.9719 23.3898 12.9431C23.7924 13.9143 23.9996 14.9553 23.9996 16.0066C23.9996 17.058 23.7924 18.099 23.3898 19.0702C22.9872 20.0413 22.3971 20.9237 21.6533 21.6666M10.3466 21.6533C9.60284 20.9103 9.01276 20.028 8.61017 19.0568C8.20758 18.0856 8.00035 17.0446 8.00035 15.9933C8.00035 14.942 8.20758 13.901 8.61017 12.9298C9.01276 11.9586 9.60284 11.0763 10.3466 10.3333M25.4266 6.5733C27.9263 9.07367 29.3305 12.4644 29.3305 16C29.3305 19.5355 27.9263 22.9263 25.4266 25.4266M6.57331 25.4266C4.0737 22.9263 2.66949 19.5355 2.66949 16C2.66949 12.4644 4.0737 9.07367 6.57331 6.5733"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiRadioSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
