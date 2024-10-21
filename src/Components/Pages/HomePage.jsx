import React from 'react'
import HeroSection from '../HeroSection.jsx'
import FormCompo from '../../Utils/FormCompo.jsx'
import Input from '../../Utils/Input.jsx'
import CompanyIcon from '../../../public/assets/images/companyIcon.svg'
import EmployeeIDIcon from '../../../public/assets/images/EmployeeIDIcon.svg'
import LocationIcon from '../../../public/assets/images/LocationIcon.svg'
import CityIcon from '../../../public/assets/images/CityIcon.svg'
import AlertIcon from '../../../public/assets/images/AlertIcon.svg'


function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <HeroSection />
     <div className="w-full flex flex-col gap-4 items-center justify-center mt-12 px-5">
      <div className="flex flex-col gap-4 w-full items-center justify-center">
        <h3 className='flex gap-1 text-md font-semibold tracking-[0.20em] text-[#0F4254]  uppercase'>Find my details below <img className='w-3' src={AlertIcon} alt="" /></h3>
        <div className="px-10 w-full bg-white h-12 font-semibold text-[#0F4254] flex items-center justify-center text-xl rounded-lg">Nitesh Rajkumar Rathod</div>
      </div>
     <FormCompo 
          title={'Personal Details'}
          inputs={[
            <Input label="Company" type="text" icon={CompanyIcon} />,
            <Input label="Employee ID" type="text" icon={EmployeeIDIcon} />,
            <Input label="Nearby Landmark" type="text" icon={LocationIcon} />,
            <Input label="City" type="text" icon={CityIcon} />
          ]} 

      />
     </div>
    </div>
  )
}

export default HomePage
