import React from "react";
import { NavbarUserFitur } from "../../components/NavbarUserFitur";
import SideBarAdmin from "../../components/SideBarAdmin/SideBarAdmin";

export const DetailInputJadwal = () => {
  return (
    <div className="bg-[#ffffff] flex flex-row justify-center w-full">
      <div className="bg-primary-1 overflow-hidden w-[1440px] h-[1307px] relative">
        <div className="absolute w-[1674px] h-[1787px] top-[86px] left-[242px]">
          <div className="absolute w-[1674px] h-[1674px] top-[113px] left-0 bg-primary-2 rounded-[837px] blur-[550px] opacity-[0.36]" />
          <img className="absolute w-[283px] h-[312px] top-[83px] left-[89px]" alt="Image" src="../../../static/img/image-4.png" />
          <img
            className="absolute w-[682px] h-[1101px] top-0 left-[396px]"
            alt="Input jadwal admin"
            src="../../../static/img/input-jadwal-admin.png"
          />
        </div>
        <div className="absolute w-[24px] h-[24px] top-[19px] left-[1207px] bg-[url(../../../static/img/ellipse-7.png)] bg-cover bg-[50%_50%]" />
        <NavbarUserFitur className="!fixed !left-[324px] !top-0" profilHasOpenartImage={false} profilText="Admin" />
        <SideBarAdmin
          chatText="Chat"
          className="!h-[1307px] !fixed !left-px !top-0"
          deteksiDeteksi="../../../static/img/deteksi-3.svg"
          jadwalDivClassName="!text-primary-2 !tracking-[0] !text-[16px] ![font-style:unset] !font-bold ![font-family:'Nunito',Helvetica] !leading-[22.4px]"
          jadwalPropertyDefaultClassName="!flex-[0_0_auto] !bg-secondary-1"
          logoPlaceholderGroup="../../../static/img/group-7-2.png"
          sideBarDivClassName="!text-primary-2 !tracking-[0] !text-[16px] ![font-style:unset] !font-normal ![font-family:'Nunito',Helvetica] !leading-[22.4px]"
          sideBarPropertyDefaultClassName="!flex-[0_0_auto] !bg-[#ffffff]"
          tagihanText="Pemasukan Iuran"
        />
      </div>
    </div>
  );
};
