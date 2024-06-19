import { Button } from "../../components/Button";
import { NavbarGuest } from "../../components/NavbarGuest";
import { StateDefaultChangeWrapper } from "../../components/StateDefaultChangeWrapper";
import { TextField } from "../../components/TextField";
import { CheckboxFalse } from "../../icons/CheckboxFalse";
import { EyeOff } from "../../icons/EyeOff";

export const Login = () => {
  
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-primary-1 overflow-hidden w-[1440px] h-[1024px] relative">
        <div className="absolute w-[732px] h-[1024px] top-0 left-[708px] bg-primary-2">
          <img
            className="absolute w-[487px] h-[430px] top-[171px] left-[125px] object-cover"
            alt="Waste management"
            src="../../../static/img/waste-management-pana-1.png"
          />
        </div>
        <div className="absolute w-[486px] h-[599px] top-[118px] left-[120px]">
          <div className="flex flex-col w-[486px] items-start gap-[16px] absolute top-0 left-0">
            <div className="relative w-fit mt-[-1.00px] font-heading-2-bold font-[number:var(--heading-2-bold-font-weight)] text-t text-[length:var(--heading-2-bold-font-size)] tracking-[var(--heading-2-bold-letter-spacing)] leading-[var(--heading-2-bold-line-height)] whitespace-nowrap [font-style:var(--heading-2-bold-font-style)]">
              Masuk
            </div>
            <div className="relative w-fit opacity-75 font-body-1-regular font-[number:var(--body-1-regular-font-weight)] text-t text-[length:var(--body-1-regular-font-size)] tracking-[var(--body-1-regular-letter-spacing)] leading-[var(--body-1-regular-line-height)] whitespace-nowrap [font-style:var(--body-1-regular-font-style)]">
              Masuk untuk mengakses akunmu
            </div>
          </div>
          <div className="flex flex-col w-[484.01px] items-start gap-[40px] absolute top-[135px] left-0">
            <div className="flex flex-col w-[486px] items-start gap-[24px] relative flex-[0_0_auto] mr-[-1.99px]">
              <TextField
                className="!w-[486px]"
                inputTextClassName="!tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                label="E-mail"
                // inputType={inputType}
                labelTextClassName="!bg-primary-1"
                labelTextClassNameOverride="!tracking-[var(--body-2-regular-letter-spacing)] !text-[length:var(--body-2-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-2-regular-font-style)] !font-[number:var(--body-2-regular-font-weight)] !font-body-2-regular !leading-[var(--body-2-regular-line-height)]"
                leadingIcon={false}
                state="enabled"
                style="outlined"
                supportingText={false}
                textConfigurations="input-text"
                textFieldClassName="!rounded-[10px] !bg-primary-1"
                trailingIcon={false}
              />
              <TextField
                className="!w-[486px]"
                divClassName="!text-t !tracking-[var(--body-2-regular-letter-spacing)] !text-[length:var(--body-2-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-2-regular-font-style)] !font-[number:var(--body-2-regular-font-weight)] !font-body-2-regular !leading-[var(--body-2-regular-line-height)]"
                icon={<EyeOff className="!relative !w-[24px] !h-[24px]" color="#313131" />}
                inputTextClassNameOverride="!tracking-[var(--body-1-regular-letter-spacing)] !text-[length:var(--body-1-regular-font-size)] !whitespace-nowrap ![font-style:var(--body-1-regular-font-style)] !font-[number:var(--body-1-regular-font-weight)] !font-body-1-regular !leading-[var(--body-1-regular-line-height)]"
                label="Password"
                labelTextWrapperClassName="!bg-primary-1"
                leadingIcon={false}
                state="enabled"
                style="outlined"
                supportingText={false}
                textConfigurations="input-text"
                textFieldClassName="!rounded-[10px] !bg-primary-1"
                trailingIcon
              />
              <div className="flex w-[486px] items-center gap-[252px] relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
                  <CheckboxFalse className="!relative !w-[24px] !h-[24px]" color="#313131" />
                  <div className="relative w-fit font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-t text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] whitespace-nowrap [font-style:var(--body-2-regular-font-style)]">
                    Ingat Saya
                  </div>
                </div>
                <div className="relative w-[135px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-primary-2 text-[length:var(--body-2-regular-font-size)] text-right tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] [font-style:var(--body-2-regular-font-style)]">
                  Lupa Password
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[486px] items-start relative flex-[0_0_auto] mr-[-1.99px]">
              <a href="/home"><Button
                className="!h-[49px] !flex !w-[486px]"
                divClassName="!mt-[unset]"
                property1="default"
                text="Masuk"
              /></a>
              <StateDefaultChangeWrapper
                changeIcon="none"
                className="!mt-[-17px] !flex-[0_0_auto] !flex !w-[486px]"
                hasFrame={false}
                size="large"
                state="default"
                type="filled"
              />
              <p className="relative w-[486px] mt-[22px] font-body-2-bold font-[number:var(--body-2-bold-font-weight)] text-transparent text-[length:var(--body-2-bold-font-size)] text-center tracking-[var(--body-2-bold-letter-spacing)] leading-[var(--body-2-bold-line-height)] [font-style:var(--body-2-bold-font-style)]">
                <span className="text-[#303030] font-body-2-bold [font-style:var(--body-2-bold-font-style)] font-[number:var(--body-2-bold-font-weight)] tracking-[var(--body-2-bold-letter-spacing)] leading-[var(--body-2-bold-line-height)] text-[length:var(--body-2-bold-font-size)]">
                  Tidak punya akun?{" "}
                </span>
                <a className="text-[#235d3a] font-body-2-bold [font-style:var(--body-2-bold-font-style)] font-[number:var(--body-2-bold-font-weight)] tracking-[var(--body-2-bold-letter-spacing)] leading-[var(--body-2-bold-line-height)] text-[length:var(--body-2-bold-font-size)]" href="/signup">
                  Daftar
                </a>
              </p>
            </div>
            <div className="flex w-[486px] items-center gap-[16px] relative flex-[0_0_auto] mr-[-1.99px]">
              <div className="relative flex-1 grow h-px bg-t opacity-25" />
              <div className="relative w-fit mt-[-1.00px] opacity-50 font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-t text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] whitespace-nowrap [font-style:var(--body-2-regular-font-style)]">
                Atau masuk dengan
              </div>
              <div className="relative flex-1 grow h-px bg-t opacity-25" />
            </div>
            <a href="home">
              <img className="relative w-[486px] flex-[0_0_auto] mr-[-1.99px]" alt="Frame" src="../../../static/img/frame-228.svg" />
              </a>
          </div>
        </div>
        <NavbarGuest
          className="!fixed !left-[-3px] !top-0"
          logoPlaceholderGroup="../../../static/img/group-7-2.png"
          menuItemDivClassName="!underline !tracking-[0] !text-[16px] ![font-style:unset] !font-bold ![font-family:'Nunito',Helvetica] !leading-[22.4px]"
          to="/login"
        />
      </div>
    </div>
  );
};
