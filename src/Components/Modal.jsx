import React from 'react';
import { useSwipeable } from 'react-swipeable';
import CloseIcon from '../../assets/icons/close-icon.svg';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center">
      <div className="bg-white w-[425px] h-[70vh] rounded-t-2xl p-6 animate-slide-up relative overflow-y-auto">
        <div className="absolute top-4 right-4 flex items-center">
          <span className="mr-2 text-black text-xs font-bold cursor-pointer" onClick={onClose}>CLOSE</span>
          <img 
            src={CloseIcon} 
            alt="Close" 
            className="w-4 h-4 cursor-pointer invert" 
            onClick={onClose}
          />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
