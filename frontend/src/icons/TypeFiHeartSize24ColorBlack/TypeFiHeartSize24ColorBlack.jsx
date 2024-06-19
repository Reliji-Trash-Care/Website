import PropTypes from "prop-types";
import React from "react";

export const TypeFiHeartSize24ColorBlack = ({ color = "black", className }) => {
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
        d="M27.7867 6.14672C27.1057 5.46539 26.2971 4.92492 25.4071 4.55617C24.5172 4.18742 23.5633 3.99762 22.6 3.99762C21.6367 3.99762 20.6828 4.18742 19.7929 4.55617C18.9029 4.92492 18.0943 5.46539 17.4133 6.14672L16 7.56005L14.5867 6.14672C13.2111 4.77113 11.3454 3.99833 9.4 3.99833C7.45462 3.99833 5.58892 4.77113 4.21333 6.14672C2.83774 7.52231 2.06494 9.38801 2.06494 11.3334C2.06494 13.2788 2.83774 15.1445 4.21333 16.5201L5.62666 17.9334L16 28.3067L26.3733 17.9334L27.7867 16.5201C28.468 15.839 29.0085 15.0305 29.3772 14.1405C29.746 13.2506 29.9358 12.2967 29.9358 11.3334C29.9358 10.3701 29.746 9.41619 29.3772 8.52625C29.0085 7.6363 28.468 6.82773 27.7867 6.14672V6.14672Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiHeartSize24ColorBlack.propTypes = {
  color: PropTypes.string,
};
