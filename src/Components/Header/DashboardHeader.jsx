import React, { useState, useEffect } from 'react';
import Logo from '../../../public/logo.svg';

function DashboardHeader() {
  return (
    <header className='absolute w-full max-w-[400px] py-3 top-0 items-center justify-center z-40 transition-colors duration-300'>
      <div className="flex items-center flex-wrap">
        <div className="p-5">
          <img 
            src={Logo} 
            alt="Logo" 
            className="w-[35px] md:w-[45px]" 
          />
        </div>
        <div className="flex-grow p-4 h-[50px] flex justify-center items-center bg-[#002D3A] rounded-l-full shadow-xl shadow-red-500/45 ">
          <span className="text-white font-bold text-left w-full text-[0.96rem]">Safety is Everyone&apos;s responsibility</span>
          <div className="w-[70px] h-[25px] bg-[#0F4254] absolute top-11 right-0" style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%)'
          }}></div>          
          <div className="w-[20px] h-[20px] bg-gradient-to-t from-[#FFB404] to-[#FFCE05] absolute top-9 right-[56px]" style={{
            clipPath: 'polygon(0 0, 70% 0, 100% 100%, 30% 100%)'
          }}></div>
          <div className="w-[20px] h-[20px] bg-gradient-to-t from-[#FFB404] to-[#FFCE05] absolute top-9 right-[33px]" style={{
            clipPath: 'polygon(0 0, 70% 0, 100% 100%, 30% 100%)'
          }}></div>
          <div className="w-[30px] h-[20px] bg-gradient-to-t from-[#FFB404] to-[#FFCE05] absolute top-9 right-0" style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%)'
          }}></div>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;