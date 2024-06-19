import PropTypes from "prop-types";
import React from "react";

export const Default = ({ className, text = "Button" }) => {
  return (
    <div
      className={`flex w-[112px] h-[35px] items-center justify-center gap-[10px] px-[16px] py-[10px] relative bg-primary-1 rounded-[10px] border-[1.5px] border-solid border-primary-2 ${className}`}
    >
      <div className="relative w-fit mt-[-4.00px] mb-[-1.00px] font-body-2-bold font-[number:var(--body-2-bold-font-weight)] text-primary-2 text-[length:var(--body-2-bold-font-size)] text-center tracking-[var(--body-2-bold-letter-spacing)] leading-[var(--body-2-bold-line-height)] whitespace-nowrap [font-style:var(--body-2-bold-font-style)]">
        {text}
      </div>
    </div>
  );
};

Default.propTypes = {
  text: PropTypes.string,
};
