import PropTypes from "prop-types";
import React from "react";

export const Day = ({ className, divClassName, text = "1" }) => {
  return (
    <div
      className={`flex flex-col w-[40px] h-[40px] items-center justify-center gap-[8px] p-[8px] relative bg-shadeswhite rounded-[4px] ${className}`}
    >
      <div
        className={`relative w-fit [font-family:'Manrope',Helvetica] font-normal text-shadesblack text-[15px] text-center tracking-[0] leading-[normal] ${divClassName}`}
      >
        {text}
      </div>
    </div>
  );
};

Day.propTypes = {
  text: PropTypes.string,
};
