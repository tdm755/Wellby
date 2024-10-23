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
        className={`fixed top-0 z-50 bottom-0 w-[300px] bg-[#FF3E4D] transition-all duration-500 ease-in-out overflow-y-auto ${
          isOpen ? 'left-[0px]' : ' -left-[350px]'
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
        <div className="flex flex-col items-center justify-evenly gap-20 mt-14 ">
          <img 
            src={SidebarImage} 
            alt="Sidebar" 
            className="w-full"
          />
          {/* Login */}
          <div className="w-[90%] px-4 mx-4">
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
