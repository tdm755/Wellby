import React, { useState } from 'react';
import CloseIcon from '../../../public/assets/icons/close-icon.svg';
import SidebarImage from '../../../public/assets/SVG/sidebar.svg';
import Modal from '../Modal';

function Sidebar({ isOpen, onClose }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogin = () => {
    setIsModalOpen(true);
    onClose(); // Close the sidebar when opening the modal
  };

  return (
    <>
      <div 
        className={`absolute top-0 left-0 h-full w-4/5 bg-[#FF3E4D] transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } z-30 flex flex-col`}
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
        <div className="flex-grow relative">
          <img 
            src={SidebarImage} 
            alt="Sidebar" 
            className="absolute top-[10%] left-0 w-full h-auto"
            style={{ top: 'calc(10% + 20px)' }}
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

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-4xl text-[#FFA500] mb-4 mt-14">Welcome</h2>
        <p className="text-md mb-4 font-bold">
          <span className="border-b border-[#FFA500] pb-2">Enter your reg</span>istered mobile number
        </p>
        <p className="text-sm mb-4">Always keep your <span className="font-bold">Personal & Medical details</span> updated for <span className="font-bold">First Responder</span> to take prompt decisions in case of Emergency.</p>
        <div className="flex items-center mb-4 gap-2">
          <div className="shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),_0_2px_4px_-1px_rgba(0,0,0,0.06)]">
            <select className="bg-white text-gray-700 rounded-md py-2 px-2 font-bold">
              <option>+91</option>
            </select>
          </div>
          <div className="flex-grow shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),_0_2px_4px_-1px_rgba(0,0,0,0.06)]">
            <input
              type="tel"
              placeholder="ENTER YOUR MOBILE NUMBER"
              className="w-full bg-white text-gray-700 rounded-md py-2 px-3 text-sm"
            />
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Sidebar;
