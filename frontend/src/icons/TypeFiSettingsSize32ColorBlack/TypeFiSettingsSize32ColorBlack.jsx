/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypeFiSettingsSize32ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_6747)">
        <path
          d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M25.8667 20C25.6892 20.4022 25.6362 20.8483 25.7147 21.2808C25.7931 21.7133 25.9993 22.1124 26.3067 22.4267L26.3867 22.5067C26.6346 22.7543 26.8313 23.0484 26.9655 23.3722C27.0997 23.6959 27.1688 24.0429 27.1688 24.3933C27.1688 24.7438 27.0997 25.0908 26.9655 25.4145C26.8313 25.7382 26.6346 26.0323 26.3867 26.28C26.139 26.5279 25.8449 26.7246 25.5212 26.8588C25.1975 26.993 24.8505 27.0621 24.5 27.0621C24.1496 27.0621 23.8026 26.993 23.4788 26.8588C23.1551 26.7246 22.861 26.5279 22.6133 26.28L22.5333 26.2C22.2191 25.8926 21.82 25.6864 21.3875 25.608C20.9549 25.5296 20.5088 25.5825 20.1067 25.76C19.7123 25.929 19.376 26.2097 19.1391 26.5674C18.9022 26.9251 18.7751 27.3443 18.7733 27.7733V28C18.7733 28.7073 18.4924 29.3855 17.9923 29.8856C17.4922 30.3857 16.8139 30.6667 16.1067 30.6667C15.3994 30.6667 14.7212 30.3857 14.2211 29.8856C13.721 29.3855 13.44 28.7073 13.44 28V27.88C13.4297 27.4387 13.2868 27.0107 13.03 26.6516C12.7732 26.2926 12.4143 26.0191 12 25.8667C11.5979 25.6892 11.1518 25.6362 10.7192 25.7147C10.2867 25.7931 9.88758 25.9993 9.57334 26.3067L9.49334 26.3867C9.24568 26.6346 8.95158 26.8313 8.62785 26.9655C8.30412 27.0997 7.95712 27.1688 7.60668 27.1688C7.25624 27.1688 6.90923 27.0997 6.5855 26.9655C6.26177 26.8313 5.96767 26.6346 5.72001 26.3867C5.47207 26.139 5.27538 25.8449 5.14118 25.5212C5.00699 25.1975 4.93791 24.8505 4.93791 24.5C4.93791 24.1496 5.00699 23.8026 5.14118 23.4788C5.27538 23.1551 5.47207 22.861 5.72001 22.6133L5.80001 22.5333C6.10739 22.2191 6.31359 21.82 6.39202 21.3875C6.47044 20.9549 6.4175 20.5088 6.24001 20.1067C6.07099 19.7123 5.79035 19.376 5.43263 19.1391C5.07491 18.9022 4.65573 18.7751 4.22668 18.7733H4.00001C3.29277 18.7733 2.61449 18.4924 2.11439 17.9923C1.6143 17.4922 1.33334 16.8139 1.33334 16.1067C1.33334 15.3994 1.6143 14.7212 2.11439 14.2211C2.61449 13.721 3.29277 13.44 4.00001 13.44H4.12001C4.56134 13.4297 4.98935 13.2868 5.34841 13.03C5.70747 12.7732 5.98096 12.4143 6.13334 12C6.31083 11.5979 6.36377 11.1518 6.28535 10.7192C6.20692 10.2867 6.00073 9.88758 5.69334 9.57334L5.61334 9.49334C5.36541 9.24568 5.16872 8.95158 5.03452 8.62785C4.90032 8.30412 4.83125 7.95712 4.83125 7.60668C4.83125 7.25624 4.90032 6.90923 5.03452 6.5855C5.16872 6.26177 5.36541 5.96767 5.61334 5.72001C5.861 5.47207 6.15511 5.27538 6.47884 5.14118C6.80256 5.00699 7.14957 4.93791 7.50001 4.93791C7.85045 4.93791 8.19746 5.00699 8.52118 5.14118C8.84491 5.27538 9.13901 5.47207 9.38668 5.72001L9.46668 5.80001C9.78092 6.10739 10.18 6.31359 10.6126 6.39202C11.0451 6.47044 11.4912 6.4175 11.8933 6.24001H12C12.3944 6.07099 12.7307 5.79035 12.9676 5.43263C13.2045 5.07491 13.3316 4.65573 13.3333 4.22668V4.00001C13.3333 3.29277 13.6143 2.61449 14.1144 2.11439C14.6145 1.6143 15.2928 1.33334 16 1.33334C16.7073 1.33334 17.3855 1.6143 17.8856 2.11439C18.3857 2.61449 18.6667 3.29277 18.6667 4.00001V4.12001C18.6684 4.54906 18.7955 4.96824 19.0324 5.32596C19.2693 5.68368 19.6057 5.96433 20 6.13334C20.4022 6.31083 20.8483 6.36377 21.2808 6.28535C21.7133 6.20692 22.1124 6.00073 22.4267 5.69334L22.5067 5.61334C22.7543 5.36541 23.0484 5.16872 23.3722 5.03452C23.6959 4.90032 24.0429 4.83125 24.3933 4.83125C24.7438 4.83125 25.0908 4.90032 25.4145 5.03452C25.7382 5.16872 26.0323 5.36541 26.28 5.61334C26.5279 5.861 26.7246 6.15511 26.8588 6.47884C26.993 6.80256 27.0621 7.14957 27.0621 7.50001C27.0621 7.85045 26.993 8.19746 26.8588 8.52118C26.7246 8.84491 26.5279 9.13901 26.28 9.38668L26.2 9.46668C25.8926 9.78092 25.6864 10.18 25.608 10.6126C25.5296 11.0451 25.5825 11.4912 25.76 11.8933V12C25.929 12.3944 26.2097 12.7307 26.5674 12.9676C26.9251 13.2045 27.3443 13.3316 27.7733 13.3333H28C28.7073 13.3333 29.3855 13.6143 29.8856 14.1144C30.3857 14.6145 30.6667 15.2928 30.6667 16C30.6667 16.7073 30.3857 17.3855 29.8856 17.8856C29.3855 18.3857 28.7073 18.6667 28 18.6667H27.88C27.451 18.6684 27.0318 18.7955 26.6741 19.0324C26.3163 19.2693 26.0357 19.6057 25.8667 20V20Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_6747">
          <rect fill="white" height="32" width="32" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiSettingsSize32ColorBlack.propTypes = {
  color: PropTypes.string,
};