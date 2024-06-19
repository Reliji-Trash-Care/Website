import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
   
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg p-6 w-[300px] relative" onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
        </div>
      </div>
   
  );
};

Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
