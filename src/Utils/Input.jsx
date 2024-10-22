import React from 'react'

function Input({label, icon, icon2}) {
  return (
    <div className='relative'>
      <label className='absolute left-10 -top-3 px-4 bg-white text-md text-[#FF9E00] ' htmlFor="">{label}</label>
      <input  className='outline-none pl-14 border-[1.5px] w-full rounded-lg bg-transparent h-[51px] border-[#C8C8C8]' type="text" />
      <img className='w-6 h-6 absolute top-3 left-3' src={icon} alt="" />
      {icon2 && <img className='w-6 h-6 absolute top-3 right-3' src={icon2} alt="" />}
    </div>
  )
}

export default Input
