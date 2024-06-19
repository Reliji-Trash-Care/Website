import React from "react";

export const Footer = ({ className }) => {
  return (
    <div
      className={`inline-flex flex-col items-center gap-[24px] px-[116px] py-[24px] relative bg-primary-2 ${className}`}
    >
      <div className="inline-flex flex-col items-start gap-[24px] relative flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start gap-[24px] relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-[10px] relative flex-[0_0_auto]">
            <div className="gap-[24px] inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
              <div className="inline-flex items-center justify-center relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-heading-5-semibold font-[number:var(--heading-5-semibold-font-weight)] text-white text-[length:var(--heading-5-semibold-font-size)] tracking-[var(--heading-5-semibold-letter-spacing)] leading-[var(--heading-5-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-5-semibold-font-style)]">
                  Kontak Kami
                </div>
              </div>
              <div className="inline-flex flex-col items-start gap-[7px] relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
                  <div className="items-center inline-flex gap-[8px] relative flex-[0_0_auto]">
                    <img className="relative w-[24px] h-[24px]" alt="Place marker" src="../../../static/img/place-marker.png" />
                    <p className="relative w-fit font-body-1-regular font-[number:var(--body-1-regular-font-weight)] text-primary-1 text-[length:var(--body-1-regular-font-size)] tracking-[var(--body-1-regular-letter-spacing)] leading-[var(--body-1-regular-line-height)] whitespace-nowrap [font-style:var(--body-1-regular-font-style)]">
                      Desa Mendalo Indah, Kecamatan Jambi Luar Kota, Kabupaten Muaro Jambi, Provinsi Jambi
                    </p>
                  </div>
                </div>
                <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
                  <div className="items-start inline-flex gap-[8px] relative flex-[0_0_auto]">
                    <img className="relative w-[24px] h-[24px]" alt="Phone" src="../../../static/img/phone.png" />
                    <div className="relative w-fit mt-[-1.00px] font-body-1-regular font-[number:var(--body-1-regular-font-weight)] text-primary-1 text-[length:var(--body-1-regular-font-size)] tracking-[var(--body-1-regular-letter-spacing)] leading-[var(--body-1-regular-line-height)] whitespace-nowrap [font-style:var(--body-1-regular-font-style)]">
                      081234567890
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
                  <div className="items-start inline-flex gap-[8px] relative flex-[0_0_auto]">
                    <img className="relative w-[24px] h-[24px]" alt="Envelope" src="../../../static/img/envelope.png" />
                    <div className="relative w-fit mt-[-1.00px] font-body-1-regular font-[number:var(--body-1-regular-font-weight)] text-primary-1 text-[length:var(--body-1-regular-font-size)] tracking-[var(--body-1-regular-letter-spacing)] leading-[var(--body-1-regular-line-height)] whitespace-nowrap [font-style:var(--body-1-regular-font-style)]">
                      relijitrashcare@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex flex-col items-start relative flex-[0_0_auto] mb-[-1.00px]">
          <div className="inline-flex flex-col items-start gap-[10px] relative flex-[0_0_auto]">
            <div className="gap-[10px] inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
              <img className="relative w-[1208px] h-px mt-[-0.50px]" alt="Line" src="../../../static/img/line-17.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-fit font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-primary-1 text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] whitespace-nowrap [font-style:var(--body-2-regular-font-style)]">
        Copyright © 2024 Reliji
      </div>
    </div>
  );
};
