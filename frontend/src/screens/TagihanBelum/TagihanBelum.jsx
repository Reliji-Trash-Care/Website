import React from "react";
import { Button } from "../../components/Button";
import { MenuItem } from "../../components/MenuItem";
import { NavbarUserFitur } from "../../components/NavbarUserFitur";
import { SideBarWrapper } from "../../components/SideBarWrapper";
import { TagihanPilih } from "../TagihanPilih/TagihanPilih";

export const TagihanBelum = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-primary-1 overflow-hidden w-[1440px] h-[772px] relative">
        <div className="absolute w-[1674px] h-[1792px] top-[172px] left-[300px]">
          <div className="absolute w-[1674px] h-[1674px] top-[118px] left-0 bg-[#397d54b2] rounded-[837px] blur-[550px] opacity-[0.36]" />
          <div className="absolute w-[996px] h-[514px] top-0 left-[24px] bg-primary-1 rounded-[15px] shadow-drop-shadow-2" />
          <p className="absolute top-[252px] left-[48px] [font-family:'Nunito',Helvetica] font-normal text-tersier-2 text-[12px] tracking-[0] leading-[16.8px] whitespace-nowrap">
            {" "}
            Bayar sebelum Mei 2024 dengan metode pembayaran yang dipilih
          </p>
          <div className="flex flex-col w-[462px] items-start absolute top-[24px] left-[48px] shadow-inner">
            <div className="flex items-center gap-[50px] p-[24px] relative self-stretch w-full flex-[0_0_auto] bg-primary-2 rounded-[10px_10px_0px_0px]">
              <div className="flex flex-col items-start justify-center gap-[12px] relative flex-1 grow">
                <div className="inline-flex items-center gap-[12px] relative flex-[0_0_auto] mr-[-42.00px]">
                  <img className="relative w-[24px] h-[24px]" alt="Wallet" src="../../../static/img/wallet-3.svg" />
                  <div className="relative w-fit font-body-1-semibold font-[number:var(--body-1-semibold-font-weight)] text-primary-1 text-[length:var(--body-1-semibold-font-size)] tracking-[var(--body-1-semibold-letter-spacing)] leading-[var(--body-1-semibold-line-height)] whitespace-nowrap [font-style:var(--body-1-semibold-font-style)]">
                    Tagihan Bulan April 2024
                  </div>
                </div>
                <div className="inline-flex items-end gap-[12px] relative flex-[0_0_auto] mr-[-32.00px]">
                  <img className="relative w-[24px] h-[24px]" alt="Danger" src="../../../static/img/danger.svg" />
                  <div className="relative w-fit font-body-1-semibold font-[number:var(--body-1-semibold-font-weight)] text-primary-1 text-[length:var(--body-1-semibold-font-size)] tracking-[var(--body-1-semibold-letter-spacing)] leading-[var(--body-1-semibold-line-height)] whitespace-nowrap [font-style:var(--body-1-semibold-font-style)]">
                    Denda Bulan April 2024
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-center gap-[15px] relative flex-1 grow">
                <div className="inline-flex items-center gap-[12px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-body-1-semibold font-[number:var(--body-1-semibold-font-weight)] text-primary-1 text-[length:var(--body-1-semibold-font-size)] tracking-[var(--body-1-semibold-letter-spacing)] leading-[var(--body-1-semibold-line-height)] whitespace-nowrap [font-style:var(--body-1-semibold-font-style)]">
                    Rp. 10.000
                  </div>
                </div>
                <div className="inline-flex items-end gap-[12px] relative flex-[0_0_auto]">
                  <div className="font-[number:var(--body-1-semibold-font-weight)] text-primary-1 text-[length:var(--body-1-semibold-font-size)] leading-[var(--body-1-semibold-line-height)] relative w-fit mt-[-1.00px] font-body-1-semibold tracking-[var(--body-1-semibold-letter-spacing)] whitespace-nowrap [font-style:var(--body-1-semibold-font-style)]">
                    -
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[227px] p-[24px] relative self-stretch w-full flex-[0_0_auto] bg-additional-1 rounded-[0px_0px_10px_10px]">
              <div className="flex flex-col items-start justify-center gap-[12px] relative flex-1 grow">
                <div className="inline-flex items-center gap-[12px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-body-3-regular font-[number:var(--body-3-regular-font-weight)] text-variable-collection-pure-black text-[length:var(--body-3-regular-font-size)] tracking-[var(--body-3-regular-letter-spacing)] leading-[var(--body-3-regular-line-height)] whitespace-nowrap [font-style:var(--body-3-regular-font-style)]">
                    Total Tagihan
                  </div>
                </div>
                <div className="inline-flex items-end gap-[12px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-body-3-regular font-[number:var(--body-3-regular-font-weight)] text-variable-collection-pure-black text-[length:var(--body-3-regular-font-size)] tracking-[var(--body-3-regular-letter-spacing)] leading-[var(--body-3-regular-line-height)] whitespace-nowrap [font-style:var(--body-3-regular-font-style)]">
                    Total Denda
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-center gap-[15px] relative flex-1 grow">
                <div className="inline-flex items-center gap-[12px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-body-3-regular font-[number:var(--body-3-regular-font-weight)] text-variable-collection-pure-black text-[length:var(--body-3-regular-font-size)] tracking-[var(--body-3-regular-letter-spacing)] leading-[var(--body-3-regular-line-height)] whitespace-nowrap [font-style:var(--body-3-regular-font-style)]">
                    Rp. 10.000
                  </div>
                </div>
                <div className="inline-flex items-end gap-[12px] relative flex-[0_0_auto]">
                  <div className="font-[number:var(--body-3-regular-font-weight)] text-variable-collection-pure-black text-[length:var(--body-3-regular-font-size)] leading-[var(--body-3-regular-line-height)] relative w-fit mt-[-1.00px] font-body-3-regular tracking-[var(--body-3-regular-letter-spacing)] whitespace-nowrap [font-style:var(--body-3-regular-font-style)]">
                    -
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button className="!cursor-pointer !absolute !left-[375px] !top-[318px]" property1="default" text="Bayar Sekarang" navigateTo="/tagihanpilih"/>
          <img
            className="absolute w-[482px] h-px top-[293px] left-[48px] object-cover"
            alt="Line"
            src="../../../static/img/line-23.svg"
          />
        </div>
        <div className="inline-flex items-start gap-[9.46px] px-[30.28px] py-[15.14px] absolute top-[-1788px] left-[321px] bg-primary-2 rounded-[10px] shadow-[0px_3.78px_4.73px_#00000066]">
          <div className="relative w-fit mt-[-0.95px] [font-family:'Nunito',Helvetica] font-bold text-[#f3ffd1] text-[15.1px] text-center tracking-[0.08px] leading-[18.2px] whitespace-nowrap">
            Bayar
          </div>
        </div>
        <NavbarUserFitur
          className="!absolute !left-[324px] !top-0"
          profilArrowDown="../../../static/img/arrow-down-2-4.svg"
          profilOpenartImage="../../../static/img/openart-image-nfswrdqc-1711466557108-raw-2-4.png"
        />
        <div className="absolute w-[996px] h-[62px] top-[86px] left-[324px] bg-primary-1 rounded-[10px] shadow-drop-shadow-2">
          <img className="absolute w-[337px] h-[5px] top-[57px] left-0" alt="Line" src="../../../static/img/line-21.svg" />
          <MenuItem
            className="!cursor-pointer !absolute !left-[107px] !top-[10px]"
            divClassName="!text-tersier-2"
            property1="default"
            text="Belum Bayar"
            navigateTo="/tagihanbelum"
          />
          <MenuItem
            className="!cursor-pointer !px-5 !py-[10px] !absolute !left-[428px] !top-[10px]"
            divClassName="!text-tersier-2"
            property1="default"
            text="Status Pembayaran"
            navigateTo="/tagihanstatus"
          />
          <MenuItem
            className="!cursor-pointer !absolute !left-[785px] !top-[10px]"
            divClassName="!text-tersier-2"
            property1="default"
            text="Selesai"
            navigateTo="/tagihanselesai"
          />
        </div>
        <SideBarWrapper
          className="!h-[772px] !rounded-[0px_15px_0px_0px] !fixed !left-0 !top-0"
          deteksiDeteksi="../../../static/img/deteksi-3.svg"
          logoPlaceholderGroup="../../../static/img/group-7-2.png"
          tagihanDivClassName="!text-primary-2 !tracking-[0] !text-[16px] ![font-style:unset] !font-bold ![font-family:'Nunito',Helvetica] !leading-[22.4px]"
          tagihanClassName="!flex-[0_0_auto] !bg-additional-1"
        />
        <NavbarUserFitur
          className="!fixed !left-[324px] !top-0"
          profilArrowDown="../../../static/img/arrow-down-2-4.svg"
          profilOpenartImage="../../../static/img/openart-image-nfswrdqc-1711466557108-raw-2-4.png"
        />
      </div>
    </div>
  );
};
