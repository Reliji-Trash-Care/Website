import React from "react";

export const NotifPopup = ({ className }) => {
  return (
    <div
      className={`inline-flex flex-col items-start gap-[26px] p-4 relative bg-primary-1 rounded-[10px] shadow-[0px_4px_15px_#00000040] backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] ${className}`}
    >
      <div className="inline-flex items-start gap-3 relative flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
          <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
            <p className="relative w-fit mt-[-1.00px] font-body-1-regular font-[number:var(--body-1-regular-font-weight)] text-variable-collection-pure-black text-[length:var(--body-1-regular-font-size)] tracking-[var(--body-1-regular-letter-spacing)] leading-[var(--body-1-regular-line-height)] [font-style:var(--body-1-regular-font-style)]">
              Sampahmu akan diangkut besok
              <br />
              pukul 08.00 WIB!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
