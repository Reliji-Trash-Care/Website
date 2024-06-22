import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { useNavigate } from 'react-router-dom';

export const Button = ({ property1, className, divClassName, text = "Button" ,onClick ,navigateTo}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  const navigate = useNavigate();

  return (
    <button
      className={`all-[unset] box-border inline-flex items-center gap-[10px] px-[16px] py-[10px] rounded-[10px] justify-center relative cursor-pointer ${
        state.property1 === "variant-2" ? "bg-additional-1" : "bg-primary-2"
      } ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => {
        if (onClick) {
          onClick();
        } else if (navigateTo) {
          navigate(navigateTo);
        }
      }}
    >
      <div
        className={`font-body-2-bold w-fit mt-[-1.00px] tracking-[var(--body-2-bold-letter-spacing)] text-[length:var(--body-2-bold-font-size)] [font-style:var(--body-2-bold-font-style)] font-[number:var(--body-2-bold-font-weight)] text-center whitespace-nowrap leading-[var(--body-2-bold-line-height)] relative ${
          state.property1 === "variant-2" ? "text-primary-2" : "text-primary-1"
        } ${divClassName}`}
      >
        {text}
      </div>
    </button>
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

Button.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  text: PropTypes.string,
};
