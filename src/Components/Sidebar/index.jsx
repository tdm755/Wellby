import React, { useState } from 'react';
import CloseIcon from '../../../public/assets/icons/close-icon.svg';
import SidebarImage from '../../../public/assets/SVG/sidebar.svg';
import LoginModal from './LoginModal';

function Sidebar({ isOpen, onClose }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLogin = () => {
    setIsLoginModalOpen(true);
    onClose(); // Close the sidebar when opening the modal
  };

  return (
    <>
      <div 
        className={`fixed top-0 z-50 h-full w-[340px] bg-[#FF3E4D] transition-all duration-500 ease-in-out ${
          isOpen ? 'left-0' : ' -left-[350px]'
        } flex flex-col`}
      >
        <div className="p-5 flex justify-end items-center">
          <span className="mr-2 text-white text-xs font-bold cursor-pointer" onClick={onClose}>CLOSE</span>
          <img 
            src={CloseIcon} 
            alt="Close" 
            className="w-5 h-5 cursor-pointer" 
            onClick={onClose}
          />
        </div>
        <div className="flex-grow relative overflow-y-auto">
          <img 
            src={SidebarImage} 
            alt="Sidebar" 
            className="absolute top-[10%] left-0 w-full h-auto"
          />
          {/* Login */}
          <div className="absolute top-[60%] left-0 w-[90%] px-4 mx-4">
            <h2 className="text-white text-sm font-bold mb-2 border-b border-white pb-1">Manage your Account</h2>
            <div className="text-white text-sm mb-4 font-bold">
              Login to your <span className="text-[#FFCB05] font-bold">WellbyQR<br />Emergency Assistance</span> Account<br />to update your details.
            </div>
            <div 
              className="bg-gradient-to-b from-[#FFCB05] to-[#FFA500] text-white text-xl font-bold py-2 px-4 rounded-md mb-4 text-center shadow-xl cursor-pointer"
              onClick={handleLogin}
            >
              Login
            </div>
          </div>
        </div>
      </div>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
}

export default Sidebar;
