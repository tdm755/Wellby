import React from 'react'
import Input from './Input'
import CompanyIcon from '../../public/assets/images/companyIcon.svg'
import EditIcon from '../../public/assets/images/EditIcon.svg'
import { useNavigate } from 'react-router-dom'



function DashboardFormCompo({title, inputs, path, pageTitle}) {


  const navigate = useNavigate();

  return (
    <div className='w-full border rounded-lg bg-white shadow-xl'>

      {title &&
        <div className="bg-gradient-to-t from-[#FFB404] to-[#FFCE05] h-12 rounded-lg flex items-center justify-between px-4 shadow-lg">
        <span className='tracking-[0.20em] font-semibold text-white text-md uppercase'> {title}</span>
        <img onClick={()=>{navigate(path)}} className='w-6' src={EditIcon} alt="" />
      </div>
      }

       
      {pageTitle && <h4 className='pl-4 pt-4 font-semibold text-[#3C3C3C]'>{pageTitle}</h4>}
      <div className={`px-4 ${!pageTitle ? 'pt-7' : 'pt-2'} pb-7 flex flex-col gap-5`}>
      {inputs.length > 0 && inputs.map((item)=>{
        return item;
      })}
      </div>
    </div>
  )
}

export default DashboardFormCompo