import React from 'react';
import WhatsAppLink from '../../components/WhatsAppLink';
import { NavbarUserFitur } from "../../components/NavbarUserFitur";
import { SideBarWrapper } from "../../components/SideBarWrapper";

const WhatsApp = () => {
  const phoneNumber = '6281234567890'; // ganti dengan nomor telepon yang diinginkan
  const message = 'Halo! Saya tertarik dengan produk Anda. Bisa kita diskusikan lebih lanjut?';

  return (
    
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-primary-1 overflow-hidden w-[1440px] h-[807px] relative">
        <div className="absolute w-[1674px] h-[1799px] top-[74px] left-[242px]">
          
          <div className="absolute w-[1674px] h-[1674px] top-[125px] left-0 bg-[#397d54b2] rounded-[837px] blur-[550px] opacity-[0.36]" />
          <div className="absolute w-[996px] h-[635px] top-0 left-[82px] bg-primary-1 rounded-[15px] shadow-drop-shadow-2" />
          <div className="absolute w-[532px] h-96 top-[111px] left-[483px] bg-primary-1 rounded-[15px] shadow-drop-shadow-2">
          <div className="text-center self-stretch mt-[100px] font-heading-3-semibold font-[number:var(--heading-3-semibold-font-weight)] text-tersier-2 text-[length:var(--heading-3-semibold-font-size)] tracking-[var(--heading-3-semibold-letter-spacing)] leading-[var(--heading-3-semibold-line-height)] [font-style:var(--heading-3-semibold-font-style)]">  
          <img className="absolute w-[425px] h-[525px] top-[-80px] right-[500px]" alt="Image" src="../../../static/img/image-4.png" />
          </div>
          <div className="absolute w-[396px] top-[43px] left-[72px] [font-family:'Nunito-Bold',Helvetica] font-bold text-primary-2 text-[26px] text-center tracking-[0.13px] leading-[39px] whitespace-nowrap">
            Butuh Informasi Lebih Lanjut?
          </div>    

            <p className="absolute w-[441px] top-[91px] left-[42px] font-heading-8-semibold font-[number:var(--heading-8-semibold-font-weight)] text-primary-2 text-[length:var(--body-1-semibold-font-size)] text-center tracking-[var(--heading-8-semibold-letter-spacing)] leading-[var(--heading-8-semibold-line-height)] [font-style:var(--heading-8-semibold-font-style)]">
              Jika Anda memiliki pertanyaan atau memerlukan bantuan tambahan, jangan ragu untuk menghubungi kami. Kami siap membantu Anda dengan cepat dan memberikan informasi yang Anda butuhkan.
            </p>

            <div className="absolute w-[261px] top-[242px] left-[140px] font-heading-8-semibold font-[number:var(--heading-8-semibold-font-weight)] text-primary-2 text-[length:var(--heading-8-semibold-font-size)] text-center tracking-[var(--heading-8-semibold-letter-spacing)] leading-[var(--heading-8-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-8-semibold-font-style)]">
            Hubungi Kami Sekarang!

            </div>
                <WhatsAppLink phoneNumber={phoneNumber} message={message} />
            </div>
          </div>
          <div className="absolute w-[284px] h-[44px] top-[125px] left-[164px]" />
      
      </div>
      
      <SideBarWrapper
          chatDivClassName="!text-primary-2 !tracking-[0] !text-[16px] ![font-style:unset] !font-bold ![font-family:'Nunito',Helvetica] !leading-[22.4px]"
          chatClassName="!flex-[0_0_auto] !bg-additional-1"
          className="!h-[807px] !fixed !left-0 !top-0"
          deteksiDeteksi="../../../static/img/deteksi-3.svg"
          logoPlaceholderGroup="../../../static/img/group-7-2.png"
        />
        <NavbarUserFitur
          className="!fixed !left-[324px] !top-0"
          profilArrowDown="../../../static/img/arrow-down-2-3.svg"
          profilOpenartImage="../../../static/img/openart-image-nfswrdqc-1711466557108-raw-2-3.png"
        />
      </div>
    // </div>
    
  );
};

export default WhatsApp;