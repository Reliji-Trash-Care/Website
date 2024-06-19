import PropTypes from "prop-types";
import React from "react";

export const TypeFiGithubSize32ColorBlack = ({ color = "black", className }) => {
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
        d="M12 25.3333C5.33332 27.3333 5.33332 22 2.66666 21.3333M21.3333 29.3333V24.1733C21.3833 23.5375 21.2974 22.8984 21.0813 22.2984C20.8652 21.6983 20.5239 21.1512 20.08 20.6933C24.2667 20.2266 28.6667 18.64 28.6667 11.36C28.6663 9.4984 27.9502 7.70823 26.6667 6.35997C27.2745 4.73131 27.2315 2.9311 26.5467 1.3333C26.5467 1.3333 24.9733 0.866634 21.3333 3.30663C18.2773 2.4784 15.056 2.4784 12 3.30663C8.35999 0.866634 6.78666 1.3333 6.78666 1.3333C6.10182 2.9311 6.05885 4.73131 6.66666 6.35997C5.37349 7.71823 4.65669 9.52459 4.66666 11.4C4.66666 18.6266 9.06666 20.2133 13.2533 20.7333C12.8147 21.1866 12.4763 21.7272 12.2604 22.3199C12.0445 22.9125 11.9557 23.5441 12 24.1733V29.3333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiGithubSize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
