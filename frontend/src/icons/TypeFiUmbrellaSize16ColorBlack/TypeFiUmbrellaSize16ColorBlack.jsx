import PropTypes from "prop-types";
import React from "react";

export const TypeFiUmbrellaSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10774)">
        <path
          d="M12 12.6667C12 13.1971 11.7893 13.7058 11.4142 14.0809C11.0391 14.456 10.5304 14.6667 9.99999 14.6667C9.46956 14.6667 8.96085 14.456 8.58578 14.0809C8.2107 13.7058 7.99999 13.1971 7.99999 12.6667V8.00001M15.3333 8.00001C15.1592 6.17573 14.3113 4.48184 12.9553 3.24912C11.5993 2.01639 9.83257 1.33334 7.99999 1.33334C6.16741 1.33334 4.40063 2.01639 3.04463 3.24912C1.68864 4.48184 0.840793 6.17573 0.666656 8.00001H15.3333Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10774">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiUmbrellaSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
