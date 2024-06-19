import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";

export const Daftar = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`inline-flex items-center gap-[10px] px-[16px] py-[10px] rounded-[10px] justify-center relative ${
        state.property1 === "default" ? "" : ""
      } ${state.property1 === "variant-2" ? "bg-additional-1" : "bg-primary-2"} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div
        className={`font-body-2-bold w-fit mt-[-1.00px] tracking-[var(--body-2-bold-letter-spacing)] text-[length:var(--body-2-bold-font-size)] [font-style:var(--body-2-bold-font-style)] font-[number:var(--body-2-bold-font-weight)] text-center whitespace-nowrap leading-[var(--body-2-bold-line-height)] relative ${
          state.property1 === "variant-2" ? "text-primary-2" : "text-primary-1"
        }`}
      >
        Daftar
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

Daftar.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
