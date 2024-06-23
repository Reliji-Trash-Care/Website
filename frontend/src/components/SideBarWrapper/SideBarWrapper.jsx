import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { Berita } from "../Berita";
import { Chat } from "../Chat";
import { Deteksi } from "../Deteksi";
import { Jadwal } from "../Jadwal";
import { LogoPlaceholder } from "../LogoPlaceholder";
import { Setelan } from "../Setelan";
import { SideBar } from "../SideBar";
import { Tagihan } from "../Tagihan";

export const SideBarWrapper = ({
  className,
  logoPlaceholderGroup = "../../../static/img/group-7-1.png",
  sideBarDivClassName,
  sideBarClassName,
  beritaDivClassName,
  beritaClassName,
  jadwalDivClassName,
  jadwalClassName,
  tagihanDivClassName,
  tagihanClassName,
  chatDivClassName,
  chatClassName,
  deteksiDivClassName,
  deteksiClassName,
  setelanDivClassName,
  setelanClassName,
  history, // tambahkan history dari react-router
}) => {
  
  return (
    <div
      className={`inline-flex flex-col h-[1024px] gap-[36px] px-[35px] py-[44px] rounded-[0px_15px_15px_0px] overflow-hidden shadow-drop-shadow-2 items-center relative bg-primary-1 ${className}`}
    >
      <LogoPlaceholder
        className="!flex-[0_0_auto]"
        elijiTrashCareClassName="!mt-[-1.41px] !ml-[-5.66px]"
        group={logoPlaceholderGroup}
        groupClassName="!h-[25.47px] !w-[25.54px]"
      />
      <SideBar
        className={sideBarClassName}
        divClassName={sideBarDivClassName}
        home="../../../static/img/home-2.svg"
        property1="default"
      />
      <Berita
        className={beritaClassName}
        divClassName={beritaDivClassName}
        paper="../../../static/img/paper-2.svg"
        property1="default"
      />
      <Jadwal
        calendar="../../../static/img/calendar-4.svg"
        className={jadwalClassName}
        divClassName={jadwalDivClassName}
        property1="default"
      />
      <Tagihan
        className={tagihanClassName}
        divClassName={tagihanDivClassName}
        property1="default"
        wallet="../../../static/img/wallet-2.svg"
      />
      <Chat
        chat="../../../static/img/chat-2.svg"
        className={chatClassName}
        divClassName={chatDivClassName}
        property1="default"
      />
      <Deteksi
        className={deteksiClassName}
        divClassName={deteksiDivClassName}
        deteksi="../../../static/img/deteksi-2.svg"
        property1="default"
      />
      <Setelan
        className={setelanClassName}
        divClassName={setelanDivClassName}
        property1="default"
        setting="../../../static/img/setting-2.svg"
      />
    </div>
  );
};

SideBarWrapper.propTypes = {
  logoPlaceholderGroup: PropTypes.string,
};
