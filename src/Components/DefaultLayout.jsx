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
        <header className="absolute top-0 left-0 w-full p-4 z-10">
          {!isSidebarOpen && (
            <img 
              src={HamburgerMenu} 
              alt="Menu" 
              className="w-6 h-6 cursor-pointer" 
              onClick={toggleSidebar}
            />
          )}
        </header>

        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;
