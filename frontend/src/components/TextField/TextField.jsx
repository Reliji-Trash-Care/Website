import PropTypes from "prop-types";
import React from "react";
import { AlertCircle5 } from "../../icons/AlertCircle5";
import { ChevronDown24 } from "../../icons/ChevronDown24";
import { IconsSearch24Px29 } from "../../icons/IconsSearch24Px29";

export const TextField = ({
  supportingText = true,
  supportingText1 = "Supporting text",
  label = "",
  input = <input type="text" className="w-[400px] mx-auto border-none focus:outline-none"/>,
  state,
  textConfigurations,
  leadingIcon,
  trailingIcon,
  className,
  textFieldClassName,
  inputTextClassName,
  labelTextClassName,
  labelTextClassNameOverride,
  inputTextClassNameOverride,
  labelTextWrapperClassName,
  divClassName,
  icon = <ChevronDown24 className="!relative !w-[24px] !h-[24px]" />,
  inputType = "text",
  inputType1 = "text",
  inputType2 = "text",
}) => {
  return (
    <div className={`w-[210px] flex flex-col items-start h-[56px] rounded-[4px_4px_0px_0px] relative ${className}`}>
      <div
        className={`w-full flex self-stretch flex-col items-start gap-[10px] flex-[0_0_auto] bg-white relative ${
          ["enabled", "hovered"].includes(state)
            ? "border border-solid"
            : ["error", "focused"].includes(state)
            ? "border-2 border-solid"
            : ""
        } ${
          ["enabled", "hovered"].includes(state)
            ? "border-[#79747e]"
            : state === "focused"
            ? "border-mint-green"
            : state === "error"
            ? "border-redish-pink"
            : ""
        } ${state === "disabled" ? "rounded-[4px_4px_0px_0px]" : "rounded-[4px]"} ${
          ["enabled", "error", "focused", "hovered"].includes(state) ? textFieldClassName : undefined
        }`}
      >
        <div
          
          className={`w-full flex self-stretch items-center flex-[0_0_auto] relative ${
            state === "disabled" ? "border border-solid" : ""
          } ${
            state === "disabled" && textConfigurations === "input-text"
              ? "border-[#79747e1f]"
              : state === "disabled" && ["label-text", "placeholder-text"].includes(textConfigurations)
              ? "border-[#1c1b1f1f]"
              : ""
          } ${state === "disabled" ? "mt-[-1.00px]" : ""} ${state === "disabled" ? "mr-[-1.00px]" : ""} ${
            state === "disabled" ? "ml-[-1.00px]" : ""
          } ${
            !trailingIcon && !leadingIcon
              ? "pl-[16px] pr-0 py-[8px]"
              : trailingIcon && leadingIcon
              ? "px-0 py-[4px]"
              : !trailingIcon && leadingIcon
              ? "pl-0 pr-[16px] py-[4px]"
              : "pl-[16px] pr-0 py-[4px]"
          } ${state === "disabled" ? "rounded-[4px]" : "rounded-[4px_4px_0px_0px]"} ${
            state === "disabled" ? "mb-[-1.00px]" : ""
          }`}
        >
          {((leadingIcon && !trailingIcon) || (trailingIcon && !leadingIcon)) && (
            <>
              <div
                className={`flex flex-col justify-center relative ${!trailingIcon ? "w-[48px]" : ""} ${
                  !trailingIcon ? "items-center" : "items-start"
                } ${trailingIcon ? "grow" : ""} ${!trailingIcon && state === "disabled" ? "opacity-[0.38]" : ""} ${
                  trailingIcon ? "flex-1" : ""
                } ${!trailingIcon ? "gap-[10px]" : ""} ${!trailingIcon ? "h-[48px]" : "h-[40px]"}`}
              >
                {((!leadingIcon && state === "focused" && textConfigurations === "label-text") ||
                  (!leadingIcon && textConfigurations === "input-text") ||
                  (!leadingIcon && textConfigurations === "placeholder-text")) && (
                  <>
                    <div
                      className={`inline-flex flex-[0_0_auto] relative ${
                        textConfigurations === "placeholder-text" ? "items-start" : "items-center"
                      } ${textConfigurations === "placeholder-text" ? "gap-[10px]" : ""}`}
                    >
                      {((state === "disabled" && textConfigurations === "input-text") ||
                        (state === "enabled" && textConfigurations === "input-text") ||
                        (state === "hovered" && textConfigurations === "input-text") ||
                        textConfigurations === "placeholder-text") && (
                        <div
                          className={`w-fit mt-[-1.00px] text-[#1c1b1f] relative ${
                            textConfigurations === "placeholder-text"
                              ? "font-regular-16-px"
                              : "font-montserrat-regular-16px"
                          } ${
                            textConfigurations === "placeholder-text"
                              ? "tracking-[var(--regular-16-px-letter-spacing)]"
                              : "tracking-[var(--montserrat-regular-16px-letter-spacing)]"
                          } ${
                            textConfigurations === "placeholder-text"
                              ? "text-[length:var(--regular-16-px-font-size)]"
                              : "text-[length:var(--montserrat-regular-16px-font-size)]"
                          } ${
                            textConfigurations === "placeholder-text"
                              ? "[font-style:var(--regular-16-px-font-style)]"
                              : "[font-style:var(--montserrat-regular-16px-font-style)]"
                          } ${state === "disabled" ? "opacity-[0.38]" : ""} ${
                            textConfigurations === "placeholder-text"
                              ? "font-[number:var(--regular-16-px-font-weight)]"
                              : "font-[number:var(--montserrat-regular-16px-font-weight)]"
                          } ${
                            textConfigurations === "placeholder-text"
                              ? "leading-[var(--regular-16-px-line-height)]"
                              : "leading-[var(--montserrat-regular-16px-line-height)]"
                          } ${
                            ["enabled", "error", "focused", "hovered"].includes(state)
                              ? inputTextClassNameOverride
                              : undefined
                          }`}
                        >
                          {textConfigurations === "input-text" && <>{input}</>}

                          {textConfigurations === "placeholder-text" && <>Placeholder</>}
                        </div>
                      )}

                      {textConfigurations === "input-text" && ["error", "focused"].includes(state) && (
                        <>
                          <input
                            className="font-montserrat-regular-16px w-fit mt-[-1.00px] tracking-[var(--montserrat-regular-16px-letter-spacing)] text-[length:var(--montserrat-regular-16px-font-size)] [font-style:var(--montserrat-regular-16px-font-style)] text-[#1c1b1f] font-[number:var(--montserrat-regular-16px-font-weight)] leading-[var(--montserrat-regular-16px-line-height)] relative [background:transparent] border-[none] p-0"
                            placeholder={input}
                            type={inputType}
                          />
                          <img
                            className="w-px mr-[-0.50px] h-[17px] relative"
                            alt="Caret"
                            src={state === "error" ? "/img/caret-7.svg" : "/img/caret-11.svg"}
                          />
                        </>
                      )}

                      {textConfigurations === "label-text" && (
                        <img
                          className="relative w-px h-[17px] mt-[-0.50px] mb-[-0.50px] ml-[-0.50px]"
                          alt="Caret"
                          src="/img/caret-11.svg"
                        />
                      )}
                    </div>
                    <div
                      className={`inline-flex left-[-4px] items-center top-[-16px] px-[4px] py-0 bg-neutralswhite absolute ${
                        ["enabled", "error", "focused", "hovered"].includes(state)
                          ? labelTextWrapperClassName
                          : undefined
                      }`}
                    >
                      <div
                        className={`font-montserrat-regular-14px w-fit mt-[-1.00px] tracking-[var(--montserrat-regular-14px-letter-spacing)] text-[length:var(--montserrat-regular-14px-font-size)] [font-style:var(--montserrat-regular-14px-font-style)] relative font-[number:var(--montserrat-regular-14px-font-weight)] leading-[var(--montserrat-regular-14px-line-height)] ${
                          state === "disabled" ? "opacity-[0.38]" : ""
                        } ${
                          textConfigurations === "input-text" && state === "enabled"
                            ? "text-blackish-green"
                            : state === "focused"
                            ? "text-mint-green"
                            : state === "error"
                            ? "text-redish-pink"
                            : "text-[#1c1b1f]"
                        } ${["enabled", "error", "focused", "hovered"].includes(state) ? divClassName : undefined}`}
                      >
                        {label}
                      </div>
                    </div>
                  </>
                )}

                {((!leadingIcon && state === "disabled" && textConfigurations === "label-text") ||
                  (!leadingIcon && state === "enabled" && textConfigurations === "label-text") ||
                  (!leadingIcon && state === "error" && textConfigurations === "label-text") ||
                  (!leadingIcon && state === "hovered" && textConfigurations === "label-text") ||
                  leadingIcon) && (
                  <div
                    className={`inline-flex items-center flex-[0_0_auto] relative ${
                      !trailingIcon ? "gap-[10px]" : ""
                    } ${!trailingIcon ? "overflow-hidden" : ""} ${!trailingIcon ? "rounded-[100px]" : ""} ${
                      !trailingIcon ? "justify-center" : ""
                    } ${trailingIcon ? "bg-neutralswhite" : ""}`}
                  >
                    <div
                      className={`relative ${!trailingIcon ? "inline-flex" : ""} ${
                        trailingIcon ? "mt-[-1.00px]" : ""
                      } ${trailingIcon ? "[font-style:var(--montserrat-regular-16px-font-style)]" : ""} ${
                        !trailingIcon ? "items-center" : ""
                      } ${!trailingIcon ? "flex-[0_0_auto]" : ""} ${trailingIcon ? "text-[#1c1b1f]" : ""} ${
                        !trailingIcon ? "p-[8px]" : ""
                      } ${trailingIcon ? "leading-[var(--montserrat-regular-16px-line-height)]" : ""} ${
                        trailingIcon ? "font-montserrat-regular-16px" : ""
                      } ${trailingIcon ? "w-fit" : ""} ${
                        trailingIcon ? "font-[number:var(--montserrat-regular-16px-font-weight)]" : ""
                      } ${trailingIcon ? "text-[length:var(--montserrat-regular-16px-font-size)]" : ""} ${
                        !trailingIcon ? "gap-[10px]" : ""
                      } ${trailingIcon ? "tracking-[var(--montserrat-regular-16px-letter-spacing)]" : ""} ${
                        state === "disabled" && !leadingIcon ? "opacity-[0.38]" : ""
                      } ${!trailingIcon ? "justify-center" : ""}`}
                    >
                      {!trailingIcon && <IconsSearch24Px29 className="!relative !w-[24px] !h-[24px]" />}

                      {trailingIcon && <>{label}</>}
                    </div>
                  </div>
                )}
              </div>
              <div
                className={`flex flex-col justify-center relative ${trailingIcon ? "w-[48px]" : ""} ${
                  !trailingIcon ? "items-start" : "items-center"
                } ${!trailingIcon ? "grow" : ""} ${trailingIcon && state === "disabled" ? "opacity-[0.38]" : ""} ${
                  trailingIcon ? "gap-[10px]" : ""
                } ${!trailingIcon ? "flex-1" : ""} ${trailingIcon ? "p-[12px]" : ""} ${
                  !trailingIcon ? "h-[40px]" : "h-[48px]"
                }`}
              >
                {((!leadingIcon && state === "enabled") ||
                  (!leadingIcon && state === "error") ||
                  (!leadingIcon && state === "focused") ||
                  (!leadingIcon && state === "hovered")) && <>{icon}</>}

                {((leadingIcon && state === "focused" && textConfigurations === "label-text") ||
                  (leadingIcon && textConfigurations === "input-text") ||
                  (leadingIcon && textConfigurations === "placeholder-text")) && (
                  <>
                    <div
                      className={`inline-flex flex-[0_0_auto] relative ${
                        textConfigurations === "placeholder-text" ? "items-start" : "items-center"
                      } ${textConfigurations === "placeholder-text" ? "gap-[10px]" : ""}`}
                    >
                      {((state === "disabled" && textConfigurations === "input-text") ||
                        (state === "enabled" && textConfigurations === "input-text") ||
                        (state === "hovered" && textConfigurations === "input-text") ||
                        textConfigurations === "placeholder-text") && (
                        <div
                          className={`w-fit mt-[-1.00px] text-[#1c1b1f] relative ${
                            textConfigurations === "placeholder-text"
                              ? "font-regular-16-px"
                              : "font-montserrat-regular-16px"
                          } ${
                            textConfigurations === "placeholder-text"
                              ? "tracking-[var(--regular-16-px-letter-spacing)]"
                              : "tracking-[var(--montserrat-regular-16px-letter-spacing)]"
                          } ${
                            textConfigurations === "placeholder-text"
                              ? "text-[length:var(--regular-16-px-font-size)]"
                              : "text-[length:var(--montserrat-regular-16px-font-size)]"
                          } ${
                            textConfigurations === "placeholder-text"
                              ? "[font-style:var(--regular-16-px-font-style)]"
                              : "[font-style:var(--montserrat-regular-16px-font-style)]"
                          } ${state === "disabled" ? "opacity-[0.38]" : ""} ${
                            textConfigurations === "placeholder-text"
                              ? "font-[number:var(--regular-16-px-font-weight)]"
                              : "font-[number:var(--montserrat-regular-16px-font-weight)]"
                          } ${
                            textConfigurations === "placeholder-text"
                              ? "leading-[var(--regular-16-px-line-height)]"
                              : "leading-[var(--montserrat-regular-16px-line-height)]"
                          }`}
                        >
                          {textConfigurations === "input-text" && <>{input}</>}

                          {textConfigurations === "placeholder-text" && <>Placeholder</>}
                        </div>
                      )}

                      {textConfigurations === "input-text" && ["error", "focused"].includes(state) && (
                        <>
                          <input
                            className="font-montserrat-regular-16px w-fit mt-[-1.00px] tracking-[var(--montserrat-regular-16px-letter-spacing)] text-[length:var(--montserrat-regular-16px-font-size)] [font-style:var(--montserrat-regular-16px-font-style)] text-[#1c1b1f] font-[number:var(--montserrat-regular-16px-font-weight)] leading-[var(--montserrat-regular-16px-line-height)] relative [background:transparent] border-[none] p-0"
                            placeholder={input}
                            type={inputType1}
                          />
                          <img
                            className="w-px mr-[-0.50px] h-[17px] relative"
                            alt="Caret"
                            src={state === "error" ? "/img/caret-7.svg" : "/img/caret-11.svg"}
                          />
                        </>
                      )}

                      {textConfigurations === "label-text" && (
                        <img
                          className="relative w-px h-[17px] mt-[-0.50px] mb-[-0.50px] ml-[-0.50px]"
                          alt="Caret"
                          src="/img/caret-11.svg"
                        />
                      )}
                    </div>
                    <div className="inline-flex left-[-36px] items-center top-[-16px] px-[4px] py-0 bg-neutralswhite absolute">
                      <div
                        className={`font-montserrat-regular-14px w-fit mt-[-1.00px] tracking-[var(--montserrat-regular-14px-letter-spacing)] text-[length:var(--montserrat-regular-14px-font-size)] [font-style:var(--montserrat-regular-14px-font-style)] relative font-[number:var(--montserrat-regular-14px-font-weight)] leading-[var(--montserrat-regular-14px-line-height)] ${
                          state === "disabled" ? "opacity-[0.38]" : ""
                        } ${
                          state === "focused"
                            ? "text-mint-green"
                            : state === "error"
                            ? "text-redish-pink"
                            : "text-[#1c1b1f]"
                        }`}
                      >
                        {label}
                      </div>
                    </div>
                  </>
                )}

                {trailingIcon && state === "disabled" && <ChevronDown24 className="!relative !w-[24px] !h-[24px]" />}

                {((leadingIcon && state === "disabled" && textConfigurations === "label-text") ||
                  (leadingIcon && state === "enabled" && textConfigurations === "label-text") ||
                  (leadingIcon && state === "error" && textConfigurations === "label-text") ||
                  (leadingIcon && state === "hovered" && textConfigurations === "label-text")) && (
                  <div className="inline-flex items-center flex-[0_0_auto] bg-neutralswhite relative">
                    <div
                      className={`font-montserrat-regular-16px w-fit mt-[-1.00px] tracking-[var(--montserrat-regular-16px-letter-spacing)] text-[length:var(--montserrat-regular-16px-font-size)] [font-style:var(--montserrat-regular-16px-font-style)] text-[#1c1b1f] font-[number:var(--montserrat-regular-16px-font-weight)] leading-[var(--montserrat-regular-16px-line-height)] relative ${
                        state === "disabled" ? "opacity-[0.38]" : ""
                      }`}
                    >
                      {label}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {trailingIcon && leadingIcon && (
            <div
              className={`w-[48px] flex flex-col items-center gap-[10px] h-[48px] justify-center relative ${
                state === "disabled" ? "opacity-[0.38]" : ""
              }`}
            >
              <div className="inline-flex items-center gap-[10px] flex-[0_0_auto] overflow-hidden rounded-[100px] justify-center relative">
                <div className="inline-flex items-center gap-[10px] flex-[0_0_auto] p-[8px] justify-center relative">
                  <IconsSearch24Px29 className="!relative !w-[24px] !h-[24px]" />
                </div>
              </div>
            </div>
          )}

          {((leadingIcon && trailingIcon) || (!leadingIcon && !trailingIcon)) && (
            <div className="flex flex-col items-start grow flex-1 h-[40px] justify-center relative">
              {((state === "disabled" && textConfigurations === "input-text") ||
                (state === "disabled" && textConfigurations === "placeholder-text") ||
                (state === "enabled" && textConfigurations === "input-text") ||
                (state === "enabled" && textConfigurations === "placeholder-text") ||
                (state === "error" && textConfigurations === "input-text") ||
                (state === "error" && textConfigurations === "placeholder-text") ||
                state === "focused" ||
                (state === "hovered" && textConfigurations === "input-text") ||
                (state === "hovered" && textConfigurations === "placeholder-text")) && (
                <>
                  <div
                    className={`inline-flex flex-[0_0_auto] relative ${
                      textConfigurations === "placeholder-text" ? "items-start" : "items-center"
                    } ${textConfigurations === "placeholder-text" ? "gap-[10px]" : ""}`}
                  >
                    {((state === "disabled" && textConfigurations === "input-text") ||
                      (state === "enabled" && textConfigurations === "input-text") ||
                      (state === "hovered" && textConfigurations === "input-text") ||
                      textConfigurations === "placeholder-text") && (
                      <div
                        className={`w-fit mt-[-1.00px] text-[#1c1b1f] relative ${
                          textConfigurations === "placeholder-text"
                            ? "font-regular-16-px"
                            : "font-montserrat-regular-16px"
                        } ${
                          textConfigurations === "placeholder-text"
                            ? "tracking-[var(--regular-16-px-letter-spacing)]"
                            : "tracking-[var(--montserrat-regular-16px-letter-spacing)]"
                        } ${
                          textConfigurations === "placeholder-text"
                            ? "text-[length:var(--regular-16-px-font-size)]"
                            : "text-[length:var(--montserrat-regular-16px-font-size)]"
                        } ${
                          textConfigurations === "placeholder-text"
                            ? "[font-style:var(--regular-16-px-font-style)]"
                            : "[font-style:var(--montserrat-regular-16px-font-style)]"
                        } ${state === "disabled" ? "opacity-[0.38]" : ""} ${
                          textConfigurations === "placeholder-text"
                            ? "font-[number:var(--regular-16-px-font-weight)]"
                            : "font-[number:var(--montserrat-regular-16px-font-weight)]"
                        } ${
                          textConfigurations === "placeholder-text"
                            ? "leading-[var(--regular-16-px-line-height)]"
                            : "leading-[var(--montserrat-regular-16px-line-height)]"
                        } ${
                          (!leadingIcon && state === "enabled") ||
                          (!leadingIcon && state === "error") ||
                          (!leadingIcon && state === "focused") ||
                          (!leadingIcon && state === "hovered")
                            ? inputTextClassName
                            : undefined
                        }`}
                      >
                        {textConfigurations === "input-text" && <>{input}</>}

                        {textConfigurations === "placeholder-text" && <>Placeholder</>}
                      </div>
                    )}

                    {textConfigurations === "input-text" && ["error", "focused"].includes(state) && (
                      <>
                        <input
                          className="font-montserrat-regular-16px w-fit mt-[-1.00px] tracking-[var(--montserrat-regular-16px-letter-spacing)] text-[length:var(--montserrat-regular-16px-font-size)] [font-style:var(--montserrat-regular-16px-font-style)] text-[#1c1b1f] font-[number:var(--montserrat-regular-16px-font-weight)] leading-[var(--montserrat-regular-16px-line-height)] relative [background:transparent] border-[none] p-0"
                          placeholder={input}
                          type={inputType2}
                        />
                        <img
                          className="w-px mr-[-0.50px] h-[17px] relative"
                          alt="Caret"
                          src={state === "error" ? "/img/caret-7.svg" : "/img/caret-11.svg"}
                        />
                      </>
                    )}

                    {textConfigurations === "label-text" && (
                      <img
                        className="w-px mt-[-0.50px] ml-[-0.50px] h-[17px] mb-[-0.50px] relative"
                        alt="Caret"
                        src="/img/caret-11.svg"
                      />
                    )}
                  </div>
                  <div
                    className={`inline-flex items-center top-[-16px] px-[4px] py-0 bg-neutralswhite absolute ${
                      trailingIcon ? "left-[-36px]" : "left-[-4px]"
                    } ${
                      (!leadingIcon && state === "enabled") ||
                      (!leadingIcon && state === "error") ||
                      (!leadingIcon && state === "focused") ||
                      (!leadingIcon && state === "hovered")
                        ? labelTextClassName
                        : undefined
                    }`}
                  >
                    <div
                      className={`font-montserrat-regular-14px w-fit mt-[-1.00px] tracking-[var(--montserrat-regular-14px-letter-spacing)] text-[length:var(--montserrat-regular-14px-font-size)] [font-style:var(--montserrat-regular-14px-font-style)] font-[number:var(--montserrat-regular-14px-font-weight)] leading-[var(--montserrat-regular-14px-line-height)] relative ${
                        state === "disabled" ? "opacity-[0.38]" : ""
                      } ${
                        state === "focused"
                          ? "text-mint-green"
                          : state === "error"
                          ? "text-redish-pink"
                          : "text-[#1c1b1f]"
                      } ${
                        (!leadingIcon && state === "enabled") ||
                        (!leadingIcon && state === "error") ||
                        (!leadingIcon && state === "focused") ||
                        (!leadingIcon && state === "hovered")
                          ? labelTextClassNameOverride
                          : undefined
                      }`}
                    >
                      {label}
                    </div>
                  </div>
                </>
              )}

              {((state === "disabled" && textConfigurations === "label-text") ||
                (state === "enabled" && textConfigurations === "label-text") ||
                (state === "error" && textConfigurations === "label-text") ||
                (state === "hovered" && textConfigurations === "label-text")) && (
                <div className="inline-flex items-center flex-[0_0_auto] bg-neutralswhite relative">
                  <div
                    className={`font-montserrat-regular-16px w-fit mt-[-1.00px] tracking-[var(--montserrat-regular-16px-letter-spacing)] text-[length:var(--montserrat-regular-16px-font-size)] [font-style:var(--montserrat-regular-16px-font-style)] text-[#1c1b1f] font-[number:var(--montserrat-regular-16px-font-weight)] leading-[var(--montserrat-regular-16px-line-height)] relative ${
                      state === "disabled" ? "opacity-[0.38]" : ""
                    }`}
                  >
                    {label}
                  </div>
                </div>
              )}
            </div>
          )}

          {trailingIcon && leadingIcon && (
            <div
              className={`w-[48px] flex flex-col items-center gap-[10px] p-[12px] h-[48px] justify-center relative ${
                state === "disabled" ? "opacity-[0.38]" : ""
              }`}
            >
              {["disabled", "enabled", "focused", "hovered"].includes(state) && (
                <ChevronDown24 className="!relative !w-[24px] !h-[24px]" />
              )}

              {state === "error" && <AlertCircle5 className="!relative !w-[24px] !h-[24px]" />}
            </div>
          )}
        </div>
      </div>
      {supportingText && (
        <div
          className={`w-full flex self-stretch items-start gap-[10px] flex-[0_0_auto] pt-[4px] pb-0 px-[16px] mb-[-21.00px] relative ${
            state === "disabled" ? "opacity-[0.38]" : ""
          }`}
        >
          <div
            className={`font-montserrat-regular-14px mt-[-1.00px] tracking-[var(--montserrat-regular-14px-letter-spacing)] text-[length:var(--montserrat-regular-14px-font-size)] [font-style:var(--montserrat-regular-14px-font-style)] flex-1 font-[number:var(--montserrat-regular-14px-font-weight)] leading-[var(--montserrat-regular-14px-line-height)] relative ${
              state === "error" ? "text-redish-pink" : "text-[#1c1b1f]"
            }`}
          >
            {supportingText1}
          </div>
        </div>
      )}
    </div>
  );
};

TextField.propTypes = {
  supportingText: PropTypes.bool,
  supportingText1: PropTypes.string,
  label: PropTypes.string,
  input: PropTypes.string,
  style: PropTypes.oneOf(["outlined"]),
  state: PropTypes.oneOf(["enabled", "focused", "hovered", "error", "disabled"]),
  textConfigurations: PropTypes.oneOf(["input-text", "label-text", "placeholder-text"]),
  leadingIcon: PropTypes.bool,
  trailingIcon: PropTypes.bool,
  inputType: PropTypes.string,
  inputType1: PropTypes.string,
  inputType2: PropTypes.string,
};
