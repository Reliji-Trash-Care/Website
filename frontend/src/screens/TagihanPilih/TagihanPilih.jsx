import React from "react";
import { BankBri } from "../../components/BankBri";
import { BankMandiri } from "../../components/BankMandiri";
import { EwalletDana } from "../../components/EwalletDana";
import { EwalletGopay } from "../../components/EwalletGopay";
import { MenuItem } from "../../components/MenuItem";
import { NavbarUserFitur } from "../../components/NavbarUserFitur";
import { SelectButton } from "../../components/SelectButton";
import { SideBarWrapper } from "../../components/SideBarWrapper";

export const TagihanPilih = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-primary-1 overflow-hidden w-[1440px] h-[936px] relative">
        <div className="absolute w-[1674px] h-[1792px] top-[172px] left-[300px]">
          <div className="absolute w-[1674px] h-[1674px] top-[118px] left-0 bg-[#397d54b2] rounded-[837px] blur-[550px] opacity-[0.36]" />
          <div className="absolute w-[996px] h-[678px] top-0 left-[24px] bg-primary-1 rounded-[15px] shadow-drop-shadow-2" />
          <p className="absolute top-[252px] left-[48px] [font-family:'Nunito',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[16.8px] whitespace-nowrap">
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
          <div className="flex flex-col w-[462px] items-start gap-[24px] p-[24px] absolute top-[194px] left-[534px] bg-primary-1 rounded-[10px] shadow-drop-shadow-2">
            <div className="flex flex-col w-[415px] items-start gap-[15px] relative flex-[0_0_auto] mr-[-1.00px]">
              <div className="relative w-fit mt-[-1.00px] font-heading-8-semibold font-[number:var(--heading-8-semibold-font-weight)] text-tersier-2 text-[length:var(--heading-8-semibold-font-size)] text-center tracking-[var(--heading-8-semibold-letter-spacing)] leading-[var(--heading-8-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-8-semibold-font-style)]">
                Dompet Elektronik
              </div>
              <img className="relative w-[414px] h-px mb-[-0.50px] object-cover" alt="Line" src="../../../static/img/line-15-2.svg" />
            </div>
            <div className="inline-flex items-center gap-[24px] relative flex-[0_0_auto]">
              <input onClick={() => window.location.href = '/'} type="radio" className="!size-8 !border-tersier-2 !relative" />
              {/* <SelectButton className="!border-tersier-2 !relative !bg-primary-1" property1="default" /> */}
              <EwalletDana
                DANAClassName="!h-[40px]"
                className="!rounded-[15px] !h-[40px] !w-[56px] !relative"
                logoClassName="!h-[13px] bg-[url(../../../static/img/shape-1.svg)] !left-[7px] !w-[45px] !top-[15px]"
                overlapGroupClassName="!h-[42px] !w-[58px]"
              />
              <div className="relative w-fit font-heading-8-semibold font-[number:var(--heading-8-semibold-font-weight)] text-tersier-2 text-[length:var(--heading-8-semibold-font-size)] text-center tracking-[var(--heading-8-semibold-letter-spacing)] leading-[var(--heading-8-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-8-semibold-font-style)]">
                Dana
              </div>
            </div>
            <div className="inline-flex items-center gap-[24px] relative flex-[0_0_auto]">
            <input onClick={() => window.location.href = '/'} type="radio" className="!size-8 !border-tersier-2 !relative" />
              {/* <SelectButton className="!border-tersier-2 !relative !bg-primary-1" property1="default" /> */}
              <EwalletGopay
                GOPAYClassName="!h-[40px]"
                className="!rounded-[15px] !h-[40px] !w-[56px] !relative"
                combinedShape="../../../static/img/combined-shape-2.svg"
                combinedShapeClassName="!h-[10px] !w-[10px]"
                combinedShapeClassNameOverride="!h-[9px] !left-[13px] !w-[34px] !top-px"
                img="../../../static/img/combined-shape-3.svg"
                logoClassName="!h-[10px] !left-[6px] !w-[46px] !top-[16px]"
                overlapGroupClassName="!h-[42px] !bg-primary-1 !w-[58px]"
              />
              <div className="relative w-fit font-heading-8-semibold font-[number:var(--heading-8-semibold-font-weight)] text-tersier-2 text-[length:var(--heading-8-semibold-font-size)] text-center tracking-[var(--heading-8-semibold-letter-spacing)] leading-[var(--heading-8-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-8-semibold-font-style)]">
                Gopay
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[462px] items-start justify-center gap-[24px] p-[24px] absolute top-[436px] left-[534px] bg-primary-1 rounded-[10px] shadow-drop-shadow-2">
            <div className="flex flex-col w-[415px] items-start gap-[15px] relative flex-[0_0_auto] mr-[-1.00px]">
              <div className="relative w-fit mt-[-1.00px] font-heading-8-semibold font-[number:var(--heading-8-semibold-font-weight)] text-tersier-2 text-[length:var(--heading-8-semibold-font-size)] text-center tracking-[var(--heading-8-semibold-letter-spacing)] leading-[var(--heading-8-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-8-semibold-font-style)]">
                Transfer Virtual Account
              </div>
              <img className="relative w-[414px] h-px mb-[-0.50px] object-cover" alt="Line" src="../../../static/img/line-15-2.svg" />
            </div>
            <div className="inline-flex items-center gap-[24px] relative flex-[0_0_auto]">
              {/* <SelectButton className="!border-tersier-2 !relative !bg-primary-1" property1="default" /> */}
              <input onClick={() => window.location.href = '/'} type="radio" className="!size-8 !border-tersier-2 !relative" />
              <BankBri
                BRIClassName="!h-[40px]"
                className="!h-[40px] !w-[56px] !relative"
                logo="../../../static/img/logo-1.png"
                logoClassName="!h-[12px] !left-[3px] !w-[50px] !top-[14px]"
              />
              <div className="relative w-fit font-heading-8-semibold font-[number:var(--heading-8-semibold-font-weight)] text-tersier-2 text-[length:var(--heading-8-semibold-font-size)] text-center tracking-[var(--heading-8-semibold-letter-spacing)] leading-[var(--heading-8-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-8-semibold-font-style)]">
                Bank BRI
              </div>
            </div>
            <div className="inline-flex items-center gap-[24px] relative flex-[0_0_auto]">
            <input onClick={() => window.location.href = '/'} type="radio" className="!size-8 !border-tersier-2 !relative" />
              {/* <SelectButton className="!border-tersier-2 !relative !bg-primary-1" property1="default" /> */}
              <BankMandiri
                MANDIRIClassName="!h-[40px]"
                className="!h-[40px] !w-[56px] !relative"
                fill="../../../static/img/fill-1-1.svg"
                fill1="../../../static/img/fill-5-1.svg"
                fill2="../../../static/img/fill-7-1.svg"
                fill3="../../../static/img/fill-9-1.svg"
                fill4="../../../static/img/fill-11-1.svg"
                fill5="../../../static/img/fill-12-1.svg"
                fillClassName="!h-[6px] !w-[9px] !top-[2px]"
                fillClassName1="!h-[6px] !left-[29px]"
                fillClassName2="!h-[6px] !left-[32px] !w-[3px] !top-[2px]"
                fillClassName3="!h-[6px] !left-[36px]"
                fillClassNameOverride="!h-[7px] !left-[10px] !w-[5px] !top-[2px]"
                flag="../../../static/img/flag-1.svg"
                flagClassName="!h-[6px] !left-[19px] !w-[29px]"
                img="../../../static/img/fill-3-1.svg"
                imgClassName="!h-[6px] !left-[16px] !w-[6px] !top-[2px]"
                imgClassNameOverride="!h-[9px] !left-[22px] !w-[6px]"
                logoClassName="!h-[14px] !left-[4px] !w-[48px] !top-[11px]"
                logoMandiriClassName="!h-[9px] !w-[37px] !top-[6px]"
                overlapGroupClassName="!h-[14px]"
              />
              <div className="relative w-fit font-heading-8-semibold font-[number:var(--heading-8-semibold-font-weight)] text-tersier-2 text-[length:var(--heading-8-semibold-font-size)] text-center tracking-[var(--heading-8-semibold-letter-spacing)] leading-[var(--heading-8-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-8-semibold-font-style)]">
                Bank Mandiri
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[462px] items-start justify-center gap-[24px] p-[24px] absolute top-[24px] left-[535px] bg-primary-1 rounded-[10px] shadow-drop-shadow-2">
            <div className="flex flex-col w-[415px] items-start gap-[15px] relative flex-[0_0_auto] mr-[-1.00px]">
              <div className="relative w-fit mt-[-1.00px] font-heading-8-semibold font-[number:var(--heading-8-semibold-font-weight)] text-tersier-2 text-[length:var(--heading-8-semibold-font-size)] text-center tracking-[var(--heading-8-semibold-letter-spacing)] leading-[var(--heading-8-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-8-semibold-font-style)]">
                Pembayaran Langsung
              </div>
              <img className="relative w-[414px] h-px mb-[-0.50px] object-cover" alt="Line" src="../../../static/img/line-15-2.svg" />
            </div>
            <div className="inline-flex items-center gap-[24px] relative flex-[0_0_auto]">
              <input onClick={() => window.location.href = '/whatsapp'} type="radio" className="!size-8 !border-tersier-2 !relative" />
              <img className="relative w-[32px] h-[32px]" alt="Call" src="../../../static/img/call.png" />
              <div className="relative w-fit font-heading-8-semibold font-[number:var(--heading-8-semibold-font-weight)] text-tersier-2 text-[length:var(--heading-8-semibold-font-size)] text-center tracking-[var(--heading-8-semibold-letter-spacing)] leading-[var(--heading-8-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-8-semibold-font-style)]">
                Hubungi Admin
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex items-start gap-[9.46px] px-[30.28px] py-[15.14px] absolute top-[-1624px] left-[321px] bg-primary-2 rounded-[10px] shadow-[0px_3.78px_4.73px_#00000066]">
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
          className="!h-[936px] !rounded-[0px_15px_0px_0px] !fixed !left-0 !top-0"
          deteksiDeteksi="../../../static/img/deteksi-3.svg"
          logoPlaceholderGroup="../../../static/img/group-7-2.png"
          tagihanDivClassName="!text-primary-2 !tracking-[var(--body-1-bold-letter-spacing)] !text-[length:var(--body-1-bold-font-size)] ![font-style:var(--body-1-bold-font-style)] !font-[number:var(--body-1-bold-font-weight)] !font-body-1-bold !leading-[var(--body-1-bold-line-height)]"
          tagihanClassName="!flex-[0_0_auto] !bg-secondary-1"
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
