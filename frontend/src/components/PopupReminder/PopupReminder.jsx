import React from "react";
import { NotifPopup } from "../NotifPopup";

export const PopupReminder = () => {
  return (
    <div className="w-[311px] h-[76px]">
      <div className="relative h-[76px] rounded-[10px]">
        <NotifPopup className="!h-[76px] !justify-center !flex !items-end !absolute !left-0 !w-[311px] !top-0" />
        <img
          className="absolute w-[23px] h-[27px] top-6 left-[21px]"
          alt="Iconly bold"
          src="../../../static/img/iconly-bold-notification.png"
        />
      </div>
    </div>
  );
};
