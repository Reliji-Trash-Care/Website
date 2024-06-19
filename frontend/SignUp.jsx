import React from "react";
import { Button } from "../../components/Button";
import { NavbarGuest } from "../../components/NavbarGuest";
import { TextField } from "../../components/TextField";
import { CheckboxFalse } from "../../icons/CheckboxFalse";
import { EyeOff } from "../../icons/EyeOff";

export const SignUp = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] h-[966px] relative">
        <form>
        <div className="absolute w-[732px] h-[1024px] top-[-29px] left-0 bg-primary-2">
          <img
            className="absolute w-[486px] h-[529px] top-[157px] left-[120px] object-cover"
            alt="Waste management"
            src="../../../static/img/waste-management-rafiki-1.png"
          />
        </div>
        <div className="flex flex-col w-[486px] h-[777px] items-start gap-[48px] absolute top-[122px] left-[834px]">
          <div className="flex flex-col items-start gap-[16px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-heading-2-bold font-[number:var(--heading-2-bold-font-weight)] text-tersier-2 text-[length:var(--heading-2-bold-font-size)] tracking-[var(--heading-2-bold-letter-spacing)] leading-[var(--heading-2-bold-line-height)] whitespace-nowrap [font-style:var(--heading-2-bold-font-style)]">
              Daftar
            </div>
            <p className="relative w-[486px] opacity-75 [font-family:'Nunito',Helvetica] font-normal text-tersier-2 text-[16px] tracking-[0] leading-[22.4px]">
              Mari kita siapkan semuanya sehingga kamu bisa mengakses akun pribadimu!
            </p>
          </div>
          <div className="relative w-[486px] h-[606px]">
            <div className="flex flex-col w-[486px] items-start gap-[40px] relative">
              <div className="flex flex-col items-start gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="self-stretch w-full flex-[0_0_auto] rounded-[4px_4px_0px_0px] flex flex-col items-start relative">
                  <div className="flex flex-col items-start gap-[10px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[15px] border border-solid border-[#79747e]">
                    <div className="flex items-center pl-[16px] pr-0 py-[4px] relative self-stretch w-full flex-[0_0_auto] rounded-[4px_4px_0px_0px]">
                      <div className="flex flex-col h-[35px] items-start justify-center relative flex-1 grow">
                        <div className="inline-flex items-center relative flex-[0_0_auto]">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito',Helvetica] font-normal text-tersier-2 text-[16px] tracking-[0] leading-[22.4px] whitespace-nowrap">
                          <input type="text" size="62" className="!rounded-[15px] !h-[unset] !flex-1 !grow !w-[unset] border-none outline-none"/>
                          </div>
                        </div>
                        <div className="inline-flex items-center px-[4px] py-0 absolute top-[-16px] left-[-4px] bg-white">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito',Helvetica] font-normal text-tersier-2 text-[14px] tracking-[0] leading-[19.6px] whitespace-nowrap">
                            E-mail
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-[486px] items-start gap-[24px] relative flex-[0_0_auto]">
                  <div className="flex flex-col items-start gap-[10px] relative self-stretch w-[unset] flex-1 bg-white rounded-[15px] border border-solid border-[#79747e]">
                    <div className="flex items-center pl-[16px] pr-0 py-[4px] relative self-stretch w-full flex-[0_0_auto] rounded-[4px_4px_0px_0px]">
                      <div className="flex flex-col h-[35px] items-start justify-center relative flex-1 grow">
                        <div className="inline-flex items-center relative flex-[0_0_auto]">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito',Helvetica] font-normal text-tersier-2 text-[16px] tracking-[0] leading-[22.4px] whitespace-nowrap">
                          <input type="text" size="22" className="!flex-1 !grow !w-[unset] outline-none border-none"/>
                          </div>
                        </div>
                        <div className="inline-flex items-center px-[4px] py-0 absolute top-[-16px] left-[-4px] bg-white">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito',Helvetica] font-normal text-tersier-2 text-[14px] tracking-[0] leading-[19.6px] whitespace-nowrap">
                            Nama Depan
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-start gap-[10px] relative self-stretch w-[unset] flex-1 bg-white rounded-[15px] border border-solid border-[#79747e]">
                    <div className="flex items-center pl-[16px] pr-0 py-[4px] relative self-stretch w-full flex-[0_0_auto] rounded-[4px_4px_0px_0px]">
                      <div className="flex flex-col h-[35px] items-start justify-center relative flex-1 grow">
                        <div className="inline-flex items-center relative flex-[0_0_auto]">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito',Helvetica] font-normal text-tersier-2 text-[16px] tracking-[0] leading-[22.4px] whitespace-nowrap">
                          <input type="text" size="22" className="!flex-1 !grow !w-[unset] outline-none border-none"/>
                          </div>
                        </div>
                        <div className="inline-flex items-center px-[4px] py-0 absolute top-[-16px] left-[-4px] bg-white">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito',Helvetica] font-normal text-tersier-2 text-[14px] tracking-[0] leading-[19.6px] whitespace-nowrap">
                            Nama Belakang
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="self-stretch w-full flex-[0_0_auto] rounded-[4px_4px_0px_0px] flex flex-col items-start relative">
                  <div className="flex flex-col items-start gap-[10px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[15px] border border-solid border-[#79747e]">
                    <div className="flex items-center pl-[16px] pr-0 py-[4px] relative self-stretch w-full flex-[0_0_auto] rounded-[4px_4px_0px_0px]">
                      <div className="flex flex-col h-[35px] items-start justify-center relative flex-1 grow">
                        <div className="inline-flex items-center relative flex-[0_0_auto]">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito',Helvetica] font-normal text-tersier-2 text-[16px] tracking-[0] leading-[22.4px] whitespace-nowrap">
                            <input type="text" size="62" className="border-none outline-none "></input>
                          </div>
                        </div>
                        <div className="inline-flex items-center px-[4px] py-0 absolute top-[-16px] left-[-4px] bg-white">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito',Helvetica] font-normal text-tersier-2 text-[14px] tracking-[0] leading-[19.6px] whitespace-nowrap">
                            Alamat
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[56px] self-stretch w-full rounded-[4px_4px_0px_0px] flex flex-col items-start relative">
                  <div className="flex flex-col items-start gap-[10px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[15px] border border-solid border-[#79747e]">
                    <div className="flex items-center pl-[16px] pr-0 py-[4px] relative self-stretch w-full flex-[0_0_auto] rounded-[4px_4px_0px_0px]">
                      <div className="flex flex-col h-[35px] items-start justify-center relative flex-1 grow">
                        <div className="inline-flex items-center relative flex-[0_0_auto]">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito',Helvetica] font-normal text-tersier-2 text-[16px] tracking-[0] leading-[22.4px] whitespace-nowrap">
                            <input type="password" size="58" className="border-none outline-none "></input>
                          </div>
                        </div>
                        <div className="inline-flex items-center px-[4px] py-0 absolute top-[-16px] left-[-4px] bg-white">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito',Helvetica] font-normal text-tersier-2 text-[14px] tracking-[0] leading-[19.6px] whitespace-nowrap">
                            Password
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col w-[48px] h-[44px] items-center justify-center gap-[10px] p-[12px] relative">
                        <EyeOff className="!relative !w-[24px] !h-[24px]" color="#1F1F1F" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
                  <CheckboxFalse className="!relative !w-[24px] !h-[24px]" color="#1F1F1F" />
                  <p className="relative w-fit font-body-2-bold font-[number:var(--body-2-bold-font-weight)] text-tersier-2 text-[length:var(--body-2-bold-font-size)] tracking-[var(--body-2-bold-letter-spacing)] leading-[var(--body-2-bold-line-height)] whitespace-nowrap [font-style:var(--body-2-bold-font-style)]">
                    Saya menyetujui semua persyaratan dan kebijakan privasi
                  </p>
                </div>
              </div>
              <div className="relative w-[486px] h-[74px]">
                <Button
                  className="!h-[46px] !rounded-[15px] !flex !absolute !left-0 !w-[486px] !top-0"
                  divClassName="!mt-[unset]"
                  property1="default"
                  text="Daftar"
                />
                <div className="flex flex-col w-[486px] items-start gap-[16px] absolute top-[54px] left-0">
                  <p className="relative w-[486px] mt-[-1.00px] font-body-2-bold font-[number:var(--body-2-bold-font-weight)] text-transparent text-[length:var(--body-2-bold-font-size)] text-center tracking-[var(--body-2-bold-letter-spacing)] leading-[var(--body-2-bold-line-height)] [font-style:var(--body-2-bold-font-style)]">
                    <span className="text-[#1e1e1e] font-body-2-bold [font-style:var(--body-2-bold-font-style)] font-[number:var(--body-2-bold-font-weight)] tracking-[var(--body-2-bold-letter-spacing)] leading-[var(--body-2-bold-line-height)] text-[length:var(--body-2-bold-font-size)]">
                      Sudah punya akun?{" "}
                    </span>
                    <a className="text-[#235d3a] font-body-2-bold [font-style:var(--body-2-bold-font-style)] font-[number:var(--body-2-bold-font-weight)] tracking-[var(--body-2-bold-letter-spacing)] leading-[var(--body-2-bold-line-height)] text-[length:var(--body-2-bold-font-size)]" href="/login">
                      Masuk
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-[16px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative flex-1 grow h-px bg-tersier-2 opacity-25" />
                <div className="relative w-fit mt-[-1.00px] opacity-50 font-body-2-semibold font-[number:var(--body-2-semibold-font-weight)] text-tersier-2 text-[length:var(--body-2-semibold-font-size)] tracking-[var(--body-2-semibold-letter-spacing)] leading-[var(--body-2-semibold-line-height)] whitespace-nowrap [font-style:var(--body-2-semibold-font-style)]">
                  Atau daftar dengan
                </div>
                <div className="relative flex-1 grow h-px bg-tersier-2 opacity-25" />
              </div>
              <img className="relative self-stretch w-full flex-[0_0_auto]" alt="Frame" src="../../../static/img/frame-228.svg" />
            </div>
          </div>
        </div>
        <div className="absolute w-[249px] h-[49px] top-[1322px] left-[64px]">
          <div className="relative w-[251px] h-[49px]">
            <img
              className="absolute w-[49px] h-[49px] top-[-1415px] left-[-661px]"
              alt="Group"
              src="../../../static/img/group-24.png"
            />
            <div className="absolute w-[200px] top-[8px] left-[49px] [font-family:'Poppins',Helvetica] font-bold text-t text-[20px] tracking-[-0.20px] leading-[30px]">
              Reliji Trash Care
            </div>
          </div>
        </div>
        <NavbarGuest
          className="!fixed !left-px !top-0"
          menuItemDivClassName="!underline !text-primary-2 !font-bold"
          to="/sign-up"
        />
      </form>
      </div>
    </div>
  );
};
