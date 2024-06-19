import PropTypes from "prop-types";
import React from "react";

export const TypeFiCameraOffSize32ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_5325)">
        <path
          d="M1.33334 1.33334L30.6667 30.6667"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M12 4H20L22.6667 8H28C28.7073 8 29.3855 8.28095 29.8856 8.78105C30.3857 9.28115 30.6667 9.95942 30.6667 10.6667V23.12M20.3733 20.3733C19.9308 21.0201 19.3512 21.5613 18.6757 21.9586C18.0003 22.3559 17.2456 22.5995 16.4653 22.672C15.685 22.7445 14.8983 22.6442 14.1612 22.3781C13.4241 22.1121 12.7547 21.6869 12.2006 21.1328C11.6465 20.5787 11.2212 19.9092 10.9552 19.1721C10.6892 18.435 10.5888 17.6484 10.6614 16.8681C10.7339 16.0878 10.9774 15.3331 11.3747 14.6576C11.772 13.9821 12.3133 13.4025 12.96 12.96M28 28H4.00001C3.29277 28 2.61449 27.719 2.11439 27.219C1.6143 26.7189 1.33334 26.0406 1.33334 25.3333V10.6667C1.33334 9.95942 1.6143 9.28115 2.11439 8.78105C2.61449 8.28095 3.29277 8 4.00001 8H8.00001L28 28Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_5325">
          <rect fill="white" height="32" width="32" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiCameraOffSize32ColorWhite.propTypes = {
  color: PropTypes.string,
};
