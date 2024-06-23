import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";

export const Tagihan = ({ property1, className, wallet = "/img/wallet-1.svg", divClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`w-[229px] flex items-center gap-[12px] px-[10px] py-[6px] rounded-[10px] relative ${
        state.property1 === "variant-2" ? "bg-secondary-1" : "bg-primary-1"
      } ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <img className="w-[24px] h-[24px] relative" alt="Wallet" src={wallet} />
      <div
      >
      <a href="/tagihanbelum" className={`font-body-1-regular w-fit tracking-[var(--body-1-regular-letter-spacing)] [font-style:var(--body-1-regular-font-style)] text-[length:var(--body-1-regular-font-size)] text-primary-2 font-[number:var(--body-1-regular-font-weight)] text-center whitespace-nowrap leading-[var(--body-1-regular-line-height)] relative ${divClassName}`}>Tagihan Iuran</a>
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

Tagihan.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  wallet: PropTypes.string,
};