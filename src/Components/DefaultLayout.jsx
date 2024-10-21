import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import DefaultBackground from '../../assets/images/default-background.png';
import HamburgerMenu from '../../assets/icons/hamburger-menu.svg';
import Sidebar from '../Components/Sidebar';

function DefaultLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handlers = useSwipeable({
    onSwipedRight: () => setIsSidebarOpen(true),
    onSwipedLeft: () => setIsSidebarOpen(false),
    trackMouse: true
  });

  return (
    <div className="min-h-screen bg-black flex justify-center">
      <div 
        {...handlers}
        className="w-[425px] min-h-screen bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url(${DefaultBackground})` }}
      >
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
            {/* Header Patch */}
            <div className="flex-grow p-5 h-[50px] flex justify-center items-center bg-[#002D3A] rounded-l-full ml-5">
              <div className="w-[70px] h-[25px] bg-[#0F4254] absolute top-[2.2rem] right-0" style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%)'
              }}>               
                
              </div> 
              <div className="w-[30px] h-[20px] bg-[#ffd502] absolute top-6 right-0" style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%)'
              }}></div>
                                         
            </div> 
          </div>
        </header>

        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        <div className={`relative z-10 ${isSidebarOpen ? 'opacity-50' : ''}`}>
          {children}
        </div>

        {isSidebarOpen && (
          <div className="absolute inset-0 bg-black opacity-50 z-20" onClick={() => setIsSidebarOpen(false)} />
        )}
      </div>
    </div>
  );
}

export default DefaultLayout;
