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
