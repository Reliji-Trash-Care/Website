import PropTypes from "prop-types";
import React from "react";
import { AddOutline116 } from "../../icons/AddOutline116";

export const StateDefaultChangeWrapper = ({
  text = "Button",
  state,
  changeIcon,
  size,
  type,
  className,
  hasFrame = true,
}) => {
  return (
    <div
      className={`flex-col items-start gap-[10px] relative ${
        state === "focus" && ["filled", "outlined"].includes(type) ? "border border-solid" : ""
      } ${state === "focus" && ["filled", "outlined"].includes(type) ? "border-mint-green" : ""} ${
        state === "default" && type === "filled" && size === "large" && changeIcon === "icon-only" ? "w-[48px]" : ""
      } ${
        state === "default" && type === "filled" && size === "large" && changeIcon === "icon-only"
          ? "flex"
          : "inline-flex"
      } ${state === "focus" ? "rounded-[4px]" : ""} ${
        type === "filled" && changeIcon === "none" && size === "small" && state === "hover"
          ? "bg-[#9ae0c8]"
          : type === "filled" && size === "small" && changeIcon === "none" && state === "pressed"
          ? "bg-[#81cbb1]"
          : ""
      } ${className}`}
    >
      {hasFrame && (
        <div
          className={`items-center gap-[4px] rounded-[4px] justify-center relative ${
            type === "outlined" || (state === "focus" && type === "filled") ? "border border-solid" : ""
          } ${
            type === "filled" && state === "focus"
              ? "border-purewhite"
              : type === "outlined" && ["default", "focus"].includes(state)
              ? "border-mint-green"
              : type === "outlined" && state === "hover"
              ? "border-[#9ae0c8]"
              : type === "outlined" && state === "pressed"
              ? "border-[#81cbb1]"
              : type === "outlined" && state === "disable"
              ? "border-neutralsgray-2"
              : ""
          } ${
            state === "default" && type === "filled" && size === "large" && changeIcon === "icon-only"
              ? "w-full"
              : (changeIcon === "icon-only" && size === "large" && state === "default" && type === "outlined") ||
                (changeIcon === "icon-only" && size === "large" && type === "ghost")
              ? "w-[48px]"
              : ""
          } ${
            (changeIcon === "icon-only" && size === "large" && state === "default" && type === "filled") ||
            (changeIcon === "icon-only" && size === "large" && state === "default" && type === "outlined") ||
            (changeIcon === "icon-only" && size === "large" && type === "ghost")
              ? "flex"
              : "inline-flex"
          } ${
            state === "default" && type === "filled" && size === "large" && changeIcon === "icon-only"
              ? "self-stretch"
              : ""
          } ${
            changeIcon === "icon-only" && ["large", "small"].includes(size) && (size === "small" || type === "ghost")
              ? "p-[8px]"
              : changeIcon === "icon-only" && size === "medium"
              ? "px-[12px] py-[8px]"
              : type === "ghost" && ["left", "none", "right"].includes(changeIcon)
              ? "px-0 py-[8px]"
              : "px-[16px] py-[8px]"
          } ${size === "medium" ? "h-[40px]" : size === "large" ? "h-[48px]" : "h-[32px]"} ${
            state === "default" && type === "filled"
              ? "bg-mint-green"
              : type === "filled" && state === "hover"
              ? "bg-[#9ae0c8]"
              : type === "filled" && state === "focus"
              ? "bg-[#a5ebd3]"
              : type === "filled" && state === "pressed"
              ? "bg-[#81cbb1]"
              : type === "filled" && state === "disable"
              ? "bg-neutralsgray-2"
              : ""
          }`}
        >
          {["icon-only", "left"].includes(changeIcon) && (
            <AddOutline116
              className={
                state === "default" && type === "filled" && size === "large" && changeIcon === "icon-only"
                  ? "!relative !w-[24px] !h-[24px] !ml-[-4.00px] !mr-[-4.00px]"
                  : state === "default" && type === "outlined" && size === "large" && changeIcon === "icon-only"
                  ? "!relative !w-[20px] !h-[20px] !ml-[-2.00px] !mr-[-2.00px]"
                  : "!relative !w-[16px] !h-[16px]"
              }
              color={
                state === "disable"
                  ? "#8F8C91"
                  : type === "ghost" && state === "hover"
                  ? "#9BE0C8"
                  : type === "ghost" && state === "pressed"
                  ? "#82CBB2"
                  : "#112211"
              }
            />
          )}

          {["left", "none", "right"].includes(changeIcon) && (
            <div
              className={`font-montserrat-medium-14px w-fit tracking-[var(--montserrat-medium-14px-letter-spacing)] text-[length:var(--montserrat-medium-14px-font-size)] [font-style:var(--montserrat-medium-14px-font-style)] relative font-[number:var(--montserrat-medium-14px-font-weight)] leading-[var(--montserrat-medium-14px-line-height)] ${
                size === "small" ? "mt-[-1.50px]" : ""
              } ${
                state === "disable"
                  ? "text-neutralsgray-5"
                  : type === "ghost" && state === "hover"
                  ? "text-[#9ae0c8]"
                  : type === "ghost" && state === "pressed"
                  ? "text-[#81cbb1]"
                  : "text-blackish-green"
              }`}
            >
              {["large", "small"].includes(size) && <>{text}</>}

              {size === "medium" && <>Button</>}
            </div>
          )}

          {changeIcon === "right" && (
            <AddOutline116
              className="!relative !w-[16px] !h-[16px]"
              color={
                state === "disable"
                  ? "#8F8C91"
                  : type === "ghost" && state === "hover"
                  ? "#9BE0C8"
                  : type === "ghost" && state === "pressed"
                  ? "#82CBB2"
                  : "#112211"
              }
            />
          )}
        </div>
      )}
    </div>
  );
};

StateDefaultChangeWrapper.propTypes = {
  text: PropTypes.string,
  state: PropTypes.oneOf(["default", "pressed", "focus", "disable", "hover"]),
  changeIcon: PropTypes.oneOf(["icon-only", "none", "right", "left"]),
  size: PropTypes.oneOf(["large", "medium", "small"]),
  type: PropTypes.oneOf(["outlined", "filled", "ghost"]),
  hasFrame: PropTypes.bool,
};
