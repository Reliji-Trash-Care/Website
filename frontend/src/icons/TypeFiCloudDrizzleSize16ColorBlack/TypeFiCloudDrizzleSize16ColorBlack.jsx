import PropTypes from "prop-types";
import React from "react";

export const TypeFiCloudDrizzleSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_4090)">
        <path d="M12 21V23" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M16 19V21" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M8 19V21" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M12 15V17" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M16 13V15" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M8 13V15" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path
          d="M20 16.58C21.0512 16.1196 21.9121 15.3115 22.4381 14.2915C22.9641 13.2715 23.1231 12.1016 22.8886 10.9782C22.6541 9.85475 22.0402 8.8462 21.15 8.12182C20.2599 7.39745 19.1476 7.00134 18 6.99999H16.74C16.423 5.77251 15.8189 4.63794 14.9773 3.68979C14.1358 2.74164 13.0809 2.00706 11.8998 1.54661C10.7186 1.08615 9.44491 0.913005 8.18368 1.04143C6.92246 1.16986 5.70981 1.59618 4.6457 2.28527C3.58158 2.97436 2.69647 3.90647 2.06331 5.00478C1.43015 6.1031 1.06708 7.33616 1.00401 8.60234C0.940954 9.86852 1.17971 11.1316 1.70061 12.2873C2.2215 13.4431 3.00962 14.4586 4 15.25"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_4090">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiCloudDrizzleSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
