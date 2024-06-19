import PropTypes from "prop-types";
import React from "react";

export const Divider = ({
  variants,
  size,
  borderWeight,
  className,
  lineClassName,
  divClassName,
  text = "Text",
  lineClassNameOverride,
}) => {
  return (
    <div
      className={`w-[375px] ${borderWeight === "w-text" ? "flex" : ""} ${
        borderWeight === "w-text" ? "items-center" : ""
      } ${
        borderWeight === "one-px" ? "bg-cover" : ["three-px", "two-px"].includes(borderWeight) ? "bg-[100%_100%]" : ""
      } ${borderWeight === "w-text" ? "gap-[var(--brand-spacing-smd)]" : ""} ${
        borderWeight === "one-px"
          ? "h-px"
          : borderWeight === "two-px"
          ? "h-[2px]"
          : borderWeight === "three-px"
          ? "h-[3px]"
          : ""
      } ${
        variants === "solid" && borderWeight === "one-px"
          ? "bg-[url(/static/img/solid-line-full.svg)]"
          : variants === "dash" && borderWeight === "one-px"
          ? "bg-[url(/static/img/solid-line-full-1.svg)]"
          : variants === "solid" && borderWeight === "two-px"
          ? "bg-[url(/static/img/solid-line-full-2.svg)]"
          : variants === "dash" && borderWeight === "two-px"
          ? "bg-[url(/static/img/solid-line-full-3.svg)]"
          : borderWeight === "three-px" && variants === "solid"
          ? "bg-[url(/static/img/solid-line-full-4.svg)]"
          : variants === "dash" && borderWeight === "three-px"
          ? "bg-[url(/static/img/solid-line-full-5.svg)]"
          : ""
      } ${borderWeight === "one-px" ? "bg-[50%_50%]" : ""} ${borderWeight === "w-text" ? "relative" : ""} ${className}`}
    >
      {borderWeight === "w-text" && (
        <>
          <div
            className={`grow flex-1 h-px relative ${variants === "dash" ? "bg-cover" : ""} ${
              variants === "dash" ? "bg-[url(/static/img/solid-line-full-7.svg)]" : ""
            } ${variants === "dash" ? "bg-[50%_50%]" : ""} ${
              variants === "solid" ? "bg-alias-strokecolor-lightgrey-duplicate" : ""
            } ${lineClassName}`}
          />
          <div
            className={`font-body-tiny w-fit mt-[-1.00px] tracking-[var(--body-tiny-letter-spacing)] text-[length:var(--body-tiny-font-size)] [font-style:var(--body-tiny-font-style)] text-alias-textcolor-secdefault-duplicate font-[number:var(--body-tiny-font-weight)] text-center whitespace-nowrap leading-[var(--body-tiny-line-height)] relative ${divClassName}`}
          >
            {text}
          </div>
          <div
            className={`grow flex-1 h-px relative ${variants === "dash" ? "bg-cover" : ""} ${
              variants === "dash" ? "bg-[url(/static/img/solid-line-full-7.svg)]" : ""
            } ${variants === "dash" ? "bg-[50%_50%]" : ""} ${
              variants === "solid" ? "bg-alias-strokecolor-lightgrey-duplicate" : ""
            } ${lineClassNameOverride}`}
          />
        </>
      )}
    </div>
  );
};

Divider.propTypes = {
  variants: PropTypes.oneOf(["solid", "dash"]),
  size: PropTypes.oneOf(["full"]),
  borderWeight: PropTypes.oneOf(["one-px", "three-px", "w-text", "two-px"]),
  text: PropTypes.string,
};
