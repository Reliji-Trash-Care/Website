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
  sideBarPropertyDefaultClassName,
  history, // tambahkan history dari react-router
}) => {
  const navigateTo = (path) => {
    history.push(path);
  };

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
        className={sideBarPropertyDefaultClassName}
        divClassName={sideBarDivClassName}
        home="../../../static/img/home-2.svg"
        property1="default"
        onClick={() => navigateTo("/home")} // navigasi ke halaman home
      />
      <Berita
        className="!flex-[0_0_auto]"
        divClassName="!text-primary-2"
        paper="../../../static/img/paper-2.svg"
        property1="default"
        onClick={() => navigateTo("/beritauser")} // navigasi ke halaman beritauser
      />
      <Jadwal
        calendar="../../../static/img/calendar-4.svg"
        className="!flex-[0_0_auto]"
        divClassName="!text-primary-2"
        property1="default"
        onClick={() => navigateTo("/jadwalsampahadmin")} // navigasi ke halaman jadwalsampahadmin
      />
      <Tagihan
        className="!flex-[0_0_auto]"
        divClassName="!text-primary-2"
        property1="default"
        wallet="../../../static/img/wallet-2.svg"
        onClick={() => navigateTo("/tagihanadmin")} // navigasi ke halaman tagihanadmin
      />
      <Chat
        chat="../../../static/img/chat-2.svg"
        className="!flex-[0_0_auto]"
        divClassName="!text-primary-2"
        property1="default"
        onClick={() => navigateTo("/chatpengelolaadmin")} // navigasi ke halaman chatpengelolaadmin
      />
      <Deteksi
        className="!flex-[0_0_auto]"
        deteksi="../../../static/img/deteksi-2.svg"
        property1="default"
        onClick={() => navigateTo("/deteksiadmin")} // navigasi ke halaman deteksiadmin
      />
      <Setelan
        className="!flex-[0_0_auto]"
        property1="default"
        setting="../../../static/img/setting-2.svg"
        onClick={() => navigateTo("/setelanprofil")} // navigasi ke halaman setelanprofil
      />
    </div>
  );
};

SideBarWrapper.propTypes = {
  logoPlaceholderGroup: PropTypes.string,
};
