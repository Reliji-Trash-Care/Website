import React from "react";
import { Button } from "../../components/Button";
import { Jadwal } from "../../components/Jadwal";
import { NavbarUserFitur } from "../../components/NavbarUserFitur";
import { SideBarWrapper } from "../../components/SideBarWrapper";
import { TextField } from "../../components/TextField";

export const SetelanGanti = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-primary-1 overflow-hidden w-[1440px] h-[1024px] relative">
        <div className="absolute w-[1674px] h-[1787px] top-[86px] left-[242px]">
          <div className="absolute w-[1674px] h-[1674px] top-[113px] left-0 bg-primary-2 rounded-[837px] blur-[550px] opacity-[0.36]" />
          <div className="w-[690px] left-[388px] absolute h-[600px] top-0 bg-primary-1 rounded-[15px] shadow-drop-shadow-2" />
          <div className="w-[282px] left-[82px] absolute h-[600px] top-0 bg-primary-1 rounded-[15px] shadow-drop-shadow-2" />
          <div className="inline-flex flex-col items-start gap-[36px] absolute top-[38px] left-[109px]">
          <a href="/setelanprofil" className="font-body-1-regular w-fit tracking-[var(--body-1-regular-letter-spacing)] [font-style:var(--body-1-regular-font-style)] text-[length:var(--body-1-regular-font-size)] text-black font-[number:var(--body-1-regular-font-weight)] text-center whitespace-nowrap leading-[var(--body-1-regular-line-height)] relative">
            Edit Profile</a>
            <a href="/setelanganti" className="font-body-1-regular w-fit tracking-[var(--body-1-regular-letter-spacing)] [font-style:var(--body-1-regular-font-style)] text-[length:var(--body-1-regular-font-size)] text-black font-[number:var(--body-1-regular-font-weight)] text-center whitespace-nowrap leading-[var(--body-1-regular-line-height)] relative">
            Ganti</a>
            <a href="/setelannotifikasi" className="font-body-1-regular w-fit tracking-[var(--body-1-regular-letter-spacing)] [font-style:var(--body-1-regular-font-style)] text-[length:var(--body-1-regular-font-size)] text-black font-[number:var(--body-1-regular-font-weight)] text-center whitespace-nowrap leading-[var(--body-1-regular-line-height)] relative">
            Notifikasi</a>
          </div>
          <div className="inline-flex flex-col items-start gap-[24px] absolute top-[32px] left-[427px]">
            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="flex w-[229px] items-center gap-[12px] px-0 py-[6px] relative flex-[0_0_auto] bg-primary-1 rounded-[10px]">
                <div className="relative w-fit mt-[-1.00px] font-body-1-regular font-[number:var(--body-1-regular-font-weight)] text-black text-[length:var(--body-1-regular-font-size)] text-center tracking-[var(--body-1-regular-letter-spacing)] leading-[var(--body-1-regular-line-height)] whitespace-nowrap [font-style:var(--body-1-regular-font-style)]">
                  Password Saat Ini
                </div>
              </div>
              <TextField
                className="!rounded-[10px] !w-[612px]"
                hasLabelText={false}
                input=""
                inputTextClassName="!text-variable-collection-pure-black !tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                leadingIcon={false}
                state="enabled"
                style="outlined"
                supportingText={false}
                textConfigurations="input-text"
                textFieldClassName="!rounded-[10px] !bg-primary-1"
                trailingIcon={false}
              />
            </div>
            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="flex w-[229px] items-center gap-[12px] px-0 py-[6px] relative flex-[0_0_auto] bg-primary-1 rounded-[10px]">
                <div className="relative w-fit mt-[-1.00px] font-body-1-regular font-[number:var(--body-1-regular-font-weight)] text-black text-[length:var(--body-1-regular-font-size)] text-center tracking-[var(--body-1-regular-letter-spacing)] leading-[var(--body-1-regular-line-height)] whitespace-nowrap [font-style:var(--body-1-regular-font-style)]">
                  Password Baru
                </div>
              </div>
              <TextField
                className="!rounded-[10px] !w-[612px]"
                hasLabelText={false}
                input=""
                inputTextClassName="!text-variable-collection-pure-black !tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                leadingIcon={false}
                state="enabled"
                style="outlined"
                supportingText={false}
                textConfigurations="input-text"
                textFieldClassName="!rounded-[10px] !bg-primary-1"
                trailingIcon={false}
              />
            </div>
            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="flex w-[229px] items-center gap-[12px] px-0 py-[6px] relative flex-[0_0_auto] bg-primary-1 rounded-[10px]">
                <div className="relative w-fit mt-[-1.00px] font-body-1-regular font-[number:var(--body-1-regular-font-weight)] text-black text-[length:var(--body-1-regular-font-size)] text-center tracking-[var(--body-1-regular-letter-spacing)] leading-[var(--body-1-regular-line-height)] whitespace-nowrap [font-style:var(--body-1-regular-font-style)]">
                  Konfirmasi Password Baru
                </div>
              </div>
              <TextField
                className="!rounded-[10px] !w-[612px]"
                hasLabelText={false}
                input=""
                inputTextClassName="!text-variable-collection-pure-black !tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                leadingIcon={false}
                state="enabled"
                style="outlined"
                supportingText={false}
                textConfigurations="input-text"
                textFieldClassName="!rounded-[10px] !bg-primary-1"
                trailingIcon={false}
              />
            </div>
            <Button className="!flex-[0_0_auto]" property1="default" text="Simpan" />
          </div>
        </div>
        <NavbarUserFitur
          className="!fixed !left-[324px] !top-0"
          profilArrowDown="/img/arrow-down-2-3.svg"
          profilOpenartImage="/img/openart-image-nfswrdqc-1711466557108-raw-2-3.png"
          profilText="Admin"
        />
        <SideBarWrapper
          chatText="Chat"
          className="!fixed !left-0 !top-0"
          deteksiDeteksi="/img/deteksi-3.svg"
          logoPlaceholderGroup="/img/group-7-2.png"
          setelanDivClassName="!tracking-[0] !text-[16px] ![font-style:unset] !font-bold ![font-family:'Nunito',Helvetica] !leading-[22.4px]"
          setelanPropertyDefaultClassName="!flex-[0_0_auto] !bg-secondary-1"
          sideBarDivClassName="!text-primary-2 !tracking-[0] !text-[16px] ![font-style:unset] !font-normal ![font-family:'Nunito',Helvetica] !leading-[22.4px]"
          tagihanText="Pemasukan Iuran"
        />
      </div>
    </div>
  );
};
