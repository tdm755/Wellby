import React from 'react'

function DashboardInputs({label, type, value, icon, icon2, placeholder}) {
  return (
    <div className='flex flex-col'>
      <label className=' left-10 -top-3 px-4 bg-white text-sm text-[#FF9E00] ' htmlFor="">{label}</label>
      <input className='outline-none font-semibold text-[19px] text-[#3C3C3C] pl-14 border-[1.5px] w-full rounded-lg bg-transparent h-[51px] border-[#C8C8C8]' placeholder={placeholder} type={type} value={value} />
      <img className='w-6 h-6 absolute top-3 left-3' src={icon} alt="" />
      {icon2 && <img className='cursor-pointer w-6 h-6 absolute top-3 right-3' src={icon2} alt="" />}
    </div>
  )
}

export default DashboardInputs
