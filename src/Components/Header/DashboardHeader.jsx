import React, { useState, useEffect } from 'react';
import Logo from '../../../public/logo.svg';
import { useNavigate } from 'react-router-dom';
import HeaderRightSideLogo from '../../../public/assets/images/HeaderRightSideLogo.png';
import LogoutIcon from '../../../public/assets/SVG/logout-icon.svg';

function DashboardHeader() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full max-w-[400px] py-3 top-0 items-center justify-center z-40 transition-colors duration-300 ${isScrolled ? 'bg-[#FFCE05] shadow-md rounded-bl-[50px]' : ''}`}
    >
      <div className="flex items-center flex-wrap">
        <div className="flex items-center justify-center w-[15%]">
          <img
            src={Logo}
            alt="Logo"
            className="w-8 cursor-pointer"
            onClick={() => { navigate('/'); }}
          />
        </div>
        <div className="flex-grow w-[85%] h-11 flex justify-center items-end bg-[#002D3A] rounded-l-full shadow-xl shadow-red-500/45">
          <div className="border-white h-full flex items-center justify-center w-full">
            <span className="text-white whitespace-nowrap font-bold text-center w-full text-[0.80rem]">
              Safety is Everyone&apos;s responsibility
            </span>
          </div>
          <img className='h-8' src={HeaderRightSideLogo} alt="Header Right Logo" />
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
