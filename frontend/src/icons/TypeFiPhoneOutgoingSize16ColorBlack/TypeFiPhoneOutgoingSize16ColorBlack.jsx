import PropTypes from "prop-types";
import React from "react";

export const TypeFiPhoneOutgoingSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_11029)">
        <path
          d="M15.3333 4.66666V0.666656H11.3333"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M10.6667 5.33332L15.3333 0.666656"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M14.6666 11.28V13.28C14.6674 13.4657 14.6294 13.6495 14.555 13.8196C14.4806 13.9897 14.3715 14.1424 14.2347 14.2679C14.0979 14.3934 13.9364 14.489 13.7605 14.5485C13.5846 14.608 13.3982 14.6301 13.2133 14.6133C11.1619 14.3904 9.19131 13.6894 7.45998 12.5667C5.84919 11.5431 4.48353 10.1775 3.45998 8.56668C2.33329 6.82748 1.63214 4.84734 1.41331 2.78668C1.39665 2.60233 1.41856 2.41652 1.47764 2.2411C1.53673 2.06567 1.63169 1.90447 1.75649 1.76776C1.88128 1.63105 2.03318 1.52182 2.2025 1.44703C2.37183 1.37224 2.55487 1.33352 2.73998 1.33335H4.73998C5.06351 1.33016 5.37717 1.44473 5.62248 1.6557C5.8678 1.86667 6.02803 2.15964 6.07331 2.48001C6.15772 3.12006 6.31428 3.7485 6.53998 4.35335C6.62967 4.59196 6.64908 4.85129 6.59591 5.1006C6.54274 5.34991 6.41922 5.57875 6.23998 5.76001L5.39331 6.60668C6.34235 8.27571 7.72428 9.65764 9.39331 10.6067L10.24 9.76001C10.4212 9.58077 10.6501 9.45725 10.8994 9.40408C11.1487 9.35091 11.408 9.37032 11.6466 9.46001C12.2515 9.68571 12.8799 9.84227 13.52 9.92668C13.8438 9.97237 14.1396 10.1355 14.351 10.385C14.5624 10.6345 14.6748 10.9531 14.6666 11.28Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_11029">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiPhoneOutgoingSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
