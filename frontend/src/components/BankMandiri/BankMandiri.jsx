import PropTypes from "prop-types";
import React from "react";

export const BankMandiri = ({
  className,
  MANDIRIClassName,
  logoClassName,
  overlapGroupClassName,
  logoMandiriClassName,
  fillClassName,
  fill = "/img/fill-1.svg",
  fillClassNameOverride,
  img = "/img/fill-3.svg",
  imgClassName,
  fill1 = "/img/fill-5.svg",
  imgClassNameOverride,
  fill2 = "/img/fill-7.svg",
  fillClassName1,
  fill3 = "/img/fill-9.svg",
  fillClassName2,
  fill4 = "/img/fill-11.svg",
  fillClassName3,
  fill5 = "/img/fill-12.svg",
  flagClassName,
  flag = "/img/flag.svg",
}) => {
  return (
    <div className={`w-[70px] h-[50px] ${className}`}>
      <div className={`h-[50px] bg-[#003d79] rounded-[4px] ${MANDIRIClassName}`}>
        <div className={`relative w-[60px] h-[18px] top-[14px] left-[5px] ${logoClassName}`}>
          <div className={`relative h-[18px] ${overlapGroupClassName}`}>
            <div className={`absolute w-[46px] h-[11px] top-[7px] left-0 ${logoMandiriClassName}`}>
              <img className={`absolute w-[11px] h-[8px] top-[3px] left-0 ${fillClassName}`} alt="Fill" src={fill} />
              <img
                className={`absolute w-[6px] h-[8px] top-[3px] left-[12px] ${fillClassNameOverride}`}
                alt="Fill"
                src={img}
              />
              <img
                className={`absolute w-[7px] h-[8px] top-[3px] left-[20px] ${imgClassName}`}
                alt="Fill"
                src={fill1}
              />
              <img
                className={`absolute w-[7px] h-[11px] top-0 left-[27px] ${imgClassNameOverride}`}
                alt="Fill"
                src={fill2}
              />
              <img
                className={`absolute w-[2px] h-[8px] top-[3px] left-[36px] ${fillClassName1}`}
                alt="Fill"
                src={fill3}
              />
              <img
                className={`absolute w-[4px] h-[8px] top-[3px] left-[39px] ${fillClassName2}`}
                alt="Fill"
                src={fill4}
              />
              <img
                className={`absolute w-[2px] h-[8px] top-[3px] left-[45px] ${fillClassName3}`}
                alt="Fill"
                src={fill5}
              />
            </div>
            <img className={`absolute w-[37px] h-[8px] top-0 left-[23px] ${flagClassName}`} alt="Flag" src={flag} />
          </div>
        </div>
      </div>
    </div>
  );
};

BankMandiri.propTypes = {
  fill: PropTypes.string,
  img: PropTypes.string,
  fill1: PropTypes.string,
  fill2: PropTypes.string,
  fill3: PropTypes.string,
  fill4: PropTypes.string,
  fill5: PropTypes.string,
  flag: PropTypes.string,
};
