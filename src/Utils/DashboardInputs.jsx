import React, { useState, useEffect } from 'react'
import DownIcon from '../../public/assets/SVG/down-icon.svg'
import CalendarIcon from '../../public/assets/SVG/calender-icon.svg'


function DashboardInputs({ label, type, value, placeholder, readOnlyOf, options, onChange }) {


  if (type === 'textarea'){
    return(
      <div className='flex flex-col gap-[2px]'>

          <label className='px- bg-white text-sm text-[#FF9E00] ' htmlFor="">{label}</label>
          <textarea className={`outline-none font-medium text-[16px] text-[#787878] pl-3 w-full rounded-[4px] py-2 ${readOnlyOf ? 'bg-[#F5F5F5]' : ' bg-transparent border border-[#C8C8C8]'}`} placeholder={placeholder} value={value} readOnly={readOnlyOf} />
        
    </div>
    )
  }

  if (type === 'number') {
    return (
      <div className='flex flex-col gap-[2px]'>

        <label className='bg-white text-sm text-[#FF9E00] ' htmlFor="">{label}</label>

        <div className="flex gap-2">
        <div className="rounded-md relative">
              <select className={`outline-none font-medium text-[16px] appearance-none text-[#787878] pl-3 pr-7 rounded-[4px] py-2 ${readOnlyOf ? 'bg-[#F5F5F5]' : ' bg-transparent border border-[#C8C8C8]'}`}>
                <option>+91</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#787878]">
                <img src={DownIcon} alt="down-icon" className="w-[9px]" />
              </div>
            </div>
          <input className={`outline-none font-medium text-[16px] text-[#787878] pl-3 w-full rounded-[4px] py-2 ${readOnlyOf ? 'bg-[#F5F5F5]' : 'bg-transparent border border-[#C8C8C8]'}`} placeholder={placeholder} type={type === 'num' ? 'number' : type} value={value} readOnly={readOnlyOf} />
        </div>

      </div>
    )
  }

  if (type === 'select') {
    return (
      <div className='flex flex-col gap-[2px]'>
        <label className='bg-white text-sm text-[#FF9E00]' htmlFor="">{label}</label>
        <div className="rounded-md relative">
          <select
            className={`outline-none font-medium text-[19px] appearance-none text-[#000] pl-3 pr-7 w-full rounded-[4px] py-2 border border-[#E0E0E0] ${readOnlyOf ? 'bg-[#F5F5F5]' : 'bg-white border border-[#C8C8C8]'}`}
            value={value}
            disabled={readOnlyOf}
            onChange={onChange}
          >
            <option value="" disabled hidden>{placeholder}</option>
            {options && options.map((option, index) => (
              <option key={index} value={option.value || option}>{option.label || option}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#787878]">
            <img src={DownIcon} alt="down-icon" className="w-[9px]" />
          </div>
        </div>
      </div>
    )
  }

  if (type === 'date') {
    const [displayDate, setDisplayDate] = useState('');

    const formatDate = (dateString) => {
      if (!dateString) return '';
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return '';
      const day = date.getDate().toString().padStart(2, '0');
      const month = date.toLocaleString('default', { month: 'long' });
      const year = date.getFullYear();
      return `${day}, ${month} ${year}`;
    };

    useEffect(() => {
      setDisplayDate(formatDate(value));
    }, [value]);

    const handleDateChange = (e) => {
      const newDate = e.target.value;
      setDisplayDate(formatDate(newDate));
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <div className='flex flex-col gap-[2px]'>
        <label className='bg-white text-sm text-[#FF9E00]' htmlFor="">{label}</label>
        <div className="relative">
          <input
            type="text"
            className={`outline-none font-medium text-[16px] text-[#787878] pl-3 pr-10 w-full rounded-[4px] py-2 ${readOnlyOf ? 'bg-[#F5F5F5]' : 'bg-transparent border border-[#C8C8C8]'}`}
            value={displayDate}
            placeholder={placeholder}
            readOnly
          />
          <input
            type="date"
            className="absolute inset-0 opacity-0 cursor-pointer"
            value={value}
            onChange={handleDateChange}
            readOnly={readOnlyOf}
          />
          <img 
            src={CalendarIcon} 
            alt="calendar" 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
          />
        </div>
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-[2px]'>
      <label className='px- bg-white text-sm text-[#FF9E00] ' htmlFor="">{label}</label>
      <input className={`outline-none font-medium text-[16px] text-[#787878] pl-3 w-full rounded-[4px] py-2 ${readOnlyOf ? 'bg-[#F5F5F5]' : ' bg-transparent border border-[#C8C8C8]'}`} placeholder={placeholder} type={type} value={value} readOnly={readOnlyOf} />
      {/* <img className='w-6 h-6 absolute top-3 left-3' src={icon} alt="" /> */}
      {/* {icon2 && <img className='cursor-pointer w-6 h-6 absolute top-3 right-3' src={icon2} alt="" />} */}
    </div>
  )
}

export default DashboardInputs
