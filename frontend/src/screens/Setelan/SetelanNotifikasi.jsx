import React from "react";
import { NavbarUserFitur } from "../../components/NavbarUserFitur";
import { SideBarWrapper } from "../../components/SideBarWrapper";

export const SetelanNotifikasi = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-primary-1 overflow-hidden w-[1440px] h-[1024px] relative">
        <div className="absolute w-[1674px] h-[1787px] top-[86px] left-[242px]">
          <div className="absolute w-[1674px] h-[1674px] top-[113px] left-0 bg-primary-2 rounded-[837px] blur-[550px] opacity-[0.36]" />
          <div className="w-[690px] left-[388px] absolute h-[600px] top-0 bg-primary-1 rounded-[15px] shadow-drop-shadow-2" />
          <div className="w-[282px] left-[82px] absolute h-[600px] top-0 bg-primary-1 rounded-[15px] shadow-drop-shadow-2" />
          <div className="inline-flex flex-col items-start gap-[36px] absolute top-[38px] left-[109px]">
          <a href="/setelanprofil" className="font-body-1-regular w-fit tracking-[var(--body-1-regular-letter-spacing)] [font-style:var(--body-1-regular-font-style)] text-[length:var(--body-1-regular-font-size)] text-black font-[number:var(--body-1-regular-font-weight)] text-center whitespace-nowrap leading-[var(--body-1-regular-line-height)] relative">
            Edit Profile</a>
            <a href="/setelanganti" className="font-body-1-regular w-fit tracking-[var(--body-1-regular-letter-spacing)] [font-style:var(--body-1-regular-font-style)] text-[length:var(--body-1-regular-font-size)] text-black font-[number:var(--body-1-regular-font-weight)] text-center whitespace-nowrap leading-[var(--body-1-regular-line-height)] relative">
            Ganti</a>
            <a href="/setelannotifikasi" className="font-body-1-regular w-fit tracking-[var(--body-1-regular-letter-spacing)] [font-style:var(--body-1-regular-font-style)] text-[length:var(--body-1-regular-font-size)] text-black font-[number:var(--body-1-regular-font-weight)] text-center whitespace-nowrap leading-[var(--body-1-regular-line-height)] relative">
            Notifikasi</a>
          </div>
          <div className="inline-flex flex-col items-start gap-[24px] absolute top-[35px] left-[429px]">
          <div class="inline-flex items-center relative flex-[0_0_auto]">
            <div class="flex w-[190px] items-center justify-between gap-[12px] px-0 py-[6px] bg-primary-1 rounded-[10px]">
              <div class="relative w-fit mt-[-1.00px] font-body-1-regular font-[number:var(--body-1-regular-font-weight)] text-black text-[length:var(--body-1-regular-font-size)] text-center tracking-[var(--body-1-regular-letter-spacing)] leading-[var(--body-1-regular-line-height)] whitespace-nowrap [font-style:var(--body-1-regular-font-style)]">
                Pembayaran
              </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" class="sr-only peer"/>
                    <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
            </div>
            
            {/* <div class="inline-flex items-center relative flex-[0_0_auto]">
              <div class="flex w-[190px] items-center justify-between gap-[12px] px-0 py-[6px] bg-primary-1 rounded-[10px]">
                <div class="relative w-fit mt-[-1.00px] font-body-1-regular font-[number:var(--body-1-regular-font-weight)] text-black text-[length:var(--body-1-regular-font-size)] text-center tracking-[var(--body-1-regular-letter-spacing)] leading-[var(--body-1-regular-line-height)] whitespace-nowrap [font-style:var(--body-1-regular-font-style)]">
                  Chat
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" class="sr-only peer"/>
                  <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
            </div> */}
          </div>
        </div>
        <SideBarWrapper
          chatText="Chat"
          className="!fixed !left-px !top-0"
          deteksiDeteksi="../../../static/img/deteksi-3.svg"
          logoPlaceholderGroup="../../../static/img/group-7-2.png"
          setelanDivClassName="!tracking-[0] !text-[16px] ![font-style:unset] !font-bold ![font-family:'Nunito',Helvetica] !leading-[22.4px]"
          setelanPropertyDefaultClassName="!flex-[0_0_auto] !bg-secondary-1"
          sideBarDivClassName="!text-primary-2 !tracking-[0] !text-[16px] ![font-style:unset] !font-normal ![font-family:'Nunito',Helvetica] !leading-[22.4px]"
          tagihanText="Pemasukan Iuran"
        />
        <NavbarUserFitur
          className="!fixed !left-[324px] !top-0"
          profilArrowDown="../../../static/img/arrow-down-2-3.svg"
          profilOpenartImage="../../../static/img/openart-image-nfswrdqc-1711466557108-raw-2-3.png"
          profilText="Admin"
        />
      </div>
    </div>
  );
};
