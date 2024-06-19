import PropTypes from "prop-types";
import React from "react";
import { Default } from "../Default";
import { Divider } from "../Divider";

export const UploadGambar = ({
  className,
  hasUpload = true,
  hasText = true,
  visible = true,
  defaultText = "Temukan file anda",
  defaultDivClassName,
}) => {
  return (
    <div
      className={`flex flex-col w-[651px] items-center justify-center gap-[12px] pt-[var(--brand-spacing-lg)] pr-[var(--brand-spacing-lg)] pb-[var(--brand-spacing-lg)] pl-[var(--brand-spacing-lg)] relative bg-alias-bgcolor-light rounded-[var(--brand-radi-mlg)] border border-dashed border-alias-strokecolor-primary ${className}`}
    >
      {hasUpload && <img className="relative w-[42px] h-[42px]" alt="Upload" src="/img/upload.svg" />}

      <div className="flex flex-col items-center gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
        {hasText && (
          <div className="flex items-start justify-center gap-[4px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-[color:var(--alias-textcolor-default)] text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
              Upload di sini
            </div>
          </div>
        )}

        {visible && (
          <Divider
            borderWeight="w-text"
            className="!flex-[0_0_auto] !w-[201px]"
            divClassName="!text-alias-textcolor-secdefault"
            lineClassName="!bg-alias-strokecolor-lightgrey"
            lineClassNameOverride="!bg-alias-strokecolor-lightgrey"
            size="full"
            text="atau"
            variants="solid"
          />
        )}

        <Default className="!w-[136px]" divClassName={defaultDivClassName} text={defaultText} />
      </div>
    </div>
  );
};

UploadGambar.propTypes = {
  hasUpload: PropTypes.bool,
  hasText: PropTypes.bool,
  visible: PropTypes.bool,
  defaultText: PropTypes.string,
};
