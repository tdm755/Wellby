import React from 'react';
import DefaultBackground from '../../assets/images/default-background.png';

function DefaultLayout({ children }) {
  return (
    <div className="min-h-screen bg-black flex justify-center">
      <div 
        className="w-[425px] min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${DefaultBackground})` }}
      >
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;
