import PropTypes from "prop-types";
import React from "react";
import { Notification } from "../../icons/Notification";
import { MenuItem } from "../MenuItem";
import { Profil } from "../Profil";

export const NavbarUserFitur = ({ className, profilArrowDown = "../../../static/img/arrow-down-2-2.svg" }) => {
  return (
    <div
      className={`w-[1116px] h-[62px] bg-white rounded-[0px_0px_15px_15px] shadow-[0px_2px_10px_#00000040] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] ${className}`}
    >
      <div className="relative w-[972px] h-[44px] top-[9px] left-[24px]">
        <div className="absolute w-[121px] h-[42px] top-px left-0">
          <MenuItem
            className="![justify-content:unset] !absolute !left-[22px] !top-0"
            divClassName="!text-primary-2"
            property1="default"
            text="Notifikasi"
          />
          <Notification className="!absolute !w-[22px] !h-[23px] !top-[8px] !left-0" />
        </div>
        <Profil
          arrowDown={profilArrowDown}
          className="!absolute !left-[846px] !w-[126px] !top-0"
          openartImage="../../../static/img/openart-image-nfswrdqc-1711466557108-raw-2-2.png"
          property1="default"
        />
      </div>
    </div>
  );
};

NavbarUserFitur.propTypes = {
  profilArrowDown: PropTypes.string,
};
