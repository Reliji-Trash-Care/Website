import PropTypes from "prop-types";
import React from "react";

export const TypeFiMicOffSize24ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_6924)">
        <path
          d="M10.6667 30.6667H21.3333"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M1.33334 1.33334L30.6667 30.6667"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M20 12.4534V5.33337C20.001 4.34141 19.6334 3.38447 18.9685 2.64831C18.3036 1.91215 17.3889 1.4493 16.402 1.34961C15.4151 1.24992 14.4263 1.5205 13.6276 2.10883C12.829 2.69715 12.2774 3.56125 12.08 4.53337M12 12V16C12.0007 16.7907 12.2357 17.5633 12.6752 18.2205C13.1148 18.8776 13.7393 19.3898 14.4697 19.6922C15.2002 19.9947 16.0039 20.0739 16.7794 19.9199C17.5549 19.7658 18.2673 19.3854 18.8267 18.8267L12 12Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M22.6667 22.6C21.365 23.9286 19.6962 24.838 17.8741 25.2115C16.0521 25.585 14.16 25.4056 12.4407 24.6964C10.7213 23.9871 9.25301 22.7804 8.22422 21.2309C7.19544 19.6814 6.65306 17.8599 6.66666 16V13.3333M25.3333 13.3333V16C25.3328 16.5499 25.2838 17.0987 25.1867 17.64"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M16 25.3333V30.6667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
      <defs>
        <clipPath id="clip0_143_6924">
          <rect fill="white" height="32" width="32" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiMicOffSize24ColorWhite.propTypes = {
  color: PropTypes.string,
};
