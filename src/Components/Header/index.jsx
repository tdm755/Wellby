import React, { useState, useEffect } from 'react';
import HamburgerMenu from '../../../public/assets/icons/hamburger-menu.svg';
import HeaderRightSideLogo from '../../../public/assets/images/HeaderRightSideLogo.png';

function Header({ toggleSidebar }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full max-w-[400px] py-3 top-0 items-center justify-center z-40 transition-colors duration-300 ${isScrolled ? 'bg-[#FFCE05] shadow-md rounded-bl-[50px]' : ''}`}>
      <div className="flex items-center flex-wrap w-full py-3">
        <div className="flex items-center justify-center w-[16%]">
          <img 
            src={HamburgerMenu} 
            alt="Menu" 
            className="w-7 cursor-pointer" 
            onClick={toggleSidebar}
          />
        </div>
        <div className="flex-grow w-[84%] h-11 flex  justify-center items-end bg-[#002D3A] rounded-l-full shadow-xl shadow-red-500/45 ">
          <div className=" border-white h-full flex items-center justify-center w-full">
            <span className="text-white whitespace-nowrap font-bold text-center w-full text-[0.80rem]">
              Safety is Everyone&apos;s responsibility
            </span>
          </div>
          <img className='h-8' src={HeaderRightSideLogo} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;

          {/* <div className="w-[70px] h-[25px] bg-[#0F4254] absolute top-[2.9rem] right-0" style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%)'
          }}></div>          
          <div className="w-[20px] h-[20px] bg-gradient-to-t from-[#FFB404] to-[#FFCE05] absolute top-9 right-[56px]" style={{
            clipPath: 'polygon(0 0, 70% 0, 100% 100%, 30% 100%)'
          }}></div>
          <div className="w-[20px] h-[20px] bg-gradient-to-t from-[#FFB404] to-[#FFCE05] absolute top-9 right-[33px]" style={{
            clipPath: 'polygon(0 0, 70% 0, 100% 100%, 30% 100%)'
          }}></div>
          <div className="w-[30px] h-[20px] bg-gradient-to-t from-[#FFB404] to-[#FFCE05] absolute top-9 right-0" style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%)'
          }}></div> */}