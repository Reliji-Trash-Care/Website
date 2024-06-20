import React from "react";
import { Calendar } from 'rsuite';
import { NavbarUserFitur } from "../../components/NavbarUserFitur";
import { SideBarWrapper } from "../../components/SideBarWrapper";
import { Icon1 } from "../../icons/Icon1";
import { TypeFiChevronLeftSize24ColorWhite } from "../../icons/TypeFiChevronLeftSize24ColorWhite";
import { Button } from 'rsuite';
import 'rsuite/styles/index.less'; // or 'rsuite/dist/rsuite.min.css'

function App() {
  return <Button appearance="primary">Hello World</Button>;
}

export default App;

export const JadwalSampahUser = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-primary-1 overflow-hidden w-[1440px] h-[772px] relative">
        <div className="absolute w-[1674px] h-[1787px] top-[86px] left-[242px]">
          <div className="absolute w-[1674px] h-[1674px] top-[113px] left-0 bg-[#397d54b2] rounded-[837px] blur-[550px] opacity-[0.36]" />
          <div className="flex flex-col w-[690px] h-[600px] items-start gap-[16px] p-[16px] absolute top-0 left-[388px] bg-primary-1 rounded-[10px] shadow-drop-shadow">
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
              </div>
              <div className="flex flex-col items-start gap-px relative flex-1 self-stretch w-full grow">
                <Calendar />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[282px] h-[97px] items-start justify-center gap-[10px] px-[16px] py-[8px] absolute top-[503px] left-[82px] bg-primary-1 rounded-[10px] shadow-drop-shadow">
            <div className="flex flex-wrap w-[196px] items-start gap-[7px_18px] relative flex-[0_0_auto]">
              <div className="relative w-[24px] h-[24px] bg-primary-2 rounded-[12px]" />
              <div className="relative w-fit mt-[-1.00px] font-body-1-regular font-[number:var(--body-1-regular-font-weight)] text-tersier-2 text-[length:var(--body-1-regular-font-size)] text-center tracking-[var(--body-1-regular-letter-spacing)] leading-[var(--body-1-regular-line-height)] whitespace-nowrap [font-style:var(--body-1-regular-font-style)]">
                Pengangkutan sampah
              </div>
              <div className="relative w-[24px] h-[24px] bg-additional-1 rounded-[12px]" />
              <div className="relative w-fit font-body-1-regular font-[number:var(--body-1-regular-font-weight)] text-tersier-2 text-[length:var(--body-1-regular-font-size)] text-center tracking-[var(--body-1-regular-letter-spacing)] leading-[var(--body-1-regular-line-height)] whitespace-nowrap [font-style:var(--body-1-regular-font-style)]">
                Pembayaran iuran
              </div>
            </div>
          </div>
          <img className="absolute w-[283px] h-[312px] top-[99px] left-[81px]" alt="Image" src="../../../static/img/image-4.png" />
        </div>
        <SideBarWrapper
          className="!h-[772px] !rounded-[0px_15px_0px_0px] !fixed !left-0 !top-0"
          deteksiDeteksi="../../../static/img/deteksi-3.svg"
          jadwalDivClassName="!text-primary-2 !tracking-[0] !text-[16px] ![font-style:unset] !font-bold ![font-family:'Nunito',Helvetica] !leading-[22.4px]"
          jadwalPropertyDefaultClassName="!flex-[0_0_auto] !bg-additional-1"
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
