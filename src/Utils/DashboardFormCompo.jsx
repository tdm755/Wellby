import React from 'react'
import Input from './Input'
import CompanyIcon from '../../public/assets/images/companyIcon.svg'
import EditIcon from '../../public/assets/images/EditIcon.svg'
import { useNavigate } from 'react-router-dom'



function DashboardFormCompo({title, inputs, path}) {


  const navigate = useNavigate();

  return (
    <div className='w-full border rounded-lg bg-white shadow-xl'>
      <div className="bg-gradient-to-t from-[#FFB404] to-[#FFCE05] h-12 rounded-lg tracking-[0.20em] flex items-center justify-center font-semibold text-white text-md uppercase shadow-lg">
        <span className='tracking-[0.20em] font-semibold text-white text-md uppercase'> {title}</span>
        <img onClick={()=>{navigate(path)}} className='w-7' src={EditIcon} alt="" /></div>
      <div className="px-4 py-7 flex flex-col gap-7">
      {inputs.length > 0 && inputs.map((item)=>{
        return item;
      })}
      </div>
    </div>
  )
}

export default DashboardFormCompo