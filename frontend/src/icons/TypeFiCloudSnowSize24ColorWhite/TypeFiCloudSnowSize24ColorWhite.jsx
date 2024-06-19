import PropTypes from "prop-types";
import React from "react";

export const TypeFiCloudSnowSize24ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_4079)">
        <path d="M12 22H12.01" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M16 20H16.01" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M8 20H8.01" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M12 18H12.01" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path
          d="M20 17.58C21.0512 17.1196 21.9121 16.3115 22.4381 15.2915C22.9641 14.2715 23.1231 13.1016 22.8886 11.9782C22.6541 10.8547 22.0402 9.8462 21.15 9.12182C20.2599 8.39745 19.1476 8.00134 18 7.99999H16.74C16.423 6.77251 15.8189 5.63794 14.9773 4.68979C14.1358 3.74164 13.0809 3.00706 11.8998 2.54661C10.7186 2.08615 9.44491 1.913 8.18368 2.04143C6.92246 2.16986 5.70981 2.59618 4.6457 3.28527C3.58158 3.97436 2.69647 4.90647 2.06331 6.00478C1.43015 7.1031 1.06708 8.33616 1.00401 9.60234C0.940954 10.8685 1.17971 12.1316 1.70061 13.2873C2.2215 14.4431 3.00962 15.4586 4 16.25"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M16 16H16.01" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M8 16H8.01" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
      <defs>
        <clipPath id="clip0_143_4079">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiCloudSnowSize24ColorWhite.propTypes = {
  color: PropTypes.string,
};
