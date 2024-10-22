import React, { useState, useEffect } from 'react';
import DownIcon from '../../../public/assets/SVG/down-icon.svg'
import ForwardIcon from '../../../public/assets/SVG/forward-arrow-icon.svg'
import Modal from '../Modal';

function LoginModal({ isOpen, onClose }) {
  const [mobileNumber, setMobileNumber] = useState('');
  const [showVerification, setShowVerification] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [countdown, setCountdown] = useState(120); // 2 minutes in seconds

  useEffect(() => {
    let timer;
    if (showVerification && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [showVerification, countdown]);

  const handleConfirm = () => {
    setShowVerification(true);
    setCountdown(120);
  };

  const handleChangeNumber = () => {
    setShowVerification(false);
    setMobileNumber('');
    setOtp(['', '', '', '', '', '']);
    setCountdown(120);
  };

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const isOtpComplete = otp.every(digit => digit !== '');

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative overflow-hidden" style={{ height: '400px' }}>
        {/* login part */}
        <div className={`absolute w-full transition-all duration-500 ease-in-out ${showVerification ? 'opacity-0' : 'opacity-100'}`}
             style={{ transform: showVerification ? 'translateX(-100%)' : 'translateX(0)' }}>
          <h2 className="text-4xl text-[#FFA500] mb-4 mt-14">Welcome</h2>
          <p className="text-md mb-4 font-bold">
            <span className="border-b border-[#FFA500] pb-2">Enter your reg</span>istered mobile number
          </p>
          <p className="text-sm mb-4">Always keep your <span className="font-bold">Personal & Medical details</span> updated for <span className="font-bold">First Responder</span> to take prompt decisions in case of Emergency.</p>
          <div className="flex items-center mb-4 gap-2 mx-1">
            <div className="shadow-[0_-2px_4px_-1px_rgba(0,0,0,0.1),_0_4px_6px_-1px_rgba(0,0,0,0.1),_0_2px_4px_-1px_rgba(0,0,0,0.06)] rounded-md relative">
              <select className="bg-white text-gray-700 rounded-md py-3 pl-2 pr-8 font-bold outline-none appearance-none h-12">
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
                className="w-full bg-white text-gray-700 rounded-md py-3 px-3 text-sm outline-none h-12"
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
          <p className="text-md mb-6"><span className="border-b border-[#FFA500] pb-3">OTP sent to +9</span>1 {mobileNumber}</p>
          <button 
            className="text-white bg-[#1A1A1A] rounded-full px-2 py-1 mb-16 flex items-center text-xs"
            onClick={handleChangeNumber}
          >
            CHANGE NUMBER? 
            <img src={ForwardIcon} alt="forward-icon" className="w-4 h-3 ml-2" />
          </button>
          <div className="flex justify-between mb-3 mt-4 mx-1">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="tel"
                maxLength="1"
                value={digit}
                className="w-10 h-10 text-center rounded-md outline-none shadow-[0_0_8px_rgba(0,0,0,0.2)]"
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  handleOtpChange(index, value);
                  if (value && e.target.nextSibling) {
                    e.target.nextSibling.focus();
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Backspace' && !e.target.value && e.target.previousSibling) {
                    e.preventDefault();
                    e.target.previousSibling.focus();
                  }
                }}
                onFocus={(e) => e.target.style.border = '1px solid #1DC63C'}
                onBlur={(e) => e.target.style.border = e.target.value ? '1px solid #1DC63C' : 'none'}
                style={{ border: digit ? '1px solid #1DC63C' : 'none' }}
              />
            ))}
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className={`font-bold ${countdown === 0 ? 'text-[#FF483C]' : 'text-[#FFA500]'}`}>
              {String(Math.floor(countdown / 60)).padStart(2, '0')}:{String(countdown % 60).padStart(2, '0')}
            </span>
            <button className="">OTP not received? <span className="text-[#FF483C] font-bold">Resend OTP</span></button>
          </div>
          {isOtpComplete && (
            <button
              className="bg-gradient-to-t from-[#148250] to-[#32CC36] text-white font-bold py-2 px-4 rounded-md mt-2 w-full text-xl"
            >
              Verify
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default LoginModal;
