import React from "react";
import { Footer } from "../../components/Footer";
import { LogoPlaceholder } from "../../components/LogoPlaceholder";
import { NavbarGuest } from "../../components/NavbarGuest";

export const TentangKami = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] h-[1060px] relative">
        <div className="top-[-192px] absolute w-[1998px] h-[2229px] left-0">
          <div className="top-0 absolute w-[1998px] h-[2229px] left-0">
            <div className="w-[1674px] h-[1674px] top-[555px] left-[324px] bg-primary-2 rounded-[837px] blur-[550px] absolute opacity-[0.36]" />
            <div className="w-[682px] h-[683px] top-0 left-[965px] bg-additional-1 rounded-[341px/341.5px] blur-[500px] absolute opacity-[0.36]" />
            <p className="absolute w-[690px] top-[445px] left-[122px] font-body-1-regular font-[number:var(--body-1-regular-font-weight)] text-black text-[length:var(--body-1-regular-font-size)] tracking-[var(--body-1-regular-letter-spacing)] leading-[var(--body-1-regular-line-height)] [font-style:var(--body-1-regular-font-style)]">
              <span className="font-body-1-regular font-[number:var(--body-1-regular-font-weight)] text-black text-[length:var(--body-1-regular-font-size)] tracking-[var(--body-1-regular-letter-spacing)] leading-[var(--body-1-regular-line-height)] [font-style:var(--body-1-regular-font-style)]">
                Reliji Trash Care adalah website pengelolaan sampah yang menjadi solusi bagi pengelolaan sampah di
                lingkungan Desa Mendalo Indah, Jambi, yang dikelola oleh jasa pengangkut sampah Reliji.
                <br />
                <br />
                “Reliji” merupakan jasa angkutan sampah bersifat swadaya masyarakat yang bekerja sama dengan Dinas
                Lingkungan Hidup. Reliji menjadi Tempat Pembuangan Sampah Sementara (TPS) bagi warga Desa Mendalo Indah.
                Sampah yang terkumpul kemudian akan diangkut oleh pihak Dinas Lingkungan Hidup ke Tempat Pembuangan
                Akhir (TPA) yang bertempat di Bukit Baling, Sengeti.
                <br />
                <br />
                Dengan adanya website ini, kami berharap masyarakat Desa Mendalo Indah dapat lebih mudah dalam mengakses
                informasi pengelolaan sampah yang dilakukan oleh pihak Reliji.
              </span>
            </p>
            <img
              className="absolute w-[1151px] h-[795px] top-[192px] left-[289px]"
              alt="Mask group"
              src="../../../static/img/mask-group.png"
            />
            <LogoPlaceholder
              className="!absolute !left-[122px] !bg-[unset] !top-[386px]"
              elijiTrashCareClassName="!mt-[-1.41px] !ml-[-5.64px]"
              group="../../../static/img/group-7-4.png"
              groupClassName="!h-[25.37px] !w-[25.43px]"
            />
            <Footer className="!absolute !left-0 !top-[987px]" />
          </div>
          <LogoPlaceholder
            className="!absolute !left-0 !bg-[unset] !top-[194px]"
            elijiTrashCareClassName="!mt-[-1.41px] !ml-[-5.64px]"
            group="../../../static/img/group-7-4.png"
            groupClassName="!h-[25.37px] !w-[25.43px]"
          />
        </div>
        <img
          className="absolute top-[-143px] left-[7280px] object-cover w-[1208px] h-px"
          alt="Line"
          src="../../../static/img/line-16.png"
        />
        <NavbarGuest
          className="!fixed !left-0 !top-0"
          logoPlaceholderGroup="../../../static/img/group-7-4.png"
          tentangkamiClassName="!underline !text-primary-2 !tracking-[0] !text-[16px] ![font-style:unset] !font-bold ![font-family:'Nunito',Helvetica] !leading-[22.4px]"
          tentangkamidivClassName="!text-primary-2 !tracking-[0] !text-[16px] ![font-style:unset] !font-bold ![font-family:'Nunito',Helvetica] !leading-[22.4px]"
        />
      </div>
    </div>
  );
};
