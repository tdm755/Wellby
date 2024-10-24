import PropTypes from 'prop-types'

function Input({label, type, value, icon, icon2}) {
  return (
    <div className='relative'>
      <label className='absolute left-10 -top-3 px-4 bg-white text-sm text-[#FF9E00] ' htmlFor="">{label}</label>
      <input className='outline-none font-semibold text-[19px] text-[#3C3C3C] pl-14 border-[1.5px] w-full rounded-lg bg-transparent h-[51px] border-[#C8C8C8]' type={type} value={value} />
      <img className='w-6 h-6 absolute top-3 left-3' src={icon} alt="" />
      {icon2 && <img className='cursor-pointer w-6 h-6 absolute top-3 right-3' src={icon2} alt="" />}
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  icon2: PropTypes.string
}

export default Input
