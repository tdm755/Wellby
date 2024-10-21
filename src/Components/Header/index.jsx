import React from 'react';
import HamburgerMenu from '../../../assets/icons/hamburger-menu.svg';

function Header({ toggleSidebar }) {
  return (
    <header className="absolute top-3 left-0 w-full z-10">
      <div className="flex items-center">
        <div className="p-5">
          <img 
            src={HamburgerMenu} 
            alt="Menu" 
            className="w-[25px] h-[30px] cursor-pointer" 
            onClick={toggleSidebar}
          />
        </div>
        <div className="flex-grow p-5 h-[50px] flex justify-center items-center bg-[#002D3A] rounded-l-full ml-5">
          <div className="w-[70px] h-[25px] bg-[#0F4254] absolute top-[2.2rem] right-0" style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%)'
          }}></div> 
          <div className="w-[30px] h-[20px] bg-[#ffd502] absolute top-6 right-0" style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%)'
          }}></div>
        </div> 
      </div>
    </header>
  );
}

export default Header;

