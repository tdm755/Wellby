import React from "react";
import CloseIcon from "../../public/assets/icons/close-icon.svg";
import ModalHead from "../../public/assets/SVG/modal-head.svg"
import DashboardHeader from "../Components/Header/DashboardHeader";

function Modal({ isOpen, onClose, children, showHeader = true }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-end flex-col">
      {/* Header */}
      {showHeader && (
        <div className="bg-gradient-to-t from-[#FF9A04] via-[#FF9A04] via-10% to-[#FFCE05] w-full max-w-[320px] h-16 flex items-center px-6 rounded-t-2xl mb-[-1px]">
          <div className="flex items-center justify-between w-full">
            <img src={ModalHead} alt="Title Logo" className="w-full px-4 py-4"/>
          </div>
        </div>
      )}

      {/* Content */}
      <div className={`bg-white w-full max-w-[400px] h-[70vh] rounded-t-2xl p-6 animate-slide-up relative overflow-y-auto`}>
        {/* Close button */}
        <div className="absolute top-4 right-4 flex items-center">
          <button 
            onClick={onClose}
            className="flex items-center space-x-2 px-2 py-1 hover:bg-gray-100 rounded"
          >
            <span className="text-black text-sm font-bold">
              CLOSE
            </span>
            <img src={CloseIcon} alt="Close" className="w-4 h-4 cursor-pointer invert"/>
          </button>
        </div>
        
        {/* Modal content */}
        <div className="mt-8">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
