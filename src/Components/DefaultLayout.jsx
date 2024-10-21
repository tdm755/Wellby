import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import DefaultBackground from '../../public/assets/images/default-background.png';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import HomePage from './Pages/HomePage.jsx';

function DefaultLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => setIsSidebarOpen(false),
    trackMouse: true
  });

  return (
    <div className="min-h-screen bg-black flex justify-center select-none">
      <div 
        {...handlers}
        className="w-[400px] min-h-screen bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url(${DefaultBackground})` }}
      >
        <Header toggleSidebar={toggleSidebar} />

        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        {/* <div className={`relative z-10 ${isSidebarOpen ? 'opacity-50' : ''}`}>
          {children}          
        </div> */}

        <HomePage />

        

        {isSidebarOpen && (
          <div className="absolute inset-0 bg-black opacity-50 z-20" onClick={() => setIsSidebarOpen(false)} />
        )}
      </div>
    </div>
  );
}

export default DefaultLayout;