import React from 'react'
import Input from './Input'
import CompanyIcon from '../../public/assets/images/companyIcon.svg'


function FormCompo({title, inputs}) {
  return (
    <div className='w-full border rounded-lg bg-white'>
      <div className="bg-gradient-to-t from-[#FFB404] to-[#FFCE05] h-12 rounded-lg tracking-[0.40em] flex items-center justify-center font-semibold text-white text-md uppercase shadow-lg">{title}</div>
      <div className="px-4 py-7 flex flex-col gap-7">
      {inputs.map((item)=>{
        return item;
      })}
      </div>
    </div>
  )
}

export default FormCompo
