import React from "react";
import { Day } from "../../components/Day";
import { NavbarUserFitur } from "../../components/NavbarUserFitur";
import { SideBarWrapper } from "../../components/SideBarWrapper";
import { Icon1 } from "../../icons/Icon1";
import { TypeFiChevronLeftSize24ColorWhite } from "../../icons/TypeFiChevronLeftSize24ColorWhite";

export const JadwalSampahAdmin = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-primary-1 overflow-hidden w-[1440px] h-[1024px] relative">
        <div className="absolute w-[2128px] h-[1887px] top-[-14px] left-[-212px]">
          <div className="absolute w-[1674px] h-[1674px] top-[213px] left-[454px] bg-primary-2 rounded-[837px] blur-[550px] opacity-[0.36]" />
          <div className="absolute w-[682px] h-[683px] top-0 left-0 bg-additional-1 rounded-[341px/341.5px] blur-[500px] opacity-[0.36]" />
          <div className="flex flex-col w-[282px] h-[97px] items-start justify-center gap-[10px] px-[16px] py-[8px] absolute top-[603px] left-[536px] bg-primary-1 rounded-[10px] shadow-drop-shadow">
            <div className="flex flex-wrap w-[196px] items-start gap-[7px_18px] relative flex-[0_0_auto]">
              <div className="relative w-[24px] h-[24px] bg-primary-2 rounded-[12px]" />
              <div className="relative w-fit mt-[-1.00px] font-body-1-regular font-[number:var(--body-1-regular-font-weight)] text-black text-[length:var(--body-1-regular-font-size)] text-center tracking-[var(--body-1-regular-letter-spacing)] leading-[var(--body-1-regular-line-height)] whitespace-nowrap [font-style:var(--body-1-regular-font-style)]">
                Pengangkutan sampah
              </div>
              <div className="relative w-[24px] h-[24px] bg-additional-1 rounded-[12px]" />
              <div className="relative w-fit font-body-1-regular font-[number:var(--body-1-regular-font-weight)] text-black text-[length:var(--body-1-regular-font-size)] text-center tracking-[var(--body-1-regular-letter-spacing)] leading-[var(--body-1-regular-line-height)] whitespace-nowrap [font-style:var(--body-1-regular-font-style)]">
                Pembayaran iuran
              </div>
            </div>
          </div>
          <img className="absolute w-[283px] h-[312px] top-[185px] left-[535px]" alt="Image" src="../../../static/img/image-4.png" />
          <NavbarUserFitur
            className="!absolute !left-[536px] !top-[14px]"
            profilHasOpenartImage={false}
            profilText="Admin"
          />
          <div className="absolute w-[24px] h-[24px] top-[33px] left-[1419px] bg-[url(/static/img/ellipse-7.png)] bg-cover bg-[50%_50%]" />
          <div className="flex flex-col w-[690px] h-[600px] items-start gap-[16px] p-[16px] absolute top-[100px] left-[842px] bg-primary-1 rounded-[10px] shadow-drop-shadow">
            <div className="flex items-center justify-center gap-[32px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex w-[24px] h-[24px] items-center justify-center gap-[10px] p-[8px] relative rounded-[4px] border border-solid border-neutral-200">
                <TypeFiChevronLeftSize24ColorWhite
                  className="!relative !w-[16px] !h-[16px] !mt-[-4.00px] !mb-[-4.00px] !ml-[-4.00px] !mr-[-4.00px]"
                  color="#64748B"
                />
              </div>
              <div className="relative flex-1 font-body-1-semibold font-[number:var(--body-1-semibold-font-weight)] text-neutral-800 text-[length:var(--body-1-semibold-font-size)] text-center tracking-[var(--body-1-semibold-letter-spacing)] leading-[var(--body-1-semibold-line-height)] [font-style:var(--body-1-semibold-font-style)]">
                April 2024
              </div>
              <div className="flex w-[24px] h-[24px] items-center justify-center gap-[10px] p-[8px] relative rounded-[4px] border border-solid border-neutral-200 -rotate-180">
                <Icon1 className="!relative !w-[16px] !h-[16px] !mt-[-4.00px] !mb-[-4.00px] !ml-[-4.00px] !mr-[-4.00px] !rotate-180" />
              </div>
            </div>
            <div className="flex flex-col items-start relative flex-1 self-stretch w-full grow">
              <div className="flex flex-col items-start gap-[6px] relative self-stretch w-full flex-[0_0_auto]">
                <img
                  className="relative self-stretch w-full h-px mt-[-1.00px] object-cover"
                  alt="Divider"
                  src="../../../static/img/divider.svg"
                />
                <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
                  <Day
                    className="!flex-1 !grow !bg-primary-1 !w-[unset]"
                    divClassName="!tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="Minggu"
                  />
                  <Day
                    className="!flex-1 !grow !bg-primary-1 !w-[unset]"
                    divClassName="!tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="Senin"
                  />
                  <Day
                    className="!flex-1 !grow !bg-primary-1 !w-[unset]"
                    divClassName="!tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="Selasa"
                  />
                  <Day
                    className="!flex-1 !grow !bg-primary-1 !w-[unset]"
                    divClassName="!tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="Rabu"
                  />
                  <Day
                    className="!flex-1 !grow !bg-primary-1 !w-[unset]"
                    divClassName="!tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="Kamis"
                  />
                  <Day
                    className="!flex-1 !grow !bg-primary-1 !w-[unset]"
                    divClassName="!tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="Jumat"
                  />
                  <Day
                    className="!flex-1 !grow !bg-primary-1 !w-[unset]"
                    divClassName="!tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="Sabtu"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-px relative flex-1 self-stretch w-full grow">
                <div className="flex items-start gap-px relative flex-1 self-stretch w-full grow">
                  <Day
                    className="!self-stretch !h-[unset] !flex-1 !grow !bg-primary-1 !w-[unset]"
                    divClassName="!text-variable-collection-grey !tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="31"
                  />
                  <Day
                    className="!self-stretch !h-[unset] !flex-1 !grow !bg-primary-1 !w-[unset]"
                    divClassName="!text-variable-collection-pure-black !tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="1"
                  />
                  <Day
                    className="!self-stretch !h-[unset] !flex-1 !grow !bg-primary-1 !w-[unset]"
                    divClassName="!text-variable-collection-pure-black !tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="2"
                  />
                  <Day
                    className="!self-stretch !h-[unset] !flex-1 !grow !bg-primary-1 !w-[unset]"
                    divClassName="!text-variable-collection-pure-black !tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="3"
                  />
                  <Day
                    className="!self-stretch !h-[unset] !flex-1 !grow !bg-primary-1 !w-[unset]"
                    divClassName="!text-variable-collection-pure-black !tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="4"
                  />
                  <Day
                    className="!self-stretch !h-[unset] !flex-1 !grow !bg-primary-1 !w-[unset]"
                    divClassName="!tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="5"
                  />
                  <Day
                    className="!self-stretch !h-[unset] !flex-1 !grow !bg-primary-1 !w-[unset]"
                    divClassName="!tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="6"
                  />
                </div>
                <div className="flex items-start gap-px relative flex-1 self-stretch w-full grow">
                  <Day
                    className="!self-stretch !h-[unset] !flex-1 !grow !bg-primary-1 !w-[unset]"
                    divClassName="!tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="7"
                  />
                  <Day
                    className="!self-stretch !h-[unset] !flex-1 !grow !bg-secondary-2 !w-[unset]"
                    divClassName="!text-primary-1 !tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="8"
                  />
                  <Day
                    className="!self-stretch !h-[unset] !flex-1 !grow !bg-additional-1 !w-[unset]"
                    divClassName="!tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="9"
                  />
                  <Day
                    className="!self-stretch !h-[unset] !flex-1 !grow !bg-primary-1 !w-[unset]"
                    divClassName="!text-variable-collection-pure-black !tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="10"
                  />
                  <Day
                    className="!self-stretch !h-[unset] !rounded-[unset] !flex-1 !grow !bg-primary-1 !w-[unset]"
                    divClassName="!tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="11"
                  />
                  <Day
                    className="!self-stretch !h-[unset] !rounded-[unset] !flex-1 !grow !bg-secondary-2 !w-[unset]"
                    divClassName="!text-primary-1 !tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="12"
                  />
                  <Day
                    className="!self-stretch !h-[unset] !rounded-[unset] !flex-1 !grow !bg-primary-1 !w-[unset]"
                    divClassName="!tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="13"
                  />
                </div>
                <div className="flex items-start gap-px relative flex-1 self-stretch w-full grow bg-primary-1">
                  <Day
                    className="!self-stretch !h-[unset] !rounded-[unset] !flex-1 !grow !bg-primary-1 !w-[unset]"
                    divClassName="!tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="14"
                  />
                  <Day
                    className="!self-stretch !h-[unset] !rounded-[unset] !flex-1 !grow !bg-secondary-2 !w-[unset]"
                    divClassName="!text-primary-1 !tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="15"
                  />
                  <Day
                    className="!self-stretch !h-[unset] !rounded-[unset] !flex-1 !grow !bg-primary-1 !w-[unset]"
                    divClassName="!tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="16"
                  />
                  <Day
                    className="!self-stretch !h-[unset] !rounded-[unset] !flex-1 !grow !bg-[unset] !w-[unset]"
                    divClassName="!tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="17"
                  />
                  <Day
                    className="!self-stretch !h-[unset] !rounded-[unset] !flex-1 !grow !bg-primary-1 !w-[unset]"
                    divClassName="!tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="18"
                  />
                  <Day
                    className="!self-stretch !h-[unset] !flex-1 !grow !bg-secondary-2 !w-[unset]"
                    divClassName="!text-primary-1 !tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="19"
                  />
                  <Day
                    className="!self-stretch !h-[unset] !flex-1 !grow !bg-primary-1 !w-[unset]"
                    divClassName="!tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="20"
                  />
                </div>
                <div className="flex items-start gap-px relative flex-1 self-stretch w-full grow">
                  <Day
                    className="!self-stretch !h-[unset] !flex-1 !grow !bg-primary-1 !w-[unset]"
                    divClassName="!tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="21"
                  />
                  <Day
                    className="!self-stretch !h-[unset] !flex-1 !grow !bg-secondary-2 !w-[unset]"
                    divClassName="!text-primary-1 !tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="22"
                  />
                  <Day
                    className="!self-stretch !h-[unset] !flex-1 !grow !bg-primary-1 !w-[unset]"
                    divClassName="!tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="23"
                  />
                  <Day
                    className="!self-stretch !h-[unset] !flex-1 !grow !bg-primary-1 !w-[unset]"
                    divClassName="!tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="24"
                  />
                  <Day
                    className="!self-stretch !h-[unset] !flex-1 !grow !bg-primary-1 !w-[unset]"
                    divClassName="!tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="25"
                  />
                  <Day
                    className="!self-stretch !h-[unset] !flex-1 !grow !bg-secondary-2 !w-[unset]"
                    divClassName="!text-primary-1 !tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="26"
                  />
                  <Day
                    className="!self-stretch !h-[unset] !flex-1 !grow !bg-primary-1 !w-[unset]"
                    divClassName="!tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="27"
                  />
                </div>
                <div className="flex items-start gap-px relative flex-1 self-stretch w-full grow">
                  <Day
                    className="!self-stretch !h-[unset] !flex-1 !grow !bg-primary-1 !w-[unset]"
                    divClassName="!tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="28"
                  />
                  <Day
                    className="!self-stretch !h-[unset] !flex-1 !grow !bg-secondary-2 !w-[unset]"
                    divClassName="!text-primary-1 !tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="29"
                  />
                  <Day
                    className="!self-stretch !h-[unset] !flex-1 !grow !bg-primary-1 !w-[unset]"
                    divClassName="!tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="30"
                  />
                  <Day
                    className="!self-stretch !h-[unset] !flex-1 !grow !bg-primary-1 !w-[unset]"
                    divClassName="!text-variable-collection-grey !tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="1"
                  />
                  <Day
                    className="!self-stretch !h-[unset] !flex-1 !grow !bg-primary-1 !w-[unset]"
                    divClassName="!text-variable-collection-grey !tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="2"
                  />
                  <Day
                    className="!self-stretch !h-[unset] !flex-1 !grow !bg-secondary-2 !w-[unset]"
                    divClassName="!text-primary-1 !tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="3"
                  />
                  <Day
                    className="!self-stretch !h-[unset] !flex-1 !grow !bg-primary-1 !w-[unset]"
                    divClassName="!text-variable-collection-grey !tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                    text="4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <SideBarWrapper
          chatText="Chat"
          className="!fixed !left-0 !top-0"
          deteksiDeteksi="../../../static/img/deteksi-3.svg"
          jadwalDivClassName="!text-primary-2 !tracking-[0] !text-[16px] ![font-style:unset] !font-bold ![font-family:'Nunito',Helvetica] !leading-[22.4px]"
          jadwalPropertyDefaultClassName="!flex-[0_0_auto] !bg-secondary-1"
          logoPlaceholderGroup="../../../static/img/group-7-2.png"
          sideBarDivClassName="!text-primary-2 !tracking-[0] !text-[16px] ![font-style:unset] !font-normal ![font-family:'Nunito',Helvetica] !leading-[22.4px]"
          sideBarPropertyDefaultClassName="!flex-[0_0_auto] !bg-white"
          tagihanText="Pemasukan Iuran"
          to="/jadwal-sampah-u40adminu41"
        />
      </div>
    </div>
  );
};
