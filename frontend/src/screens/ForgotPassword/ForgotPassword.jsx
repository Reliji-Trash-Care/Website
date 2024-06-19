import React from "react";
import { Button } from "../../components/Button";
import { NavbarGuest } from "../../components/NavbarGuest";
import { TextField } from "../../components/TextField";
import { ChevronBack } from "../../icons/ChevronBack";

export const ForgotPassword = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-primary-1 overflow-hidden w-[1440px] h-[966px] relative">
        <div className="absolute w-[732px] h-[1024px] top-[-29px] left-[708px] bg-primary-2">
          <img
            className="absolute w-[486px] h-[503px] top-[151px] left-[126px] object-cover"
            alt="Waste management"
            src="../../../static/img/waste-management-amico-1.png"
          />
        </div>
        <div className="absolute w-[486px] h-[511px] top-[131px] left-[120px]">
          <div className="flex flex-col w-[486px] items-start gap-12 relative">
            <div className="flex flex-col w-[486px] items-start gap-4 relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <ChevronBack className="!relative !w-6 !h-6" color="#1F1F1F" />
                <div className="relative w-fit font-body-2-semibold font-[number:var(--body-2-semibold-font-weight)] text-tersier-2 text-[length:var(--body-2-semibold-font-size)] tracking-[var(--body-2-semibold-letter-spacing)] leading-[var(--body-2-semibold-line-height)] whitespace-nowrap [font-style:var(--body-2-semibold-font-style)]">
                  Kembali ke halaman masuk
                </div>
              </div>
              <div className="flex flex-col w-[486px] items-start gap-4 relative flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] font-heading-2-bold font-[number:var(--heading-2-bold-font-weight)] text-tersier-2 text-[length:var(--heading-2-bold-font-size)] tracking-[var(--heading-2-bold-letter-spacing)] leading-[var(--heading-2-bold-line-height)] [font-style:var(--heading-2-bold-font-style)]">
                  Lupa password?
                </div>
                <p className="relative self-stretch opacity-75 font-body-1-regular font-[number:var(--body-1-regular-font-weight)] text-tersier-2 text-[length:var(--body-1-regular-font-size)] tracking-[var(--body-1-regular-letter-spacing)] leading-[var(--body-1-regular-line-height)] [font-style:var(--body-1-regular-font-style)]">
                  Jangan khawatir, hal ini sudah biasa terjadi. Masukkan E-mailmu di bawah ini untuk memulihkan
                  passwordmu
                </p>
              </div>
            </div>
            <div className="flex flex-col w-[486px] items-start gap-8 relative flex-[0_0_auto]">
              <TextField
                className="!w-[486px]"
                input=""
                inputTextClassName="!text-tersier-2 !tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                label="E-mail"
                labelTextClassName="!bg-primary-1"
                labelTextClassNameOverride="!text-tersier-2 !tracking-[var(--body-2-regular-letter-spacing)] !text-[length:var(--body-2-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-2-regular-font-style)] !font-[number:var(--body-2-regular-font-weight)] !font-body-2-regular !leading-[var(--body-2-regular-line-height)]"
                leadingIcon={false}
                state="enabled"
                style="outlined"
                supportingText={false}
                textConfigurations="input-text"
                textFieldClassName="!rounded-[10px] !bg-primary-1"
                trailingIcon={false}
              />
              <Button
                changeIcon="none"
                className="!flex-[0_0_auto] !flex !w-[486px]"
                divClassName="!text-[#f3f3f3] !tracking-[var(--body-2-bold-letter-spacing)] !text-[length:var(--body-2-bold-font-size)] !whitespace-nowrap ![font-style:var(--body-2-bold-font-style)] !font-[number:var(--body-2-bold-font-weight)] !font-body-2-bold !leading-[var(--body-2-bold-line-height)]"
                frameClassName="!self-stretch !rounded-[10px] !flex !bg-primary-2 !w-full"
                size="large"
                state="default"
                text="Submit"
                type="filled"
              />
            </div>
            <div className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex-1 grow h-px bg-tersier-2 opacity-25" />
              <div className="relative w-fit mt-[-1.00px] opacity-50 font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-tersier-2 text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] whitespace-nowrap [font-style:var(--body-2-regular-font-style)]">
                Atau login dengan
              </div>
              <div className="relative flex-1 grow h-px bg-tersier-2 opacity-25" />
            </div>
            <img className="relative self-stretch w-full flex-[0_0_auto]" alt="Frame" src="../../../static/img/frame-228.svg" />
          </div>
        </div>
        <img className="absolute w-[9px] h-2.5 top-[-527px] left-[-2613px]" alt="Ellipse" src="../../../static/img/ellipse-6.png" />
        <NavbarGuest
          className="!fixed !left-px !top-0"
          logoPlaceholderGroup="../../../static/img/group-7-2.png"
          menuItemDivClassName="!underline !text-primary-2 !tracking-[0] !text-base ![font-style:unset] !font-bold ![font-family:'Nunito',Helvetica] !leading-[22.4px]"
        />
      </div>
    </div>
  );
};
