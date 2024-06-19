import PropTypes from "prop-types";
import React from "react";

export const TypeFiRadioSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.99999 9.33332C8.73637 9.33332 9.33332 8.73637 9.33332 7.99999C9.33332 7.26361 8.73637 6.66666 7.99999 6.66666C7.26361 6.66666 6.66666 7.26361 6.66666 7.99999C6.66666 8.73637 7.26361 9.33332 7.99999 9.33332Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M10.8267 5.17335C11.1986 5.54484 11.4936 5.98599 11.6949 6.47159C11.8962 6.95718 11.9998 7.47769 11.9998 8.00335C11.9998 8.52901 11.8962 9.04952 11.6949 9.53511C11.4936 10.0207 11.1986 10.4619 10.8267 10.8333M5.17335 10.8267C4.80145 10.4552 4.50641 10.014 4.30512 9.52844C4.10382 9.04285 4.00021 8.52234 4.00021 7.99668C4.00021 7.47102 4.10382 6.95051 4.30512 6.46492C4.50641 5.97933 4.80145 5.53817 5.17335 5.16668M12.7134 3.28668C13.9632 4.53687 14.6653 6.23225 14.6653 8.00002C14.6653 9.76778 13.9632 11.4632 12.7134 12.7133M3.28669 12.7133C2.03688 11.4632 1.33478 9.76778 1.33478 8.00002C1.33478 6.23225 2.03688 4.53687 3.28669 3.28668"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiRadioSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
