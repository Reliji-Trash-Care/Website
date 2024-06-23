import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from 'react-router-dom';

export const ContainerBerita2 = ({
  className,
  text = "Judul",
  text1 = "Tanggal",
  text2 = "Penulis",
  ramadhanMomentum = "/img/ramadhan-momentum-untuk-menyadari-bahaya-sampah-1710922717-1.png",
  navigateTo,
}) => {

  const navigate = useNavigate();

  return (
    <div onClick={() => {
      navigate(navigateTo);
    }}
    
    >
      
    <div className={`flex flex-col w-[792px] h-[562px] items-start gap-[12px] relative ${className}`}>
      <div className="flex flex-col items-start gap-[6px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative self-stretch mt-[-1.00px] font-heading-3-semibold font-[number:var(--heading-3-semibold-font-weight)] text-tersier-2 text-[length:var(--heading-3-semibold-font-size)] tracking-[var(--heading-3-semibold-letter-spacing)] leading-[var(--heading-3-semibold-line-height)] [font-style:var(--heading-3-semibold-font-style)]">
          {text}
        </div>
        {/* <div className="self-stretch relative font-body-1-regular font-[number:var(--body-1-regular-font-weight)] text-tersier-2 text-[length:var(--body-1-regular-font-size)] tracking-[var(--body-1-regular-letter-spacing)] leading-[var(--body-1-regular-line-height)] [font-style:var(--body-1-regular-font-style)]">
          {text1}
        </div> */}
        <div className="relative self-stretch font-body-1-semibold font-[number:var(--body-1-semibold-font-weight)] text-tersier-2 text-[length:var(--body-1-semibold-font-size)] tracking-[var(--body-1-semibold-letter-spacing)] leading-[var(--body-1-semibold-line-height)] [font-style:var(--body-1-semibold-font-style)]">
          {text2}
        </div>
      </div>
      <div className="flex flex-col items-start relative flex-1 self-stretch w-full grow">
        <img
          className="relative flex-1 self-stretch w-full grow object-cover"
          alt="Ramadhan momentum"
          src={ramadhanMomentum}
        />
      </div>
      <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex-1 mt-[-1.00px] relative font-body-1-regular font-[number:var(--body-1-regular-font-weight)] text-tersier-2 text-[length:var(--body-1-regular-font-size)] tracking-[var(--body-1-regular-letter-spacing)] leading-[var(--body-1-regular-line-height)] [font-style:var(--body-1-regular-font-style)]">
          {text1}
        </div>
      </div>
    </div>
    </div>
  );
};

ContainerBerita2.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  ramadhanMomentum: PropTypes.string,
  navigateTo: PropTypes.string.isRequired,
};
