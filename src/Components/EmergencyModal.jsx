import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import DownIcon from '../../public/assets/SVG/down-icon.svg'
import ForwardIcon from '../../public/assets/SVG/forward-arrow-icon.svg'
import Modal from '../Utils/Modal';

function EmergencyModal({ isOpen, onClose }) {
  const [mobileNumber, setMobileNumber] = useState('');
  const [showVerification, setShowVerification] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [countdown, setCountdown] = useState(120); 

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
      <div className="relative overflow-hidden" style={{ height: '400px', overflow: 'hidden' }}>
        {/* login part */}
        <div className={`absolute w-full  transition-all duration-500 ease-in-out ${showVerification ? 'opacity-0' : 'opacity-100'}`}
             style={{ transform: showVerification ? 'translateX(-100%)' : 'translateX(0)' }}>
          <div className="w-full px-6">
          <h2 className="text-4xl text-[#FFA500] mt-7">Verify your</h2>
          <h2 className="text-4xl text-[#FFA500]">mobile number</h2>
          <p className="text-md mb-4 font-bold">
            <span className="border-b border-[#FFA500] pb-2">to call my Em</span>ergency Contacts
          </p>
          <p className="text-[0.85rem] mb-4 text-[#787878]">Your details are secured and will not be shared with the<span className="font-bold"> Emergency Contacts.</span></p>
          </div>
          <div className="flex items-center mb-4 gap-2 px-6">
            <div className="NumShadow rounded-md relative">
              <select className="bg-white text-gray-700 rounded-md py-3 pl-2 pr-8 font-bold outline-none appearance-none h-12">
                <option>+91</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <img src={DownIcon} alt="down-icon" className="w-[9px]" />
              </div>
            </div>
            <div className="flex-grow NumShadow2 rounded-md">
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
           <div className="flex items-center justify-center">
             <button
              className="bg-gradient-to-t from-[#148250] to-[#32CC36] w-[90%] text-white font-bold py-2 px-4 rounded-md mt-6 text-xl NumShadow"
              onClick={handleConfirm}
            >
              Confirm
            </button>
           </div>
          )}
        </div>

        {/* verification part */}
        <div className={`absolute w-full transition-all duration-500 ease-in-out ${showVerification ? 'opacity-100' : 'opacity-0'}`}
             style={{ transform: showVerification ? 'translateX(0)' : 'translateX(100%)' }}>
         <div className="w-full px-6">
         <h2 className="text-4xl text-[#FFA500] mt-7">Enter</h2>
          <h2 className="text-4xl text-[#FFA500]">Verification Code</h2>
          <p className="text-md mb-6"><span className="border-b border-[#FFA500] pb-1">OTP sent to </span><span className="font-bold"><span className='border-b border-[#FFA500] pb-1'>+9</span>1 {mobileNumber}</span></p>
          <button 
            className="text-white bg-[#1A1A1A] rounded-full px-2 py-1 mb-10 flex items-center text-xs"
            onClick={handleChangeNumber}
          >
            CHANGE NUMBER? 
            <img src={ForwardIcon} alt="forward-icon" className="w-4 h-3 ml-2" />
          </button>
         </div>
          <div className="flex justify-between mb-3 mt-4 mx-1 px-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="tel"
                maxLength="1"
                value={digit}
                className="w-10 h-10 xss:w-[54px] xss:h-[54px] text-center rounded-md outline-none OTP"
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
                onFocus={(e) => e.target.style.border = '1.5px solid #FFA500'}
                onBlur={(e) => e.target.style.border = e.target.value ? '1.5px solid #FFA500' : 'none'}
                style={{ border: digit ? '1.5px solid #FFA500' : 'none' }}
              />
            ))}
          </div>
          <div className="flex justify-between items-center mb-4 px-6">
            <span className={`font-bold ${countdown === 0 ? 'text-[#FF483C]' : 'text-[#FFA500]'}`}>
              {String(Math.floor(countdown / 60)).padStart(2, '0')}:{String(countdown % 60).padStart(2, '0')}
            </span>
            <button className="">OTP not received? <span className="text-[#FF483C] font-bold">Resend OTP</span></button>
          </div>
          {isOtpComplete && (
           <div className="w-full flex items-center justify-center">
             <button
              className="bg-gradient-to-t from-[#148250] to-[#32CC36] w-[90%] text-white font-bold py-2 px-4 NumShadow rounded-md mt-2 text-xl"
            >
              Verify
            </button>
           </div>
          )}
        </div>
      </div>
    </Modal>
  );
}

EmergencyModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EmergencyModal;
