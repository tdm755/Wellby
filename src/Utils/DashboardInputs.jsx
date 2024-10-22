import React from 'react'

function DashboardInputs({ label, type, value, placeholder, readOnlyOf }) {


  if (type === 'number') {
    return (
      <div className='flex flex-col gap-[2px]'>

        <label className='bg-white text-sm text-[#FF9E00] ' htmlFor="">{label}</label>

        <div className="">
          <select name="" id=""></select>
          <input className={`outline-none font-medium text-[19px] text-[#787878] pl-3 w-full rounded-sm py-2 ${readOnlyOf ? 'bg-[#F5F5F5]' : ' bg-transparent'}`} placeholder={placeholder} type={type} value={value} readOnly={readOnlyOf} />
        </div>
        
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-[2px]'>
      <label className='px- bg-white text-sm text-[#FF9E00] ' htmlFor="">{label}</label>
      <input className={`outline-none font-medium text-[19px] text-[#787878] pl-3 w-full rounded-sm py-2 ${readOnlyOf ? 'bg-[#F5F5F5]' : ' bg-transparent'}`} placeholder={placeholder} type={type} value={value} readOnly={readOnlyOf} />
      {/* <img className='w-6 h-6 absolute top-3 left-3' src={icon} alt="" /> */}
      {/* {icon2 && <img className='cursor-pointer w-6 h-6 absolute top-3 right-3' src={icon2} alt="" />} */}
    </div>
  )
}

export default DashboardInputs
