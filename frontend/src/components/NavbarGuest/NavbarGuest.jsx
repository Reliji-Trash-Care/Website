import PropTypes from "prop-types";
import React from "react";
import { Link } from 'react-router-dom';
import { Daftar } from "../Daftar";
import { LogoPlaceholder } from "../LogoPlaceholder";
import { Masuk } from "../Masuk";
import { MenuItem } from "../MenuItem";

export const NavbarGuest = ({ 
  className, 
  logoPlaceholderGroup = "", 
  landingpageClassName , landingpagedivClassName = "!text-primary-2" , 
  tentangkamiClassName, tentangkamidivClassName = "text-primary-2" ,
  layananClassName, layanandivClassName = "text-primary-2" ,
  beritaguestClassName, beritaguestdivClassName = "text-primary-2" ,

}) => {
  return (
    <div
      className={`flex w-[1440px] items-start justify-between px-[120px] py-[10px] relative bg-white rounded-[0px_0px_15px_15px] shadow-[0px_2px_10px_#00000040] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] ${className}`}
    >
      <div className="inline-flex items-center gap-[24px] relative flex-[0_0_auto]">
        <LogoPlaceholder
          className="!flex-[0_0_auto] !bg-[unset]"
          elijiTrashCareClassName="!mt-[-1.41px] !ml-[-5.64px]"
          src={logoPlaceholderGroup}
          groupClassName="!h-[25.37px] !w-[25.43px]"
        />
        <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
          <Link to="/" className="!flex-[0_0_auto]">
            <MenuItem
              className={landingpageClassName}
              divClassName={landingpagedivClassName}
              property1="default"
              text="Beranda"
            />
          </Link>
          <Link to="/tentangkami" className="!flex-[0_0_auto]">
            <MenuItem
              className={tentangkamiClassName}
              divClassName={tentangkamidivClassName}
              property1="default"
              text="Tentang Kami"
            />
          </Link>
          <Link to="/layanan" className="!flex-[0_0_auto]">
            <MenuItem
              className={layananClassName}
              divClassName={layanandivClassName}
              property1="default"
              text="Layanan"
            />
          </Link>
          <Link to="/beritaguest" className="!flex-[0_0_auto]">
            <MenuItem
              className={beritaguestClassName}
              divClassName={beritaguestdivClassName}
              property1="default"
              text="Berita"
            />
          </Link>
        </div>
      </div>
      <div className="inline-flex items-start gap-[10px] relative flex-[0_0_auto]">
        <Link to="/login" className="!flex-[0_0_auto]">
          <Masuk className="!flex-[0_0_auto]" property1="default" />
        </Link>
        <Link to="/signup" className="!flex-[0_0_auto]">
          <Daftar className="!flex-[0_0_auto]" property1="default" />
        </Link>
      </div>
    </div>
  );
};

NavbarGuest.propTypes = {
  logoPlaceholderGroup: PropTypes.string,
};
