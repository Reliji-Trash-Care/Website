import PropTypes from "prop-types";
import React from "react";
import gamBar from "../../../static/img/group-7.png"

export const LogoPlaceholder = ({
  className,
  groupClassName,
  // group = "../../assets/group-7.png",
  elijiTrashCareClassName,
}) => {
  return (
    <div className={`inline-flex flex-col items-center justify-center relative bg-white ${className}`}>
      <div className="inline-flex items-center relative flex-[0_0_auto]">
        <img className={`relative w-[18.05px] h-[18px] ${groupClassName}`} alt="Group" src={gamBar} />
        <p
          className={`relative w-fit mt-[-1.00px] ml-[-4px] [font-family:'Nunito',Helvetica] font-normal text-primary-2 text-[20px] tracking-[0] leading-[normal] ${elijiTrashCareClassName}`}
        >
          <span className="font-bold">eliji </span>
          <span className="font-light">Trash Care</span>
        </p>
      </div>
    </div>
  );
};

LogoPlaceholder.propTypes = {
  group: PropTypes.string,
};
