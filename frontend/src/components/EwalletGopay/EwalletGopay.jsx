import PropTypes from "prop-types";
import React from "react";

export const EwalletGopay = ({
  className,
  GOPAYClassName,
  overlapGroupClassName,
  logoClassName,
  combinedShapeClassName,
  combinedShape = "/img/combined-shape.svg",
  combinedShapeClassNameOverride,
  img = "/img/combined-shape-1.svg",
}) => {
  return (
    <div className={`w-[70px] h-[50px] ${className}`}>
      <div className={`h-[50px] ${GOPAYClassName}`}>
        <div className={`relative w-[72px] h-[52px] -top-px -left-px bg-white rounded-[4px] ${overlapGroupClassName}`}>
          <div className={`relative w-[58px] h-[13px] top-[20px] left-[7px] ${logoClassName}`}>
            <img
              className={`absolute w-[13px] h-[13px] top-0 left-0 ${combinedShapeClassName}`}
              alt="Combined shape"
              src={combinedShape}
            />
            <img
              className={`absolute w-[42px] h-[11px] top-[2px] left-[16px] ${combinedShapeClassNameOverride}`}
              alt="Combined shape"
              src={img}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

EwalletGopay.propTypes = {
  combinedShape: PropTypes.string,
  img: PropTypes.string,
};
