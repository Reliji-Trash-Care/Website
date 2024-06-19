import React from "react";
import { NavbarUserFitur } from "../../components/NavbarUserFitur";
import SideBarAdmin from "../../components/SideBarAdmin/SideBarAdmin";

export const InputBerita = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-primary-1 overflow-hidden w-[1440px] h-[1024px] relative">
        <div className="absolute w-[1674px] h-[1790px] top-[83px] left-[242px]">
          <div className="absolute w-[1094px] h-[905px] top-[10px] left-[82px] bg-primary-1 rounded-[2px] shadow-drop-shadow-2" />
          <div className="absolute w-[1674px] h-[1674px] top-[116px] left-0 bg-primary-2 rounded-[837px] blur-[550px] opacity-[0.36]" />
          <img className="absolute w-[1094px] h-[7px] top-[2px] left-[82px]" alt="Line" src="../../../static/img/line-21.svg" />
          <div className="absolute w-[1102px] h-[875px] top-0 left-[11px]">
            <div className="relative w-[911px] h-[764px] top-[80px] left-[15px]">
              <div className="absolute w-[282px] -top-px left-[118px] font-heading-6-semibold font-[number:var(--heading-6-semibold-font-weight)] text-[#505050] text-[length:var(--heading-6-semibold-font-size)] tracking-[var(--heading-6-semibold-letter-spacing)] leading-[var(--heading-6-semibold-line-height)] [font-style:var(--heading-6-semibold-font-style)]">
                Form Input Berita
              </div>
              <div className="absolute w-[845px] h-[38px] top-[57px] left-[211px]">
                <div className="absolute w-[142px] top-0 left-0 font-heading-8-bold font-[number:var(--heading-8-bold-font-weight)] text-black text-[length:var(--heading-8-bold-font-size)] tracking-[var(--heading-8-bold-letter-spacing)] leading-[var(--heading-8-bold-line-height)] [font-style:var(--heading-8-bold-font-style)]">
                  Judul Berita 
                </div>
                <input type="text" className="absolute w-[715px] h-[28px] top-px left-[130px] bg-primary-1 rounded-[10px] border border-solid border-[#d9d9d9] outline-none" />
              </div>
              <div className="absolute w-[81px] top-[228px] left-[211px] font-heading-8-bold font-[number:var(--heading-8-bold-font-weight)] text-black text-[length:var(--heading-8-bold-font-size)] tracking-[var(--heading-8-bold-letter-spacing)] leading-[var(--heading-8-bold-line-height)] [font-style:var(--heading-8-bold-font-style)]">
                Isi Berita
              </div>
              <div className="absolute w-[81px] top-[655px] left-[211px] font-heading-8-bold font-[number:var(--heading-8-bold-font-weight)] text-black text-[length:var(--heading-8-bold-font-size)] tracking-[var(--heading-8-bold-letter-spacing)] leading-[var(--heading-8-bold-line-height)] [font-style:var(--heading-8-bold-font-style)]">
                Gambar
              </div>
              <div className="absolute w-[715px] h-[38px] top-[646px] left-[341px] bg-[#ffffffcc] rounded-[10px] border border-solid border-[#d9d9d9]">
                <input id="myfile" type="file" className="absolute w-[200px] top-[9px]"/>
              </div>
              <input type="text" className="absolute w-[715px] h-[377px] top-[229px] left-[341px] bg-primary-1 rounded-[10px] border border-solid border-variable-collection-7b7b7b" />
              <div className="absolute w-[126px] h-[51px] top-[713px] left-[955px]">
                <div className="relative w-[124px] h-[51px]">
                  <input type="submit" className="absolute w-[98px] h-[45px] top-0 left-0 bg-primary-2 rounded-[10px] text-green-50" value="Submit" />
                </div>
              </div>
              <div className="absolute w-[845px] h-[38px] top-[114px] left-[211px]">
                <div className="absolute w-[142px] top-0 left-0 font-heading-8-bold font-[number:var(--heading-8-bold-font-weight)] text-black text-[length:var(--heading-8-bold-font-size)] tracking-[var(--heading-8-bold-letter-spacing)] leading-[var(--heading-8-bold-line-height)] [font-style:var(--heading-8-bold-font-style)]">
                  Nama Penulis
                </div>
                <input type="text" className="absolute w-[715px] h-[28px] top-px left-[130px] bg-primary-1 rounded-[10px] border border-solid border-[#d9d9d9] outline-none" />
              </div>
              <div className="absolute w-[845px] h-[38px] top-[171px] left-[211px]">
                <input type="text" className="absolute w-[715px] h-[28px] top-px left-[130px] bg-primary-1 rounded-[10px] border border-solid border-[#d9d9d9] outline-none" />
                <div className="absolute w-[142px] top-0 left-0 font-heading-8-bold font-[number:var(--heading-8-bold-font-weight)] text-black text-[length:var(--heading-8-bold-font-size)] tracking-[var(--heading-8-bold-letter-spacing)] leading-[var(--heading-8-bold-line-height)] [font-style:var(--heading-8-bold-font-style)]">
                  Nama Penebit
                </div>
              </div>
            </div>
          </div>
        </div>
        <NavbarUserFitur
          className="!fixed !left-[324px] !top-0"
          profilOpenartImage="../../../static/img/openart-image-nfswrdqc-1711466557108-raw-2-3.png"
          profilText="Admin"
        />
        <SideBarAdmin
          beritaPropertyDefaultClassName="!flex-[0_0_auto] !bg-secondary-1"
          chatText="Chat"
          className="!fixed !left-0 !top-0"
          deteksiDeteksi="../../../static/img/deteksi-3.svg"
          logoPlaceholderGroup="../../../static/img/group-7-2.png"
          sideBarDivClassName="!text-primary-2 !tracking-[0] !text-[16px] ![font-style:unset] !font-bold ![font-family:'Nunito',Helvetica] !leading-[22.4px]"
          sideBarPropertyDefaultClassName="!flex-[0_0_auto] !bg-[unset]"
          tagihanText="Pemasukan Iuran"
          to="/input-berita"
        />
      </div>
    </div>
  );
};
