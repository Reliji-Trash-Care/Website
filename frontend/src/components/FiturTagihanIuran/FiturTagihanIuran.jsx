import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";

export const FiturTagihanIuran = ({ property1, className, group = "../../../static/img/group-1000002067.png" }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`w-[486px] h-[133px] overflow-hidden rounded-[10px] ${
        state.property1 === "variant-2" ? "bg-primary-2" : "bg-white"
      } ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div
        className={`w-[486px] flex flex-col items-start gap-[12px] p-[24px] rounded-[10px] relative ${
          state.property1 === "variant-2" ? "bg-secondary-1" : "bg-primary-2"
        }`}
      >
        <div
          className={`font-heading-5-bold self-stretch mt-[-1.00px] tracking-[var(--heading-5-bold-letter-spacing)] text-[length:var(--heading-5-bold-font-size)] [font-style:var(--heading-5-bold-font-style)] font-[number:var(--heading-5-bold-font-weight)] leading-[var(--heading-5-bold-line-height)] relative ${
            state.property1 === "variant-2" ? "text-primary-2" : "text-primary-1"
          }`}
        >
          Tagihan Iuran
        </div>
        <img
          className="w-[166px] object-cover h-px relative"
          alt="Line"
          src={state.property1 === "variant-2" ? "../../../static/img/line-25-5.svg" : "../../../static/img/line-25-4.svg"}
        />
        <p
          className={`font-body-1-regular self-stretch tracking-[var(--body-1-regular-letter-spacing)] [font-style:var(--body-1-regular-font-style)] text-[length:var(--body-1-regular-font-size)] font-[number:var(--body-1-regular-font-weight)] leading-[var(--body-1-regular-line-height)] relative ${
            state.property1 === "variant-2" ? "text-primary-2" : "text-primary-1"
          }`}
        >
          Cek tagihan iuran sampah di setiap bulannya
        </p>
        <img
          className="w-[215px] left-[271px] top-0 h-[133px] absolute"
          alt="Group"
          src={state.property1 === "variant-2" ? "../../../static/img/group-1000002067-1.png" : group}
        />
      </div>
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

FiturTagihanIuran.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  group: PropTypes.string,
};
