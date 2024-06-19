import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";

export const SelectButton = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`border border-solid w-[30px] h-[30px] rounded-[15px] ${
        state.property1 === "variant-2" ? "border-primary-2" : "border-black"
      } ${state.property1 === "variant-2" ? "bg-primary-2" : "bg-white"} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    />
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

SelectButton.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
