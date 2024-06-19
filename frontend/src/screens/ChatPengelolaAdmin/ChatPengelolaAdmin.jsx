import React from "react";
import { NavbarUserFitur } from "../../components/NavbarUserFitur";
import { SideBarWrapper } from "../../components/SideBarWrapper";
import SideBarAdmin from "../../components/SideBarAdmin/SideBarAdmin";

export const ChatPengelolaAdmin = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-primary-1 overflow-hidden w-[1440px] h-[1024px] relative">
        <div className="absolute w-[1674px] h-[1799px] top-[74px] left-[242px]">
          <div className="w-[1674px] h-[1674px] top-[125px] bg-primary-2 rounded-[837px] blur-[550px] opacity-[0.36] absolute left-0" />
          <div className="absolute w-[384px] h-[635px] top-[12px] left-[82px] bg-primary-1 rounded-[15px] shadow-drop-shadow-2" />
          <div className="inline-flex items-center gap-[12px] absolute top-[43px] left-[103px]">
            <img className="relative w-[24px] h-[24px]" alt="Chat" src="../../../static/img/chat-3.svg" />
            <div className="relative w-fit mt-[-1.00px] font-heading-8-semibold font-[number:var(--heading-8-semibold-font-weight)] text-primary-2 text-[length:var(--heading-8-semibold-font-size)] text-center tracking-[var(--heading-8-semibold-letter-spacing)] leading-[var(--heading-8-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-8-semibold-font-style)]">
              Kotak Masuk
            </div>
          </div>
          <img className="absolute w-[612px] h-[659px] top-0 left-[478px]" alt="Chat" src="../../../static/img/chat-4.png" />
          <img
            className="absolute w-[384px] h-px top-[97px] left-[82px] object-cover"
            alt="Line"
            src="../../../static/img/line-20.svg"
          />
          <div className="inline-flex flex-col items-start gap-[10px] absolute top-[127px] left-[103px]">
            <div className="inline-flex flex-col items-end gap-[34px] relative flex-[0_0_auto]">
              <div className="relative w-[345px] h-[48px] mr-[-4.00px]">
                <div className="relative w-[343px] h-[48px]">
                  <div className="absolute top-0 left-[61px] font-heading-8-semibold font-[number:var(--heading-8-semibold-font-weight)] text-[#0c1d0a] text-[length:var(--heading-8-semibold-font-size)] text-center tracking-[var(--heading-8-semibold-letter-spacing)] leading-[var(--heading-8-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-8-semibold-font-style)]">
                    Sopia
                  </div>
                  <p className="absolute w-[259px] top-[24px] left-[61px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-variable-collection-cht-udh-d-baca text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] [font-style:var(--body-2-regular-font-style)]">
                    Jika jumlah sampah saya lebih banyak...
                  </p>
                  <div className="absolute w-[343px] h-[48px] top-0 left-0">
                    <div className="relative h-[48px]">
                      <div className="top-[11px] left-[313px] text-primary-2 absolute w-[28px] font-caption-2-bold font-[number:var(--caption-2-bold-font-weight)] text-[length:var(--caption-2-bold-font-size)] tracking-[var(--caption-2-bold-letter-spacing)] leading-[var(--caption-2-bold-line-height)] whitespace-nowrap [font-style:var(--caption-2-bold-font-style)]">
                        09.41
                      </div>
                      <div className="absolute w-[343px] h-[48px] top-0 left-0">
                        <div className="absolute w-[21px] h-[20px] top-[24px] left-[320px]">
                          <div className="w-[19px] h-[20px] top-0 bg-primary-2 rounded-[9.5px/10px] absolute left-0" />
                          <div className="absolute w-[16px] top-0 left-[5px] font-body-2-bold font-[number:var(--body-2-bold-font-weight)] text-primary-1 text-[length:var(--body-2-bold-font-size)] tracking-[var(--body-2-bold-letter-spacing)] leading-[var(--body-2-bold-line-height)] [font-style:var(--body-2-bold-font-style)]">
                            1
                          </div>
                        </div>
                        <img
                          className="w-[48px] h-[48px] top-0 object-cover absolute left-0"
                          alt="Ellipse"
                          src="../../../static/img/ellipse-9.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-[345px] h-[48px] mr-[-4.00px]">
                <img
                  className="w-[48px] h-[48px] top-0 object-cover absolute left-0"
                  alt="Ellipse"
                  src="../../../static/img/ellipse-9-1.png"
                />
                <div className="absolute w-[82px] h-[44px] top-0 left-[60px]">
                  <div className="absolute top-0 left-0 font-heading-8-semibold font-[number:var(--heading-8-semibold-font-weight)] text-[#0c1d0a] text-[length:var(--heading-8-semibold-font-size)] text-center tracking-[var(--heading-8-semibold-letter-spacing)] leading-[var(--heading-8-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-8-semibold-font-style)]">
                    Roqib
                  </div>
                  <div className="absolute w-[81px] top-[24px] left-px font-body-2-bold font-[number:var(--body-2-bold-font-weight)] text-primary-2 text-[length:var(--body-2-bold-font-size)] tracking-[var(--body-2-bold-letter-spacing)] leading-[var(--body-2-bold-line-height)] [font-style:var(--body-2-bold-font-style)]">
                    Mengetik...
                  </div>
                </div>
                <div className="absolute w-[30px] h-[13px] top-[11px] left-[313px]">
                  <div className="top-0 left-0 text-variable-collection-cht-udh-d-baca absolute w-[28px] font-caption-2-bold font-[number:var(--caption-2-bold-font-weight)] text-[length:var(--caption-2-bold-font-size)] tracking-[var(--caption-2-bold-letter-spacing)] leading-[var(--caption-2-bold-line-height)] whitespace-nowrap [font-style:var(--caption-2-bold-font-style)]">
                    09.30
                  </div>
                </div>
              </div>
              <div className="relative w-[345px] h-[48px] mr-[-4.00px]">
                <img
                  className="w-[48px] h-[48px] top-0 object-cover absolute left-0"
                  alt="Ellipse"
                  src="../../../static/img/ellipse-9-2.png"
                />
                <div className="absolute w-[82px] h-[44px] top-0 left-[60px]">
                  <div className="absolute top-0 left-0 font-heading-8-semibold font-[number:var(--heading-8-semibold-font-weight)] text-[#0c1d0a] text-[length:var(--heading-8-semibold-font-size)] text-center tracking-[var(--heading-8-semibold-letter-spacing)] leading-[var(--heading-8-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-8-semibold-font-style)]">
                    Lamria
                  </div>
                  <div className="absolute w-[81px] top-[24px] left-px font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-variable-collection-cht-udh-d-baca text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] [font-style:var(--body-2-regular-font-style)]">
                    Oke min
                  </div>
                </div>
                <div className="w-[41px] left-[302px] absolute h-[13px] top-[11px]">
                  <div className="absolute w-[39px] top-0 left-0 font-caption-2-bold font-[number:var(--caption-2-bold-font-weight)] text-variable-collection-cht-udh-d-baca text-[length:var(--caption-2-bold-font-size)] tracking-[var(--caption-2-bold-letter-spacing)] leading-[var(--caption-2-bold-line-height)] whitespace-nowrap [font-style:var(--caption-2-bold-font-style)]">
                    Kemarin
                  </div>
                </div>
              </div>
              <div className="relative w-[345px] h-[48px] mr-[-4.00px]">
                <img
                  className="w-[48px] h-[48px] top-0 object-cover absolute left-0"
                  alt="Ellipse"
                  src="../../../static/img/ellipse-9-3.png"
                />
                <div className="absolute w-[178px] h-[44px] top-0 left-[61px]">
                  <div className="absolute top-0 left-0 font-heading-8-semibold font-[number:var(--heading-8-semibold-font-weight)] text-[#0c1d0a] text-[length:var(--heading-8-semibold-font-size)] text-center tracking-[var(--heading-8-semibold-letter-spacing)] leading-[var(--heading-8-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-8-semibold-font-style)]">
                    Ade
                  </div>
                  <p className="absolute w-[178px] top-[24px] left-0 font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-variable-collection-cht-udh-d-baca text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] [font-style:var(--body-2-regular-font-style)]">
                    Nanti saya kabarin lagi min
                  </p>
                </div>
                <div className="w-[45px] left-[298px] absolute h-[13px] top-[11px]">
                  <div className="absolute w-[43px] top-0 left-0 font-caption-2-bold font-[number:var(--caption-2-bold-font-weight)] text-variable-collection-cht-udh-d-baca text-[length:var(--caption-2-bold-font-size)] tracking-[var(--caption-2-bold-letter-spacing)] leading-[var(--caption-2-bold-line-height)] whitespace-nowrap [font-style:var(--caption-2-bold-font-style)]">
                    30/03/24
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex items-start gap-[9.46px] px-[30.28px] py-[15.14px] absolute top-[-1536px] left-[321px] bg-primary-2 rounded-[10px] shadow-[0px_3.78px_4.73px_#00000066]">
          <div className="relative w-fit mt-[-0.95px] [font-family:'Nunito',Helvetica] font-bold text-[#f3ffd1] text-[15.1px] text-center tracking-[0.08px] leading-[18.2px] whitespace-nowrap">
            Bayar
          </div>
        </div>
        <div className="absolute w-[24px] h-[24px] top-[19px] left-[1207px] bg-[url(/static../../../static/img/ellipse-7.png)] bg-cover bg-[50%_50%]" />
        <SideBarAdmin
          chatDivClassName="!text-primary-2 !tracking-[0] !text-[16px] ![font-style:unset] !font-bold ![font-family:'Nunito',Helvetica] !leading-[22.4px]"
          chatPropertyDefaultClassName="!flex-[0_0_auto] !bg-secondary-1"
          chatText="Chat"
          className="!fixed !left-0 !top-0"
          deteksiDeteksi="../../../static/img/deteksi-3.svg"
          logoPlaceholderGroup="../../../static/img/group-7-2.png"
          sideBarDivClassName="!text-primary-2 !tracking-[0] !text-[16px] ![font-style:unset] !font-normal ![font-family:'Nunito',Helvetica] !leading-[22.4px]"
          sideBarPropertyDefaultClassName="!flex-[0_0_auto] !bg-white"
          tagihanText="Pemasukan Iuran"
          to="/chat-pengelola-u40adminu41"
        />
        {/* <SideBarAdmin
          beritaPropertyDefaultClassName="!flex-[0_0_auto] !bg-secondary-1"
          chatText="Chat"
          className="!fixed !left-0 !top-0"
          deteksiDeteksi="../../../static/img/deteksi-3.svg"
          logoPlaceholderGroup="../../../static/img/group-7-2.png"
          sideBarDivClassName="!text-primary-2 !tracking-[0] !text-[16px] ![font-style:unset] !font-bold ![font-family:'Nunito',Helvetica] !leading-[22.4px]"
          sideBarPropertyDefaultClassName="!flex-[0_0_auto] !bg-[unset]"
          tagihanText="Pemasukan Iuran"
          to="/input-berita"
        /> */}
        <NavbarUserFitur
          className="!fixed !left-[324px] !top-0"
          profilArrowDown="../../../static/img/arrow-down-2-3.svg"
          profilOpenartImageClassName="!rounded-[100px] ![object-fit:unset]"
          profilText="Admin"
        />
        <img className="fixed w-[24px] h-[24px] top-[575px] left-[1256px]" alt="Send" src="../../../static/img/send.svg" />
      </div>
    </div>
  );
};
