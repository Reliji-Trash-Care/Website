/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const BankBri = ({ className, BRIClassName, logoClassName, logo = "/img/logo.png" }) => {
  return (
    <div className={`w-[70px] h-[50px] ${className}`}>
      <div className={`relative h-[50px] bg-[#00529c] rounded-[4px] ${BRIClassName}`}>
        <img className={`absolute w-[62px] h-[15px] top-[18px] left-[4px] ${logoClassName}`} alt="Logo" src={logo} />
      </div>
    </div>
  );
};

BankBri.propTypes = {
  logo: PropTypes.string,
};
