import React, { useState } from 'react';
import DownIcon from '../../../public/assets/SVG/down-icon.svg'
import Modal from '../Modal';

function LoginModal({ isOpen, onClose }) {
  const [mobileNumber, setMobileNumber] = useState('');
  const [showVerification, setShowVerification] = useState(false);

  const handleConfirm = () => {
    setShowVerification(true);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative overflow-hidden" style={{ height: '400px' }}> {/* Adjust height as needed */}
        {/* login part */}
        <div className={`absolute w-full transition-all duration-500 ease-in-out ${showVerification ? 'opacity-0' : 'opacity-100'}`}
             style={{ transform: showVerification ? 'translateX(-100%)' : 'translateX(0)' }}>
          <h2 className="text-4xl text-[#FFA500] mb-4 mt-14">Welcome</h2>
          <p className="text-md mb-4 font-bold">
            <span className="border-b border-[#FFA500] pb-2">Enter your reg</span>istered mobile number
          </p>
          <p className="text-sm mb-4">Always keep your <span className="font-bold">Personal & Medical details</span> updated for <span className="font-bold">First Responder</span> to take prompt decisions in case of Emergency.</p>
          <div className="flex items-center mb-4 gap-2">
            <div className="shadow-[0_-2px_4px_-1px_rgba(0,0,0,0.1),_0_4px_6px_-1px_rgba(0,0,0,0.1),_0_2px_4px_-1px_rgba(0,0,0,0.06)] rounded-md relative">
              <select className="bg-white text-gray-700 rounded-md py-3 pl-2 pr-8 font-bold outline-none appearance-none">
                <option>+91</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <img src={DownIcon} alt="down-icon" className="w-[9px]" />
              </div>
            </div>
            <div className="flex-grow shadow-[0_-2px_4px_-1px_rgba(0,0,0,0.1),_0_4px_6px_-1px_rgba(0,0,0,0.1),_0_2px_4px_-1px_rgba(0,0,0,0.06)] rounded-md">
              <input
                type="tel"
                placeholder="ENTER YOUR MOBILE NUMBER"
                className="w-full bg-white text-gray-700 rounded-md py-3 px-3 text-sm outline-none"
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  setMobileNumber(value);
                }}
                value={mobileNumber}
                maxLength={10}
              />
            </div>
          </div>
          {mobileNumber.length === 10 && (
            <button
              className="bg-gradient-to-t from-[#148250] to-[#32CC36] text-white font-bold py-2 px-4 rounded-md mt-6 w-full text-xl"
              onClick={handleConfirm}
            >
              Confirm
            </button>
          )}
        </div>

        {/* verification part */}
        <div className={`absolute w-full transition-all duration-500 ease-in-out ${showVerification ? 'opacity-100' : 'opacity-0'}`}
             style={{ transform: showVerification ? 'translateX(0)' : 'translateX(100%)' }}>
          <h2 className="text-4xl text-[#FFA500] mb-4 mt-14">Verify Number</h2>
          <p className="text-md mb-4">OTP sent to +91 {mobileNumber}</p>
          <button className="text-[#FFA500] underline mb-4">CHANGE NUMBER?</button>
          <div className="flex gap-2 mb-4 justify-center">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="w-11 h-11 text-center border rounded-md focus:border-[#1DC63C] outline-none shadow-[0_-2px_4px_-1px_rgba(0,0,0,0.1),_0_4px_6px_-1px_rgba(0,0,0,0.1),_0_2px_4px_-1px_rgba(0,0,0,0.06)]"
                onClick={(e) => e.target.style.borderColor = '#1DC63C'}
                onBlur={(e) => e.target.style.borderColor = ''}
              />
            ))}
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">02:00</span>
            <button className="text-[#FFA500] underline">OTP not received? Resend OTP</button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default LoginModal;
