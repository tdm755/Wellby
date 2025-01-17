import { useState, useEffect } from 'react';
import HamburgerMenu from '../../../public/assets/icons/hamburger-menu.svg';
import HeaderRightSideLogo from '../../../public/assets/images/HeaderRightSideLogo.png';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Header({ toggleSidebar }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 380);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigate = useNavigate();

  return (
    <header className={`MainHeaderWidth ${isScrolled ? 'fixed' : 'absolute'} w-full py-3 top-0 items-center justify-center z-40 transition-colors duration-300 ${isScrolled ? 'bg-[#FFCE05] shadow-md rounded-bl-[40px]' : ''}`}>
      <div className="flex items-center flex-wrap w-full py-3">
        <div className="flex items-center justify-center w-[16%]">
          <img 
          
            src={HamburgerMenu} 
            alt="Menu" 
            className="w-7 cursor-pointer" 
            onClick={()=>navigate('/sidebar')}
          />
        </div>
        <div className="flex-grow w-[84%] h-12 flex relative justify-center items-end bg-[#002D3A] rounded-l-full shadow-xl shadow-red-500/45 ">
          <div className="border-white h-full flex items-center mb-[1.5px] justify-center w-full">
            <span className="text-white whitespace-nowrap font-semibold text-start w-full pl-[17px] xss:pl-6 text-[9px] ssxss:text-[10px] sxss:text-[12px] xss:text-[15px]">
              Safety is Everyone&apos;s responsibility
            </span>
          </div>
          <img className='h-9 w-16 md:w-20' src={HeaderRightSideLogo} alt="" />
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default Header;
