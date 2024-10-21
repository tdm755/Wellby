import React, { useState } from 'react';
import Modal from '../Modal';

function LoginModal({ isOpen, onClose }) {
  const [mobileNumber, setMobileNumber] = useState('');

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-4xl text-[#FFA500] mb-4 mt-14">Welcome</h2>
      <p className="text-md mb-4 font-bold">
        <span className="border-b border-[#FFA500] pb-2">Enter your reg</span>istered mobile number
      </p>
      <p className="text-sm mb-4">Always keep your <span className="font-bold">Personal & Medical details</span> updated for <span className="font-bold">First Responder</span> to take prompt decisions in case of Emergency.</p>
      <div className="flex items-center mb-4 gap-2">
        <div className="shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),_0_2px_4px_-1px_rgba(0,0,0,0.06)]">
          <select className="bg-white text-gray-700 rounded-md py-2 px-2 font-bold outline-none">
            <option>+91</option>
          </select>
        </div>
        <div className="flex-grow shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),_0_2px_4px_-1px_rgba(0,0,0,0.06)]">
          <input
            type="tel"
            placeholder="ENTER YOUR MOBILE NUMBER"
            className="w-full bg-white text-gray-700 rounded-md py-2 px-3 text-sm outline-none"
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
        <button className="bg-gradient-to-t from-[#148250] to-[#32CC36] text-white font-bold py-2 px-4 rounded-md mt-4 w-full">
          Confirm
        </button>
      )}
    </Modal>
  );
}

export default LoginModal;