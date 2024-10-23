import React, { useState, useEffect } from 'react';
import Logo from '../../../public/logo.svg';
import { useNavigate } from 'react-router-dom';
import HeaderRightSideLogo from '../../../public/assets/images/HeaderRightSideLogo.png';
import LogoutIcon from '../../../public/assets/SVG/logout-icon.svg';


function DashboardHeader() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Original header */}
      <header className={`absolute w-full max-w-[400px] py-3 top-0 items-center justify-center z-40 transition-all duration-300 ease-in-out ${
        isScrolled ? 'opacity-0 transform -translate-y-full' : 'opacity-100 transform translate-y-0'
      }`}>
        <div className="flex items-center flex-wrap">
          <div className="flex items-center justify-center w-[15%]">
            <img             
              src={Logo} 
              alt="Logo" 
              className="w-8 cursor-pointer"
              onClick={()=>{navigate('/')}} 
            />
          </div>
          <div className="flex-grow w-[85%] h-11 flex  justify-center items-end bg-[#002D3A] rounded-l-full shadow-xl shadow-red-500/45 ">
            <div className=" border-white h-full flex items-center justify-center w-full">
              <span className="text-white whitespace-nowrap font-bold text-center w-full text-[0.80rem]">
                Safety is Everyone&apos;s responsibility
              </span>
            </div>
            <img className='h-8' src={HeaderRightSideLogo} alt="" />
          </div>
        </div>
      </header>

      {/* New header that appears on scroll */}
      <header className={`fixed w-full py-3 top-0 flex items-center justify-between rounded-bl-[50px] z-50 bg-[#002D3A] transition-all duration-300 ease-in-out ${
        isScrolled ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-full pointer-events-none'
      }`}>
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="w-8"> {/* Placeholder to balance the layout */}
          </div>
          <div className="flex-grow ">
            <span className="text-white font-bold text-[1rem]">
              Safety is Everyone&apos;s Responsibility
            </span>
          </div>
          <button 
            onClick={() => {/* Add logout functionality */}}
            className="w-8"
          >
            <img src={LogoutIcon} alt="Logout" className="w-full" />
          </button>
        </div>
      </header>
    </>
  );
}

export default DashboardHeader;
