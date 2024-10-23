import React from 'react'
import DownIcon from '../../public/assets/SVG/down-icon.svg'


function DashboardInputs({ label, type, value, placeholder, readOnlyOf }) {


  if (type === 'textarea'){
    return(
      <div className='flex flex-col gap-[2px]'>

          <label className='px- bg-white text-sm text-[#FF9E00] ' htmlFor="">{label}</label>
          <textarea className={`outline-none font-medium text-[17px] text-[#787878] pl-3 w-full rounded-sm py-2 ${readOnlyOf ? 'bg-[#F5F5F5]' : ' bg-transparent'}`} placeholder={placeholder} value={value} readOnly={readOnlyOf} />
        
    </div>
    )
  }

  if (type === 'number') {
    return (
      <div className='flex flex-col gap-[2px]'>

        <label className='bg-white text-sm text-[#FF9E00] ' htmlFor="">{label}</label>

        <div className="flex gap-2">
        <div className="rounded-md relative">
              <select className={`outline-none font-medium text-[19px] appearance-none text-[#787878] pl-3 pr-7 rounded-sm py-2 ${readOnlyOf ? 'bg-[#F5F5F5]' : ' bg-transparent'}`}>
                <option>+91</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#787878]">
                <img src={DownIcon} alt="down-icon" className="w-[9px]" />
              </div>
            </div>
          <input className={`outline-none font-medium text-[17px] text-[#787878] pl-3 w-full rounded-sm py-2 ${readOnlyOf ? 'bg-[#F5F5F5]' : ' bg-transparent'}`} placeholder={placeholder} type={type === 'num' ? 'number' : type} value={value} readOnly={readOnlyOf} />
        </div>

      </div>
    )
  }

  return (
    <div className='flex flex-col gap-[2px]'>
      <label className='px- bg-white text-sm text-[#FF9E00] ' htmlFor="">{label}</label>
      <input className={`outline-none font-medium text-[17px] text-[#787878] pl-3 w-full rounded-sm py-2 ${readOnlyOf ? 'bg-[#F5F5F5]' : ' bg-transparent'}`} placeholder={placeholder} type={type} value={value} readOnly={readOnlyOf} />
      {/* <img className='w-6 h-6 absolute top-3 left-3' src={icon} alt="" /> */}
      {/* {icon2 && <img className='cursor-pointer w-6 h-6 absolute top-3 right-3' src={icon2} alt="" />} */}
    </div>
  )
}

export default DashboardInputs
