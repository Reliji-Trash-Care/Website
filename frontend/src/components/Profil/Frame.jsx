import PropTypes from "prop-types";
import React from "react";

export const Frame = ({
  property1,
  className,
  openartImage = "openart-image-nfswrdqc-1711466557108-raw-2.png",
  setting = "setting.svg",
  logout = "logout.svg",
}) => {
  return (
    <div
      className={`inline-flex flex-col items-start gap-[26px] shadow-[0px_4px_15px_#00000040] p-4 rounded-[10px] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] bg-primary-1 backdrop-blur-[30px] backdrop-brightness-[100%] relative ${className}`}
    >
      <div className="inline-flex items-start gap-3 flex-[0_0_auto] relative">
        <div className="inline-flex items-start flex-[0_0_auto] relative">
          <img
            className="w-[42px] object-cover h-[42px] relative"
            alt="Openart image"
            src={property1 === "variant-2" ? "image.png" : openartImage}
          />
        </div>
        <div className="inline-flex flex-col items-start flex-[0_0_auto] relative">
          <div className="inline-flex items-center gap-2.5 flex-[0_0_auto] justify-center relative">
            <div className="font-body-1-bold w-fit mt-[-1.00px] tracking-[var(--body-1-bold-letter-spacing)] text-[length:var(--body-1-bold-font-size)] [font-style:var(--body-1-bold-font-style)] text-variable-collection-pure-black font-[number:var(--body-1-bold-font-weight)] text-center whitespace-nowrap leading-[var(--body-1-bold-line-height)] relative">
              Sopia
            </div>
          </div>
          <div className="inline-flex items-center gap-2.5 flex-[0_0_auto] justify-center relative">
            <div className="font-body-2-regular w-fit mt-[-1.00px] tracking-[var(--body-2-regular-letter-spacing)] text-[length:var(--body-2-regular-font-size)] [font-style:var(--body-2-regular-font-style)] text-[#8f8f8f] font-[number:var(--body-2-regular-font-weight)] text-center whitespace-nowrap leading-[var(--body-2-regular-line-height)] relative">
              sopia@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div className="inline-flex flex-col items-start gap-4 flex-[0_0_auto] relative">
        <div className="inline-flex items-center gap-2 flex-[0_0_auto] relative">
          <img className="w-6 h-6 relative" alt="Setting" src={property1 === "variant-2" ? "image.svg" : setting} />
          <div className="inline-flex items-center gap-2.5 flex-[0_0_auto] justify-center relative">
            <div onClick={() => window.location.href = '/setelanprofil'} className="cursor-pointer font-body-2-regular w-fit mt-[-1.00px] tracking-[var(--body-2-regular-letter-spacing)] text-[length:var(--body-2-regular-font-size)] [font-style:var(--body-2-regular-font-style)] text-[#8f8f8f] font-[number:var(--body-2-regular-font-weight)] text-center whitespace-nowrap leading-[var(--body-2-regular-line-height)] relative">
              Setelan
            </div>
          </div>
        </div>
        <div className="inline-flex items-center gap-2 flex-[0_0_auto] relative">
          <img className="w-6 h-6 relative" alt="Logout" src={property1 === "variant-2" ? "logout-2.svg" : logout} />
          <div className="inline-flex items-center gap-2.5 flex-[0_0_auto] justify-center relative">
            <div 
            onClick={() => window.location.href = '/login'}
            className="cursor-pointer font-body-2-regular w-fit mt-[-1.00px] tracking-[var(--body-2-regular-letter-spacing)] text-[length:var(--body-2-regular-font-size)] [font-style:var(--body-2-regular-font-style)] text-[#8f8f8f] font-[number:var(--body-2-regular-font-weight)] text-center whitespace-nowrap leading-[var(--body-2-regular-line-height)] relative">
              Keluar
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Frame.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  openartImage: PropTypes.string,
  setting: PropTypes.string,
  logout: PropTypes.string,
};
