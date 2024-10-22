import React from 'react';
import LogoIcon from '../../../public/assets/icons/logo.svg'
import HamburgerMenu from '../../../public/assets/icons/hamburger-menu.svg';

function Header({ toggleSidebar }) {
  return (
    <header className="absolute top-3 left-0 w-full z-50 ">
      <div className="flex items-center">
        <div className="p-5">
          <img 
            src={HamburgerMenu} 
            alt="Menu" 
            className="w-[25px] h-[30px] cursor-pointer" 
            onClick={toggleSidebar}
          />
        </div>
        <div className="flex-grow p-4 h-[50px] flex justify-center items-center bg-[#002D3A] rounded-l-full ml-5">
        <span className="text-white font-bold text-[0.83rem] text-left w-full">Safety is Everyone's responsibility</span>
          <div className="w-[70px] h-[25px] bg-[#0F4254] absolute top-[2.2rem] right-0" style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%)'
          }}></div>          
          <div className="w-[20px] h-[20px] bg-gradient-to-t from-[#FFB404] to-[#FFCE05] absolute top-6 right-[56px]" style={{
            clipPath: 'polygon(0 0, 70% 0, 100% 100%, 30% 100%)'
          }}></div>
           <div className="w-[20px] h-[20px] bg-gradient-to-t from-[#FFB404] to-[#FFCE05] absolute top-6 right-[33px]" style={{
            clipPath: 'polygon(0 0, 70% 0, 100% 100%, 30% 100%)'
          }}></div>
          <div className="w-[30px] h-[20px] bg-gradient-to-t from-[#FFB404] to-[#FFCE05] absolute top-6 right-0" style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%)'
          }}></div>
          </div>
      </div>
    </header>
  );
}

export default Header;

