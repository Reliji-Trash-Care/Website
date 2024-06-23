import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { useNavigate } from 'react-router-dom';

export const MenuItem = ({ property1, className, divClassName, text = "Menu item" , navigateTo}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  const navigate = useNavigate();

  return (
    <div
      className={`inline-flex items-center gap-[10px] px-[16px] py-[10px] justify-center  rounded-[10px]  relative ${
        state.property1 === "variant-2" ? "bg-secondary-1" : "bg-primary-1"
      } ${className}`}
      onMouseEnter={() => {
        dispatch("mouse-enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onClick={() => {
        navigate(navigateTo);
      }}
    >
      <div
        className={`w-fit mt-[-1.00px] text-[#0c1d0a] text-center whitespace-nowrap relative ${
          state.property1 === "variant-2" ? "[font-family:'Nunito',Helvetica]" : "font-body-1-regular"
        } ${state.property1 === "variant-2" ? "tracking-[0]" : "tracking-[var(--body-1-regular-letter-spacing)]"} ${
          state.property1 === "variant-2" ? "text-[16px]" : "text-[length:var(--body-1-regular-font-size)]"
        } ${state.property1 === "default" ? "[font-style:var(--body-1-regular-font-style)]" : ""} ${
          state.property1 === "variant-2" ? "underline" : ""
        } ${state.property1 === "variant-2" ? "font-bold" : "font-[number:var(--body-1-regular-font-weight)]"} ${
          state.property1 === "variant-2" ? "leading-[22.4px]" : "leading-[var(--body-1-regular-line-height)]"
        } ${divClassName}`}
      >
        {text}
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse-enter":
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

MenuItem.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  text: PropTypes.string,
  navigateTo: PropTypes.string.isRequired,
};
