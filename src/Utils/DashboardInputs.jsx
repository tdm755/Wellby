import React, { useState, useEffect, useRef } from 'react'
import DownIcon from '../../public/assets/SVG/down-icon.svg'
import CalendarIcon from '../../public/assets/SVG/calender-icon.svg'

function DashboardInputs({ label, type, value, placeholder, readOnlyOf, options, onChange }) {
  const readOnlyStyle = readOnlyOf ? 'bg-[#F5F5F5] text-[#787878]' : 'bg-transparent border border-[#C8C8C8]';

  if (type === 'textarea'){
    return(
      <div className='flex flex-col gap-[2px]'>
        <label className='px- bg-white text-sm text-[#FF9E00] ' htmlFor="">{label}</label>
        <textarea className={`outline-none font-medium text-[16px] placeholder:text-[13px] placeholder:tracking-[0.20em] placeholder:font-normal pl-3 w-full rounded-[4px] py-2 ${readOnlyStyle}`} placeholder={placeholder} value={value} readOnly={readOnlyOf} />
      </div>
    )
  }

  if (type === 'number') {
    return (
      <div className='flex flex-col gap-[2px]'>
        <label className='bg-white text-sm text-[#FF9E00] ' htmlFor="">{label}</label>
        <div className="flex gap-2">
          <div className="rounded-md relative">
            <select className={`outline-none font-medium text-[16px] appearance-none placeholder:text-[13px] placeholder:tracking-[0.20em] placeholder:font-normal pl-3 pr-7 rounded-[4px] py-2 ${readOnlyStyle}`}>
              <option>+91</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#3C3C3C] placeholder:text-[13px] placeholder:tracking-[0.20em] placeholder:font-normal">
              <img src={DownIcon} alt="down-icon" className="w-[9px]" />
            </div>
          </div>
          <input className={`outline-none font-medium text-[16px] placeholder:text-[13px] placeholder:tracking-[0.20em] placeholder:font-normal pl-3 w-full rounded-[4px] py-2 ${readOnlyStyle}`} placeholder={placeholder} type={type === 'num' ? 'number' : type} value={value} readOnly={readOnlyOf} />
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
            className={`outline-none font-medium text-[19px] appearance-none pl-3 pr-7 w-full rounded-[4px] py-2 ${readOnlyStyle}`}
            value={value}
            disabled={readOnlyOf}
            onChange={onChange}
          >
            <option value="" disabled hidden>{placeholder}</option>
            {options && options.map((option, index) => (
              <option key={index} value={option.value || option}>{option.label || option}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#3C3C3C] placeholder:text-[13px] placeholder:tracking-[0.20em] placeholder:font-normal">
            <img src={DownIcon} alt="down-icon" className="w-[9px]" />
          </div>
        </div>
      </div>
    )
  }

  if (type === 'date' || type === 'date2') {
    const [displayDate, setDisplayDate] = useState('');
    const dateInputRef = useRef(null);

    const formatDate = (dateString) => {
      if (!dateString) return '';
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return '';
      
      if (type === 'date2') {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
      } else {
        const day = date.getDate().toString().padStart(2, '0');
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        return `${day}, ${month} ${year}`;
      }
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

    const handleCalendarClick = () => {
      if (!readOnlyOf && dateInputRef.current) {
        dateInputRef.current.showPicker();
      }
    };

    return (
      <div className='flex flex-col gap-[2px]'>
        <label className='bg-white text-sm text-[#FF9E00]' htmlFor="">{label}</label>
        <div className="relative">
          <input
            type="text"
            className={`outline-none font-medium text-[16px] placeholder:text-[13px] placeholder:tracking-[0.20em] placeholder:font-normal pl-3 pr-10 w-full rounded-[4px] py-2 ${readOnlyStyle}`}
            value={displayDate}
            placeholder={placeholder}
            readOnly
          />
          <input
            ref={dateInputRef}
            type="date"
            className="absolute inset-0 opacity-0 cursor-pointer"
            value={value}
            onChange={handleDateChange}
            readOnly={readOnlyOf}
          />
          <img 
            src={CalendarIcon} 
            alt="calendar" 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
            onClick={handleCalendarClick}
          />
        </div>
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-[2px]'>
      <label className='px- bg-white text-sm text-[#FF9E00] ' htmlFor="">{label}</label>
      <input className={`outline-none font-medium text-[16px] placeholder:text-[13px] placeholder:tracking-[0.20em] placeholder:font-normal pl-3 w-full rounded-[4px] py-2 ${readOnlyStyle}`} placeholder={placeholder} type={type} value={value} readOnly={readOnlyOf} />
    </div>
  )
}

export default DashboardInputs
