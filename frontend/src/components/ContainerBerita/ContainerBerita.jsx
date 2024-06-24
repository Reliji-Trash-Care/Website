import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button";

export const ContainerBerita = ({ className, text = "Header", buttonText = "Button" }) => {
  return (
    <div
      className={`flex w-[1200px] items-start gap-[24px] p-[24px] relative bg-white rounded-[10px] shadow-drop-shadow-2 ${className}`}
    >
      <div className="flex flex-col items-start gap-[24px] relative flex-1 grow">
        <div className="flex flex-col items-start gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] font-heading-5-semibold font-[number:var(--heading-5-semibold-font-weight)] text-tersier-2 text-[length:var(--heading-5-semibold-font-size)] tracking-[var(--heading-5-semibold-letter-spacing)] leading-[var(--heading-5-semibold-line-height)] [font-style:var(--heading-5-semibold-font-style)]">
            {text}
          </div>
          <p className="relative self-stretch font-body-1-regular font-[number:var(--body-1-regular-font-weight)] text-tersier-2 text-[length:var(--body-1-regular-font-size)] tracking-[var(--body-1-regular-letter-spacing)] leading-[var(--body-1-regular-line-height)] [font-style:var(--body-1-regular-font-style)]">
            Permasalahan sampah&nbsp;&nbsp;telah menjadi sebuah ancaman bagi bangsa Indonesia. Tumpukan sampah
            kian&nbsp;&nbsp;menggunung di berbagai tempat, mencemari lingkungan dan membahayakan&nbsp;&nbsp;kesehatan
            masyarakat. Tak hanya itu, sampah juga menimbulkan dampak&nbsp;&nbsp;sosial dan ekonomi yang tak kalah
            serius.
          </p>
        </div>
        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
          <a href="/beritadetailuser"><Button className="!flex-[0_0_auto]" property1="default" text={buttonText} /></a>
        </div>
      </div>
      <div className="flex flex-col items-start relative flex-1 self-stretch grow">
        <img
          className="relative self-stretch w-full h-[358px] mb-[-8.00px] ml-[-4.00px] mr-[-4.00px] object-cover"
          alt="Ramadhan momentum"
          src="../../../static/img/ramadhan-momentum-untuk-menyadari-bahaya-sampah-1710922717-1.png"
        />
      </div>
    </div>
  );
};

ContainerBerita.propTypes = {
  text: PropTypes.string,
  buttonText: PropTypes.string,
};
