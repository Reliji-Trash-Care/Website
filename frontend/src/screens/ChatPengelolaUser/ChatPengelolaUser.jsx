import React from "react";
import { NavbarUserFitur } from "../../components/NavbarUserFitur";
import { SideBarWrapper } from "../../components/SideBarWrapper";

export const ChatPengelolaUser = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-primary-1 overflow-hidden w-[1440px] h-[807px] relative">
        <div className="absolute w-[1674px] h-[1799px] top-[74px] left-[242px]">
          <div className="absolute w-[1674px] h-[1674px] top-[125px] left-0 bg-[#397d54b2] rounded-[837px] blur-[550px] opacity-[0.36]" />
          <div className="absolute w-[384px] h-[635px] top-[12px] left-[82px] bg-primary-1 rounded-[15px] shadow-drop-shadow-2" />
          <div className="absolute w-[48px] h-[48px] top-[121px] left-[103px] bg-[url(../../../static/img/ellipse-7.png)] bg-cover bg-[50%_50%]" />
          <img className="absolute w-[612px] h-[659px] top-0 left-[478px]" alt="Chat" src="../../../static/img/chat-3.png" />
          <img
            className="absolute w-[384px] h-px top-[97px] left-[82px] object-cover"
            alt="Line"
            src="../../../static/img/line-20.svg"
          />
          <div className="absolute w-[284px] h-[44px] top-[125px] left-[164px]">
            <div className="absolute w-[101px] h-[44px] top-0 left-0">
              <div className="absolute top-0 left-0 font-heading-8-semibold font-[number:var(--heading-8-semibold-font-weight)] text-[#0c1d0a] text-[length:var(--heading-8-semibold-font-size)] text-center tracking-[var(--heading-8-semibold-letter-spacing)] leading-[var(--heading-8-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-8-semibold-font-style)]">
                Admin Reliji
              </div>
              <div className="absolute w-[81px] top-[24px] left-0 font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-secondary-2 text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] [font-style:var(--body-2-regular-font-style)]">
                Mengetik...
              </div>
            </div>
            <div className="absolute w-[30px] h-[13px] top-[11px] left-[252px]">
              <div className="absolute w-[28px] top-0 left-0 font-caption-2-bold font-[number:var(--caption-2-bold-font-weight)] text-primary-2 text-[length:var(--caption-2-bold-font-size)] tracking-[var(--caption-2-bold-letter-spacing)] leading-[var(--caption-2-bold-line-height)] whitespace-nowrap [font-style:var(--caption-2-bold-font-style)]">
                09.41
              </div>
            </div>
          </div>
          <div className="inline-flex items-center gap-[12px] absolute top-[43px] left-[103px]">
            <img className="relative w-[24px] h-[24px]" alt="Chat" src="../../../static/img/chat-4.svg" />
            <div className="relative w-fit mt-[-1.00px] font-heading-8-semibold font-[number:var(--heading-8-semibold-font-weight)] text-black text-[length:var(--heading-8-semibold-font-size)] text-center tracking-[var(--heading-8-semibold-letter-spacing)] leading-[var(--heading-8-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-8-semibold-font-style)]">
              Kotak Masuk
            </div>
          </div>
        </div>
        <div className="inline-flex items-start gap-[9.46px] px-[30.28px] py-[15.14px] absolute top-[-1753px] left-[321px] bg-primary-2 rounded-[10px] shadow-[0px_3.78px_4.73px_#00000066]">
          <div className="relative w-fit mt-[-0.95px] [font-family:'Nunito',Helvetica] font-bold text-[#f3ffd1] text-[15.1px] text-center tracking-[0.08px] leading-[18.2px] whitespace-nowrap">
            Bayar
          </div>
        </div>
        <SideBarWrapper
          chatDivClassName="!text-primary-2 !tracking-[0] !text-[16px] ![font-style:unset] !font-bold ![font-family:'Nunito',Helvetica] !leading-[22.4px]"
          chatPropertyDefaultClassName="!flex-[0_0_auto] !bg-additional-1"
          className="!h-[807px] !fixed !left-0 !top-0"
          deteksiDeteksi="../../../static/img/deteksi-3.svg"
          logoPlaceholderGroup="../../../static/img/group-7-2.png"
        />
        <NavbarUserFitur
          className="!fixed !left-[324px] !top-0"
          profilArrowDown="../../../static/img/arrow-down-2-3.svg"
          profilOpenartImage="../../../static/img/openart-image-nfswrdqc-1711466557108-raw-2-3.png"
        />
      </div>
    </div>
  );
};
