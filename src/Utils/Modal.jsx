import React from "react";
import CloseIcon from "../../public/assets/icons/close-icon.svg";
import ModalHead from "../../public/assets/SVG/modal-head.svg"

function Modal({ isOpen, onClose, children, showHeader = true }) {
  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`bg-white w-full max-w-[400px] rounded-t-2xl px-6 transition-transform duration-700 ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        {/* Header */}
        {showHeader && (
          <div className="bg-gradient-to-t absolute -top-16 mx-3 mr-10 from-[#FF9A04] via-[#FF9A04] via-10% to-[#FFCE05]  h-16 flex items-center  px-6 rounded-t-2xl mb-[-1px]">
            <div className="flex items-center justify-between w-full">
              <img src={ModalHead} alt="Title Logo" className="w-full px-4 py-4"/>
            </div>
          </div>
        )}

        {/* Close button */}
        <div onClick={onClose} className="absolute z-50 top-4 right-4 flex items-center">
          <button 
            
            className="flex items-center space-x-2 px-2 py-1 hover:bg-gray-100 rounded"
          >
            <span className="text-black text-sm font-bold">CLOSE</span>
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
