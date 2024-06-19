/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const EwalletDana = ({ className, DANAClassName, overlapGroupClassName, logoClassName }) => {
  return (
    <div className={`w-[70px] h-[50px] ${className}`}>
      <div className={`h-[50px] ${DANAClassName}`}>
        <div
          className={`relative w-[72px] h-[52px] -top-px -left-px bg-[#108ee9] rounded-[4px] ${overlapGroupClassName}`}
        >
          <div
            className={`relative w-[56px] h-[16px] top-[18px] left-[8px] bg-[url(/static/img/shape.svg)] bg-[100%_100%] ${logoClassName}`}
          />
        </div>
      </div>
    </div>
  );
};
