import React from 'react';
import CloseIcon from '../../../assets/icons/close-icon.svg';
import SidebarImage from '../../../assets/SVG/sidebar-img.svg';

function Sidebar({ isOpen, onClose }) {
  return (
    <div 
      className={`absolute top-0 left-0 h-full w-4/5 bg-[#FF3E4D] transition-transform duration-300 ease-in-out transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } z-20 flex flex-col`}
    >
      <div className="p-4 flex justify-end items-center">
        <span className="mr-2 text-white text-xs font-bold">CLOSE</span>
        <img 
          src={CloseIcon} 
          alt="Close" 
          className="w-5 h-5 cursor-pointer" 
          onClick={onClose}
        />
      </div>
      <div className="flex-grow relative">
        <img 
          src={SidebarImage} 
          alt="Sidebar" 
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-auto"
        />
      </div>
      <div className="text-white text-center text-lg font-bold">
        Manage your Account
      </div>
    </div>
  );
}

export default Sidebar;
