import { useState, useEffect } from 'react';
import Logo from '../../../public/logo.svg';
import { useNavigate } from 'react-router-dom';
import HeaderRightSideLogo from '../../../public/assets/images/HeaderRightSideLogo.png';
import LogoutIcon from '../../../public/assets/SVG/logout-icon.svg';

function DashboardHeader() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`MainHeaderWidth fixed w-full py-3 top-0 items-center justify-center rounded-bl-[40px] z-40 transition-all duration-300 ${
        isScrolled ? 'bg-[#002D3A] shadow-md ' : ''
      }`}
    >
      <div className="flex items-center flex-wrap">
        {!isScrolled ? (
          <>
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
                <span className="text-white whitespace-nowrap font-bold text-center w-full text-[12px] xss:text-[0.80rem]">
                  Safety is Everyone&apos;s responsibility
                </span>
              </div>
              <img className='h-8' src={HeaderRightSideLogo} alt="Header Right Logo" />
            </div>
          </>
        ) : (
          <div className="flex items-center justify-between w-full px-4 relative">
            <span className="text-white whitespace-nowrap font-bold text-[12px] xss:text-[0.80rem] absolute left-1/2 transform -translate-x-1/2 pr-6">
              Safety is Everyone&apos;s responsibility
            </span>
            <div className="ml-auto">
              <img
                src={LogoutIcon}
                alt="Logout"
                className="w-7 cursor-pointer"
                onClick={() => { navigate('/'); }}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default DashboardHeader;
