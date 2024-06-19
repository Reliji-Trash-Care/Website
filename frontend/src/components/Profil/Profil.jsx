import PropTypes from "prop-types";
import { useReducer } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Frame } from "./Frame";
import { Modal } from "../Modal";

export const Profil = ({
  property1,
  className,
  openartImage = "../../../static/img/openart-image-nfswrdqc-1711466557108-raw-2-1.png",
  arrowDown = "../../../static/img/arrow-down-2.svg",
  setting = "../../../static/img/setting.svg",
  logout = "../../../static/img/setting.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  const [isModalVisible, setModalVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0, right: 0 });
  const profilRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (profilRef.current && isModalVisible) {
      const rect = profilRef.current.getBoundingClientRect();
      setModalPosition({
        // top: rect.bottom + window.scrollY, // posisi modal tepat di bawah komponen profil
        left: rect.left + window.scrollX,  // sejajar dengan sisi kiri komponen profil
        top: rect.bottom + window.scrollY, // posisi modal tepat di bawah komponen profil
        // right: window.innerWidth - rect.right + window.scrollX,  // sejajar dengan sisi kanan komponen profil
      });
    }
  }, [isModalVisible]);

  return (
    <div 
    className="relative">
    <div
      className={`w-[123px] flex items-center rounded-[10px] relative ${
        state.property1 === "variant-2" ? "bg-additional-1" : "bg-primary-2"
      } ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}

      onClick={() => {
        setModalVisible(true);
      }}
    >

      <div className="inline-flex items-start gap-[10px] flex-[0_0_auto] p-[10px] relative">
        <img className="w-[24px] object-cover h-[24px] relative" alt="Openart image" src={openartImage} />
      </div>
      <div  onClick={() => setIsOpen((prev) => !prev)} className="inline-flex items-center gap-[10px] flex-[0_0_auto] ml-[-6px] p-[10px] justify-center relative">
        <div
          className={`font-body-2-bold w-fit mt-[-1.00px] tracking-[var(--body-2-bold-letter-spacing)] text-[length:var(--body-2-bold-font-size)] [font-style:var(--body-2-bold-font-style)] font-[number:var(--body-2-bold-font-weight)] text-center whitespace-nowrap leading-[var(--body-2-bold-line-height)] relative ${
            state.property1 === "variant-2" ? "text-primary-2" : "text-primary-1"
          }`}
        >
          <span
            className="cursor-pointer"
            
          >
            Sopia
          </span>
        </div>
      </div>
      <img
        className="w-[24px] ml-[-6px] h-[24px] relative"
        alt="Arrow down"
        src={state.property1 === "variant-2" ? "../../../static/img/arrow-down-2-1.svg" : arrowDown}
      />
    </div>

    {/* {isModalVisible && (
        <div className="absolute bg-white border border-gray-300 shadow-lg rounded-[10px] p-[10px] z-50">
            <Modal isVisible={isModalVisible} onClose={() => setModalVisible(false)}>
                <Frame property1={state.property1} openartImage={openartImage} setting={setting} logout={logout} />
            </Modal>
        </div>
      )} */}

    {
      isOpen && 
      (
      <div className="absolute right-0 top-12" >
      <Frame openartImage={openartImage} setting={setting} logout={logout} />
      </div>
      )
    }
      

    </div>

    
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

Profil.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  openartImage: PropTypes.string,
  arrowDown: PropTypes.string,
  setting: PropTypes.string,
  logout: PropTypes.string,
};
