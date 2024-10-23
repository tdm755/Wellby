import React from 'react';

const ActionButtons = ({ onCancel, onSave, showCancel = true, showSave = true }) => {
  return (
    <div className="flex justify-center space-x-4 mt-6">
      {showCancel && (
        <button
          onClick={onCancel}
          className="px-5 py-2 text-white text-[14px] font-bold bg-gradient-to-t from-[#BA1E0A] to-[#EC503C] rounded-md shadow-md hover:bg-red-600 transition duration-300 ease-in-out"
        >
          CANCEL
        </button>
      )}
      {showSave && (
        <button
          onClick={onSave}
          className="px-5 py-2 text-white text-[14px] font-bold bg-gradient-to-t from-[#148250] to-[#32CC36] rounded-md shadow-md hover:bg-green-600 transition duration-300 ease-in-out"
        >
          SAVE AND UPDATE
        </button>
      )}
    </div>
  );
};

export default ActionButtons;