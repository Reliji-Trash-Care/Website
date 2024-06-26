import PropTypes from "prop-types";
import React from "react";

export const TypeFiThumbsDownSize24ColorBlack = ({ color = "black", className }) => {
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
        d="M17 2H19.67C20.236 1.98999 20.7859 2.18813 21.2154 2.55681C21.6449 2.9255 21.9241 3.43905 22 4V11C21.9241 11.5609 21.6449 12.0745 21.2154 12.4432C20.7859 12.8119 20.236 13.01 19.67 13H17M10 15V19C10 19.7956 10.3161 20.5587 10.8787 21.1213C11.4413 21.6839 12.2044 22 13 22L17 13V2H5.72C5.23767 1.99454 4.76962 2.16359 4.40209 2.47599C4.03457 2.78839 3.79232 3.22309 3.72 3.7L2.34 12.7C2.29649 12.9866 2.31583 13.2793 2.39666 13.5577C2.47749 13.8362 2.6179 14.0937 2.80814 14.3125C2.99839 14.5313 3.23392 14.7061 3.49843 14.8248C3.76294 14.9435 4.05009 15.0033 4.34 15H10Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiThumbsDownSize24ColorBlack.propTypes = {
  color: PropTypes.string,
};
