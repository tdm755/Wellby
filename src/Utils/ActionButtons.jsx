import PropTypes from 'prop-types';

const ActionButtons = ({ onCancel, onSave, showCancel = true, showSave = true }) => {
  return (
    <div className="flex justify-center space-x-4 mt-6">
      {showCancel && (
        <button
          onClick={onCancel}
          className="w-[33%] py-2 text-white text-[13px] font-medium tracking-[0.11em] bg-gradient-to-t from-[#BA1E0A] to-[#EC503C] rounded-md shadow-md hover:bg-red-600 transition duration-300 ease-in-out"
        >
          CANCEL
        </button>
      )}
      {showSave && (
        <button
          onClick={onSave}
          className="w-[67%] py-2 text-white text-[13px] font-medium tracking-[0.11em] bg-gradient-to-t from-[#148250] to-[#32CC36] rounded-md shadow-md hover:bg-green-600 transition duration-300 ease-in-out"
        >
          SAVE AND UPDATE
        </button>
      )}
    </div>
  );
};

ActionButtons.propTypes = {
  onCancel: PropTypes.func,
  onSave: PropTypes.func,
  showCancel: PropTypes.bool,
  showSave: PropTypes.bool,
};

export default ActionButtons;
