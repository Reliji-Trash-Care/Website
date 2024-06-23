import React from "react";
import { Footer } from "../../components/Footer";
import { NavbarGuest } from "../../components/NavbarGuest";

export const Layanan = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-primary-1 overflow-hidden w-[1440px] h-[2426px] relative">
        <div className="absolute w-[1744px] h-[1979px] top-[122px] left-[254px]">
          <div className="absolute w-[1674px] h-[1674px] top-[241px] left-[70px] bg-primary-2 rounded-[837px] blur-[1000px] opacity-[0.36]" />
          <div className="absolute w-[933px] h-[481px] top-0 left-0">
            <div className="flex w-[933px] items-center justify-center gap-[10px] px-[16px] py-[10px] absolute top-0 left-0 bg-primary-2 rounded-[10px_10px_0px_0px]">
              <div className="relative w-fit mt-[-1.00px] font-heading-8-semibold font-[number:var(--heading-8-semibold-font-weight)] text-primary-1 text-[length:var(--heading-8-semibold-font-size)] tracking-[var(--heading-8-semibold-letter-spacing)] leading-[var(--heading-8-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-8-semibold-font-style)]">
                Jadwal Sampah
              </div>
            </div>
            <div className="inline-flex flex-col items-start gap-[28px] p-[32px] absolute top-[47px] left-0 bg-primary-1 rounded-[0px_0px_15px_15px] shadow-drop-shadow-2">
              <img className="relative w-[869px] h-[254px]" alt="Rectangle" src="../../../static/img/rectangle-99.svg" />
              <p className="relative self-stretch font-body-1-regular font-[number:var(--body-1-regular-font-weight)] text-black text-[length:var(--body-1-regular-font-size)] tracking-[var(--body-1-regular-letter-spacing)] leading-[var(--body-1-regular-line-height)] [font-style:var(--body-1-regular-font-style)]">
                Kami memberikan fitur jadwal pengangkutan sampah dan pengutipan iuran dalam bentuk kalender untuk
                memudahkan pengguna dalam memantau waktu pengangkutan sampah dan pembayaran iuran. Pengguna juga dapat
                mengaktifkan fitur pengingat mengenai waktu pengangkutan sampah dan pengutipan iuran, sehingga saat
                waktunya akan tiba, sistem akan mengingatkan pengguna dengan harapan untuk meminimalisir kejadian lupa
                atau telat membayar iuran.
              </p>
            </div>
          </div>
          <div className="inline-flex flex-col items-start absolute top-[528px] left-0">
            <div className="flex w-[933px] items-center justify-center gap-[10px] px-[16px] py-[10px] bg-primary-2 rounded-[15px_15px_0px_0px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-heading-8-semibold font-[number:var(--heading-8-semibold-font-weight)] text-primary-1 text-[length:var(--heading-8-semibold-font-size)] tracking-[var(--heading-8-semibold-letter-spacing)] leading-[var(--heading-8-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-8-semibold-font-style)]">
                Tagihan Iuran
              </div>
            </div>
            <div className="inline-flex flex-col items-start gap-[28px] p-[32px] bg-primary-1 rounded-[0px_0px_15px_15px] shadow-drop-shadow-2 relative flex-[0_0_auto]">
              <img className="relative w-[869px] h-[254px]" alt="Rectangle" src="../../../static/img/rectangle-99-1.svg" />
              <p className="relative self-stretch font-body-1-regular font-[number:var(--body-1-regular-font-weight)] text-black text-[length:var(--body-1-regular-font-size)] tracking-[var(--body-1-regular-letter-spacing)] leading-[var(--body-1-regular-line-height)] [font-style:var(--body-1-regular-font-style)]">
                Kami menyediakan rincian tagihan iuran sampah kepada setiap pengguna, serta menyediakan layanan
                transaksi dengan <br />berbagai metode pembayaran untuk memudahkan pengguna dalam membayar iuran sampah.
              </p>
            </div>
          </div>
          <div className="inline-flex flex-col items-start absolute top-[1013px] left-0">
            <div className="flex w-[933px] items-center justify-center gap-[10px] px-[16px] py-[10px] bg-primary-2 rounded-[15px_15px_0px_0px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-heading-8-semibold font-[number:var(--heading-8-semibold-font-weight)] text-primary-1 text-[length:var(--heading-8-semibold-font-size)] tracking-[var(--heading-8-semibold-letter-spacing)] leading-[var(--heading-8-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-8-semibold-font-style)]">
                Chat Pengelola
              </div>
            </div>
            <div className="inline-flex flex-col items-start gap-[28px] p-[32px] bg-primary-1 rounded-[0px_0px_15px_15px] shadow-drop-shadow-2 relative flex-[0_0_auto]">
              <img className="relative w-[869px] h-[254px]" alt="Rectangle" src="../../../static/img/rectangle-99-2.svg" />
              <p className="relative self-stretch font-body-1-regular font-[number:var(--body-1-regular-font-weight)] text-black text-[length:var(--body-1-regular-font-size)] tracking-[var(--body-1-regular-letter-spacing)] leading-[var(--body-1-regular-line-height)] [font-style:var(--body-1-regular-font-style)]">
                Kami menyediakan layanan chat dengan jasa pengelola angkutan sampah Reliji agar pengguna dapat meminta
                bantuan <br />atau menanyakan informasi lebih lanjut terkait pengelolaan sampah di lingkungan mereka.
              </p>
            </div>
          </div>
          <div className="inline-flex flex-col items-start absolute top-[1498px] left-0">
            <div className="flex w-[933px] items-center justify-center gap-[10px] px-[16px] py-[10px] bg-primary-2 rounded-[15px_15px_0px_0px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-heading-8-semibold font-[number:var(--heading-8-semibold-font-weight)] text-primary-1 text-[length:var(--heading-8-semibold-font-size)] tracking-[var(--heading-8-semibold-letter-spacing)] leading-[var(--heading-8-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-8-semibold-font-style)]">
                Deteksi Sampah
              </div>
            </div>
            <div className="inline-flex flex-col items-start gap-[28px] p-[32px] bg-primary-1 rounded-[0px_0px_15px_15px] shadow-drop-shadow-2 relative flex-[0_0_auto]">
              <img className="relative w-[869px] h-[254px]" alt="Rectangle" src="../../../static/img/rectangle-99-3.svg" />
              <p className="relative self-stretch font-body-1-regular font-[number:var(--body-1-regular-font-weight)] text-black text-[length:var(--body-1-regular-font-size)] tracking-[var(--body-1-regular-letter-spacing)] leading-[var(--body-1-regular-line-height)] [font-style:var(--body-1-regular-font-style)]">
                <span className="font-body-1-regular font-[number:var(--body-1-regular-font-weight)] text-black text-[length:var(--body-1-regular-font-size)] tracking-[var(--body-1-regular-letter-spacing)] leading-[var(--body-1-regular-line-height)] [font-style:var(--body-1-regular-font-style)]">
                  Kami menyediakan layanan Deteksi Sampah dengan menggunakan model AI dilengkapi&nbsp;&nbsp;dengan
                  penjelasan tentang <br />sampah dan cara penanganannya sebelum dibuang&nbsp;&nbsp;ke tempat sampah atau
                  sebelum dilakukan proses <br />pengangkutan sampah oleh&nbsp;&nbsp;petugas. Selain itu, pengguna dapat
                  menggunakan kamera untuk mengaktifkan fitur <br />&nbsp;&nbsp;object detection secara real-time.
                </span>
              </p>
            </div>
          </div>
        </div>
        <Footer className="!absolute !left-0 !top-[2161px]" />
        <NavbarGuest
          className="!fixed !left-0 !top-0"
          logoPlaceholderGroup="../../../static/img/group-7-2.png"
          layananClassName="!underline !text-primary-2 !tracking-[0] !text-[16px] ![font-style:unset] !font-normal ![font-family:'Nunito',Helvetica] !leading-[22.4px]"
          layanandivClassName="!text-primary-2 !tracking-[0] !text-[16px] ![font-style:unset] !font-bold ![font-family:'Nunito',Helvetica] !leading-[22.4px]"
        />
      </div>
    </div>
  );
};
