/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypeFiKeySize32ColorBlack = ({ color = "black", className }) => {
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
        d="M20.6667 9.99999L25.3333 5.33332M28 2.66666L25.3333 5.33332L28 2.66666ZM15.1867 15.48C15.8751 16.1593 16.4224 16.968 16.797 17.8597C17.1716 18.7514 17.3661 19.7083 17.3694 20.6755C17.3726 21.6427 17.1845 22.6009 16.8159 23.4951C16.4473 24.3892 15.9054 25.2016 15.2215 25.8855C14.5376 26.5694 13.7252 27.1113 12.8311 27.4799C11.9369 27.8485 10.9787 28.0366 10.0115 28.0334C9.04435 28.0301 8.08739 27.8356 7.19572 27.461C6.30405 27.0864 5.49529 26.5391 4.816 25.8507C3.48017 24.4676 2.74102 22.6152 2.75772 20.6924C2.77443 18.7696 3.54567 16.9303 4.90533 15.5707C6.26499 14.211 8.10428 13.4398 10.0271 13.423C11.9498 13.4063 13.8023 14.1455 15.1853 15.4813L15.1867 15.48ZM15.1867 15.48L20.6667 9.99999L15.1867 15.48ZM20.6667 9.99999L24.6667 14L29.3333 9.33332L25.3333 5.33332L20.6667 9.99999Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiKeySize32ColorBlack.propTypes = {
  color: PropTypes.string,
};