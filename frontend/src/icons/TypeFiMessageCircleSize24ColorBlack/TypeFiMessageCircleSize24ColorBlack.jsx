import PropTypes from "prop-types";
import React from "react";

export const TypeFiMessageCircleSize24ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M56 30.6667C56.0092 34.1864 55.1869 37.6584 53.6 40.8001C51.7185 44.5647 48.826 47.7312 45.2465 49.9448C41.6671 52.1584 37.542 53.3318 33.3333 53.3334C29.8137 53.3426 26.3416 52.5202 23.2 50.9334L8 56.0001L13.0667 40.8001C11.4798 37.6584 10.6575 34.1864 10.6667 30.6667C10.6683 26.4581 11.8416 22.333 14.0553 18.7535C16.2689 15.174 19.4353 12.2816 23.2 10.4C26.3416 8.8132 29.8137 7.99087 33.3333 8.00005H34.6667C40.2249 8.30669 45.4748 10.6527 49.411 14.589C53.3473 18.5253 55.6934 23.7751 56 29.3334V30.6667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiMessageCircleSize24ColorBlack.propTypes = {
  color: PropTypes.string,
};
