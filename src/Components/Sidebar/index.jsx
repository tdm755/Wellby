import React from 'react';
import CloseIcon from '../../../assets/icons/close-icon.svg';
import SidebarImage from '../../../assets/SVG/sidebar.svg';

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
          className="absolute top-[10%] left-0 w-full h-auto"
          style={{ top: 'calc(10% + 20px)' }}
        />
        {/* Login */}
        <div className="absolute top-[60%] left-0 w-[90%] px-4 mx-4">
          <h2 className="text-white text-md font-bold mb-2 border-b border-white pb-1">Manage your Account</h2>
          <div className="text-white text-sm mb-4 font-bold">
            Login to your <span className="text-[#FFCB05] font-bold">WellbyQR<br />Emergency Assistance</span> Account<br />to update your details.
          </div>
          <div className="bg-gradient-to-b from-[#FFCB05] to-[#FFA500] text-white text-xl font-bold py-2 px-4 rounded-md mb-4 text-center shadow-lg">
            Login
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
