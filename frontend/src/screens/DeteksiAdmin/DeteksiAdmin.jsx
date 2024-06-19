import React from "react";
import { Button } from "../../components/Button";
import { Default } from "../../components/Default";
import { Divider } from "../../components/Divider";
import { NavbarUserFitur } from "../../components/NavbarUserFitur";
import SideBarAdmin from "../../components/SideBarAdmin/SideBarAdmin";

export const DeteksiAdmin = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-primary-1 overflow-hidden w-[1440px] h-[744px] relative">
        <div className="absolute w-[1674px] h-[1785px] top-[88px] left-[242px]">
          <div className="absolute w-[1674px] h-[1674px] top-[111px] left-0 bg-[#397d54b2] rounded-[837px] blur-[550px] opacity-[0.36]" />
          <div className="absolute w-[1035px] h-[568px] top-0 left-[82px] bg-primary-1 rounded-[15px] shadow-drop-shadow-2" />
          <div className="shadow-shadow-centreop4 flex flex-col w-[462px] h-[450px] items-start gap-[16px] p-[24px] absolute top-[67px] left-[616px] bg-primary-1 rounded-[var(--brand-radi-xl)]">
            <div className="relative w-[414px] h-[61px] rounded-[10px]">
              <div className="flex flex-col w-[414px] h-[48px] items-start gap-[var(--brand-spacing-xxxs)] relative top-[7px]">
                <div className="relative self-stretch mt-[-1.00px] font-heading-8-bold font-[number:var(--heading-8-bold-font-weight)] text-[color:var(--alias-textcolor-default)] text-[length:var(--heading-8-bold-font-size)] tracking-[var(--heading-8-bold-letter-spacing)] leading-[var(--heading-8-bold-line-height)] [font-style:var(--heading-8-bold-font-style)]">
                  Scan Sampah
                </div>
                <p className="relative self-stretch h-[20px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-[color:var(--variable-collection-pske-blsck-ini-ges)] text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-2-regular-font-style)]">
                  Aktifkan kamera untuk mendeteksi sampah
                </p>
              </div>
            </div>
            <div className="flex flex-col w-[414px] h-[243px] items-center justify-center gap-[12px] pt-[var(--brand-spacing-lg)] pr-[var(--brand-spacing-lg)] pb-[var(--brand-spacing-lg)] pl-[var(--brand-spacing-lg)] relative bg-primary-1 rounded-[var(--brand-radi-mlg)] border border-dashed border-primary-2">
              <img className="relative w-[45px] h-[44px]" alt="Camera" src="../../../static/img/camera.svg" />
              <div className="flex flex-col items-center gap-[8px] self-stretch w-full relative flex-[0_0_auto]">
                <Default className="!w-[136px]" text="Buka Kamera" />
              </div>
            </div>
            <p className="relative self-stretch h-[20px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-variable-collection-darkgrey text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-2-regular-font-style)]">
              Format yang didukung .jpg dan .png
            </p>
            <div className="flex w-[414px] items-start justify-end gap-[16px] relative flex-[0_0_auto] mb-[-10.00px]">
              <Button className="!flex-[0_0_auto]" property1="default" text="Selanjutnya" />
            </div>
          </div>
          <div className="shadow-drop-shadow-2 flex flex-col w-[462px] h-[450px] items-start gap-[16px] p-[24px] absolute top-[67px] left-[616px] bg-primary-1 rounded-[var(--brand-radi-xl)]">
            <div className="relative w-[414px] h-[61px] rounded-[10px]">
              <div className="flex flex-col w-[414px] h-[48px] items-start gap-[var(--brand-spacing-xxxs)] relative top-[7px]">
                <div className="relative self-stretch mt-[-1.00px] font-heading-8-bold font-[number:var(--heading-8-bold-font-weight)] text-tersier-2 text-[length:var(--heading-8-bold-font-size)] tracking-[var(--heading-8-bold-letter-spacing)] leading-[var(--heading-8-bold-line-height)] [font-style:var(--heading-8-bold-font-style)]">
                  Scan Sampah
                </div>
                <p className="relative self-stretch h-[20px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-tersier-2 text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-2-regular-font-style)]">
                  Aktifkan kamera untuk mendeteksi sampah
                </p>
              </div>
            </div>
            <div className="flex flex-col w-[414px] h-[243px] items-center justify-center gap-[12px] pt-[var(--brand-spacing-lg)] pr-[var(--brand-spacing-lg)] pb-[var(--brand-spacing-lg)] pl-[var(--brand-spacing-lg)] relative bg-primary-1 rounded-[var(--brand-radi-mlg)] border border-dashed border-primary-2">
              <img className="relative w-[45px] h-[44px]" alt="Camera" src="../../../static/img/camera-1.svg" />
              <div className="flex flex-col items-center gap-[8px] self-stretch w-full relative flex-[0_0_auto]">
                <Default className="!w-[136px]" text="Buka Kamera" />
              </div>
            </div>
            <p className="relative self-stretch h-[20px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-variable-collection-darkgrey text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-2-regular-font-style)]">
              Format yang didukung .jpg dan .png
            </p>
            <div className="flex w-[414px] items-start justify-end gap-[16px] relative flex-[0_0_auto] mb-[-10.00px]">
              <Button className="!flex-[0_0_auto]" property1="default" text="Selanjutnya" />
            </div>
          </div>
          <div className="flex flex-col w-[462px] h-[450px] items-start gap-[16px] p-[24px] absolute top-[67px] left-[128px] bg-primary-1 rounded-[var(--brand-radi-xl)] shadow-drop-shadow-2">
            <div className="relative w-[414px] h-[61px] rounded-[10px]">
              <div className="flex flex-col w-[414px] h-[48px] items-start gap-[var(--brand-spacing-xxxs)] relative top-[7px]">
                <div className="relative self-stretch mt-[-1.00px] font-heading-8-bold font-[number:var(--heading-8-bold-font-weight)] text-tersier-2 text-[length:var(--heading-8-bold-font-size)] tracking-[var(--heading-8-bold-letter-spacing)] leading-[var(--heading-8-bold-line-height)] [font-style:var(--heading-8-bold-font-style)]">
                  Upload Gambar
                </div>
                <p className="relative self-stretch h-[20px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-tersier-2 text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-2-regular-font-style)]">
                  Tambahkan gambar untuk mendeteksi sampah
                </p>
              </div>
            </div>
            <div className="flex flex-col w-[414px] h-[243px] items-center justify-center gap-[12px] pt-[var(--brand-spacing-lg)] pr-[var(--brand-spacing-lg)] pb-[var(--brand-spacing-lg)] pl-[var(--brand-spacing-lg)] relative bg-alias-bgcolor-light rounded-[var(--brand-radi-mlg)] border border-dashed border-alias-strokecolor-primary">
              <img className="relative w-[42px] h-[42px]" alt="Upload" src="../../../static/img/upload.svg" />
              <div className="flex flex-col items-center gap-[8px] self-stretch w-full relative flex-[0_0_auto]">
                <div className="flex items-start justify-center gap-[4px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-tersier-2 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                    Upload disini
                  </div>
                </div>
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
                <Button
                  className="!border-primary-2 !flex-[0_0_auto] !border-[3px] !border-solid !flex !bg-primary-1 !w-[149px]"
                  divClassName="!mr-[-4.50px] !mt-[-3.00px] !text-primary-2 !ml-[-4.50px]"
                  property1="default"
                  text="Masukkan file anda"
                />
              </div>
            </div>
            <p className="relative self-stretch h-[20px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-variable-collection-darkgrey text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-2-regular-font-style)]">
              Format yang didukung .jpg dan .png
            </p>
            <div className="flex w-[414px] items-start justify-end gap-[16px] relative flex-[0_0_auto] mb-[-10.00px]">
              <Button className="!flex-[0_0_auto]" property1="default" text="Selanjutnya" />
            </div>
          </div>
        </div>
        <div className="inline-flex items-start gap-[9.46px] px-[30.28px] py-[15.14px] absolute top-[-1816px] left-[321px] bg-primary-2 rounded-[10px] shadow-[0px_3.78px_4.73px_#00000066]">
          <div className="mt-[-0.95px] [font-family:'Nunito',Helvetica] font-bold text-[#f3ffd1] text-[15.1px] tracking-[0.08px] leading-[18.2px] relative w-fit text-center whitespace-nowrap">
            Bayar
          </div>
        </div>
        <SideBarAdmin
          chatDivClassName="!text-primary-2 !tracking-[0] !text-[16px] ![font-style:unset] !font-normal ![font-family:'Nunito',Helvetica] !leading-[22.4px]"
          className="!h-[744px] !fixed !left-0 !top-0"
          deteksiDetekaiClassName="!tracking-[0] !text-[16px] ![font-style:unset] !font-bold ![font-family:'Nunito',Helvetica] !leading-[22.4px]"
          deteksiDeteksi="../../../static/img/deteksi-3.svg"
          deteksiPropertyDefaultClassName="!flex-[0_0_auto] !bg-additional-1"
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
