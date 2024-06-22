import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { Chat } from "../Chat";
import { Deteksi } from "../Deteksi";
import { LogoPlaceholder } from "../LogoPlaceholder";
import { Setelan } from "../Setelan";
import {JadwalAdmin} from "../JadwalAdmin/JadwalAdmin";
import SideBarA from "../SideBarA/SideBarA";
import BeritaAdmin from "../BeritaAdmin/BeritaAdmin";
import DeteksiAdmin from "../DeteksiAdmin/DeteksiAdmin";
import TagihanAd from "../TagihanAd/TagihanAd";
import { ChatAdmin } from "../ChatAdmin/ChatAdmin";
import { SetelanAdmin } from "../SetelanAdmin/SetelanAdmin";


export const SideBarAdmin = ({
  className,
  logoPlaceholderGroup = "../../../static/img/group-7-1.png",
  sideBarDivClassName,
  sideBarPropertyDefaultClassName,
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
      <SideBarA
        className={sideBarPropertyDefaultClassName}
        divClassName={sideBarDivClassName}
        home="../../../static/img/home-2.svg"
        property1="default"
      />
      <BeritaAdmin
        className="!flex-[0_0_auto]"
        divClassName="!text-primary-2"
        paper="../../../static/img/paper-2.svg"
        property1="default"
      />
      <JadwalAdmin
        calendar="../../../static/img/calendar-4.svg"
        className="!flex-[0_0_auto]"
        divClassName="!text-primary-2"
        property1="default"
      />
      <TagihanAd
        className="!flex-[0_0_auto]"
        divClassName="!text-primary-2"
        property1="default"
        wallet="../../../static/img/wallet-2.svg"
      />
      <ChatAdmin
        chat="../../../static/img/chat-2.svg"
        className="!flex-[0_0_auto]"
        divClassName="!text-primary-2"
        property1="default"
      />
      <DeteksiAdmin
        className="!flex-[0_0_auto]"
        deteksi="../../../static/img/deteksi-2.svg"
        property1="default"
      />
      <SetelanAdmin
        className="!flex-[0_0_auto]"
        property1="default"
        setting="../../../static/img/setting-2.svg"
      />
    </div>
  );
};

SideBarAdmin.propTypes = {
  logoPlaceholderGroup: PropTypes.string,
};

export default SideBarAdmin;