import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '../../../public/assets/icons/close-icon.svg';
import SidebarImage from '../../../public/assets/SVG/sidebar.svg';
import SHeroPage from '../../../public/assets/images/SHeroPage.png';
import HeroSection from '../HeroSection';
import DashboardHeader from '../Header/DashboardHeader';
import Header from '../Header';
import HomePage from '../Pages/HomePage';

function Sidebar() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login'); // Navigate to the login page
  };

  useEffect(() => {
    const handleClose = (event) => {
      if (event.key === 'Escape') {
        // Logic to close the sidebar can be added here if needed
      }
    };

    window.addEventListener('keydown', handleClose);
    return () => {
      window.removeEventListener('keydown', handleClose);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black flex justify-center select-none">
      <div className="relative MainContainer">
        <div className="absolute overflow-hidden top-0 right-0 bottom-0 left-0">
          <div onClick={()=>{ navigate('/')}} className="absolute top-0 right-0 bottom-0 left-0 z-50 bg-[#0000009d]"></div>
          {/* <Header/>
          <HeroSection /> */}
          <HomePage />
        </div>
      <div 
        className={`SideBar h-full absolute top-0 z-50  bg-[#FF3E4D] transition-all duration-500 ease-in-out overflow-y-auto  flex flex-col `}
      >
        <div  onClick={() => {navigate('/')}} className="p-5 flex justify-end items-center cursor-pointer">
          <span className="mr-2 text-white text-xs font-bold cursor-pointer" onClick={() => { /* Logic to close sidebar */ }}>CLOSE</span>
          <img 
            src={CloseIcon}  
            alt="Close" 
            className="w-5 h-5 cursor-pointer" 
           
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

     </div>
    </div>
    
      
  );
}

export default Sidebar;
