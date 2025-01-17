import PropTypes from 'prop-types';
import Logo from "../../public/logo.svg";
import HeaderRightSideLogo from "../../public/assets/images/HeaderRightSideLogo.png";
import HeroImage from "../../public/assets/SVG/dashboard-hero.svg";
import CloseIcon from "../../public/assets/icons/close-icon.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function AuthWrapper({ children }) {
  const navigate = useNavigate();
  const [isPhone, setIsPhone] = useState(false);
  const [showHero, setShowHero] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth <= 768); // Adjust the breakpoint as needed
      setShowHero(window.innerHeight > 620);
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-black flex justify-center">
      <div className="relative MainContainer h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFCB05] to-[#FFA500]">
          {/* Header */}
          <div className="flex items-center mt-4">
            <div className="flex items-center justify-center w-[15%] ">
              <img src={Logo} alt="Logo" className="w-8 cursor-pointer" />
            </div>
            <div className="flex-grow w-[85%] h-11 flex justify-center items-end bg-[#002D3A] rounded-l-full shadow-xl shadow-red-500/45">
              <div className="border-white h-full flex items-center justify-center w-full">
                <span className="text-white whitespace-nowrap font-bold text-center w-full text-[0.80rem]">
                  Safety is Everyone&apos;s responsibility
                </span>
              </div>
              <img
                className="h-8"
                src={HeaderRightSideLogo}
                alt="Header Right Logo"
              />
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        {showHero && (
        <div className="absolute left-0 right-0 bottom-[430px] flex justify-center mx-5 ">
          <img src={HeroImage} alt="Hero" className="w-full h-auto max-w-md" />
        </div>
        )}
        {/* White part overlaying the gradient and hero image */}
        <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 h-[480px]">
          {/* Close button */}
          <div onClick={handleClose} className="absolute z-50 top-4 right-4 flex items-center">
            <button 
              className="flex items-center space-x-2 px-2 py-1 rounded"
            >
              <span className="text-black text-xs font-bold">CLOSE</span>
              <img src={CloseIcon} alt="Close" className="w-4 h-4 cursor-pointer invert"/>
            </button>
          </div>
          
          {/* Content */}
          {children}
        </div>
      </div>
    </div>
  );
}

AuthWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthWrapper;
