import PropTypes from "prop-types";
import React from "react";

export const SubJudulFix = ({
  className,
  subSubJudulClassName,
  text = "Sub-judul",
  lineClassName,
  line = "/img/line-18.svg",
}) => {
  return (
    <div className={`inline-flex items-start gap-[12px] relative ${className}`}>
      <div className="inline-flex items-start relative flex-[0_0_auto]">
        <div className="relative w-[9px] h-[39px] bg-primary-2 rounded-[50px]" />
      </div>
      <div className={`inline-flex flex-col items-start relative flex-[0_0_auto] ${subSubJudulClassName}`}>
        <div className="relative w-fit mt-[-1.00px] font-heading-5-semibold font-[number:var(--heading-5-semibold-font-weight)] text-tersier-2 text-[length:var(--heading-5-semibold-font-size)] tracking-[var(--heading-5-semibold-letter-spacing)] leading-[var(--heading-5-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-5-semibold-font-style)]">
          {text}
        </div>
        <img className={`relative w-[1200px] h-px mb-[-0.50px] ${lineClassName}`} alt="Line" src={line} />
      </div>
    </div>
  );
};

SubJudulFix.propTypes = {
  text: PropTypes.string,
  line: PropTypes.string,
};
