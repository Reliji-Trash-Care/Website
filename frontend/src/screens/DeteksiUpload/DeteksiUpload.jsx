import React from "react";
import { Button } from "../../components/Button";
import { NavbarUserFitur } from "../../components/NavbarUserFitur";
import { SideBarWrapper } from "../../components/SideBarWrapper";
import { UploadGambar } from "../../components/UploadGambar";

export const DeteksiUpload = () => {

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-primary-1 overflow-hidden w-[1440px] h-[744px] relative">
        <div className="absolute w-[1674px] h-[1785px] top-[88px] left-[280px]">
          <div className="absolute w-[1674px] h-[1674px] top-[111px] left-0 bg-[#397d54b2] rounded-[837px] blur-[550px] opacity-[0.36]" />
          <div className="absolute w-[1035px] h-[568px] top-0 left-[44px] bg-primary-1 rounded-[15px] shadow-drop-shadow-2" />
          <div className="flex flex-col w-[462px] h-[450px] items-start gap-[16px] p-[24px] absolute top-[67px] left-[80px] bg-primary-1 rounded-[var(--brand-radi-xl)] shadow-drop-shadow-2">
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
            <UploadGambar
              className="!border-primary-2 !h-[243px] !bg-secondary-1 !w-[414px]"
              defaultDivClassName="!mr-[-3.50px] !ml-[-3.50px]"
              defaultText="Foto Sampah.jpg"
              hasText={false}
              hasUpload={false}
              visible={false}
            />
            <p className="relative self-stretch h-[20px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-variable-collection-darkgrey text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-2-regular-font-style)]">
              Format yang didukung .jpg dan .png
            </p>
            <div className="flex w-[414px] items-start justify-end gap-[16px] relative flex-[0_0_auto] mb-[-10.00px]">
              <Button
                className="!border-primary-2 !border-[3px] !border-solid !flex !bg-primary-1 !w-[109px]"
                divClassName="!mt-[-3.00px] !text-primary-2"
                property1="default"
                text="Hapus"
              />
              <Button className="!flex-[0_0_auto]" property1="default" text="Selanjutnya" />
            </div>
          </div>
          <div className="flex flex-col w-[462px] h-[450px] items-start gap-[16px] p-[24px] absolute top-[67px] left-[578px] bg-primary-1 rounded-[var(--brand-radi-xl)] shadow-drop-shadow-2">
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
            <div className="bg-primary-1 border border-solid flex flex-col w-[414px] h-[243px] items-center justify-center gap-[12px] pt-[var(--brand-spacing-lg)] pr-[var(--brand-spacing-lg)] pb-[var(--brand-spacing-lg)] pl-[var(--brand-spacing-lg)] relative rounded-[var(--brand-radi-mlg)] border-primary-2">
              <div className="flex flex-col items-center gap-[8px] relative self-stretch w-full flex-[0_0_auto] mt-[-13.00px] mb-[-13.00px]">
                <img className="relative w-[224px] h-[178px] object-cover" alt="Glass" src="../../../static/img/glass1-1.png" />
                <button className="all-[unset] box-border flex w-[136px] h-[35px] items-center justify-center gap-[10px] px-[16px] py-[10px] relative bg-primary-1 rounded-[10px] border-[1.5px] border-solid border-primary-2">
                  <button className="all-[unset] box-border relative w-fit mt-[-4.00px] mb-[-1.00px] font-body-2-bold font-[number:var(--body-2-bold-font-weight)] text-primary-2 text-[length:var(--body-2-bold-font-size)] text-center tracking-[var(--body-2-bold-letter-spacing)] leading-[var(--body-2-bold-line-height)] whitespace-nowrap [font-style:var(--body-2-bold-font-style)]"
                  >
                    Ambil Gambar
                  </button>
                </button>
              </div>
            </div>
            <p className="relative self-stretch h-[20px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-variable-collection-darkgrey text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-2-regular-font-style)]">
              Format yang didukung .jpg dan .png
            </p>
            <div className="flex w-[414px] items-start justify-end gap-[16px] relative flex-[0_0_auto] mb-[-10.00px]">
              <Button
                className="!border-primary-2 !border-[3px] !border-solid !flex !bg-primary-1 !w-[109px]"
                divClassName="!mt-[-3.00px] !text-primary-2"
                property1="default"
                text="Hapus"
              />
              <Button className="!flex-[0_0_auto]" property1="default" text="Selanjutnya" />
            </div>
          </div>
        </div>
        {/* <div className="inline-flex items-start gap-[9.46px] px-[30.28px] py-[15.14px] absolute top-[-1816px] left-[321px] bg-primary-2 rounded-[10px] shadow-[0px_3.78px_4.73px_#00000066]">
          <div className="relative w-fit mt-[-0.95px] [font-family:'Nunito',Helvetica] font-bold text-[#f3ffd1] text-[15.1px] text-center tracking-[0.08px] leading-[18.2px] whitespace-nowrap">
            Bayar
          </div>
        </div> */}
        <SideBarWrapper
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
