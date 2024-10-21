import React from 'react'
import HeroSection from '../HeroSection.jsx'
import FormCompo from '../../Utils/FormCompo.jsx'
import Input from '../../Utils/Input.jsx'
import CompanyIcon from '../../../public/assets/images/companyIcon.svg'
import EmployeeIDIcon from '../../../public/assets/images/EmployeeIDIcon.svg'
import LocationIcon from '../../../public/assets/images/LocationIcon.svg'
import CityIcon from '../../../public/assets/images/CityIcon.svg'
import AlertIcon from '../../../public/assets/images/AlertIcon.svg'
import CallIcon from '../../../public/assets/images/CallIcon.svg'


function HomePage() {
  return (
    <div className='flex flex-col gap-12 mb-28 items-center justify-center'>
      <HeroSection />


      <div className="w-full px-5">
        <div className="w-full flex flex-col gap-4 items-center justify-center">
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


      <div className="mt-7 w-full px-5 bg-[#EEEEEE]">
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className='text-[22px] font-semibold text-[#0F4254]'>Prepare and Respond!</h3>
          <div className="flex gap-4 w-full">
            <div className="h-28 rounded-md shadow-lg bg-white w-full flex flex-col gap-1 items-center justify-center">
              <p className='tracking-[0.20em] text-[#787878]'>BLOOD GROUP</p>
              <div className="h-1 w-[90%]">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #787878 50%, transparent 50%)',
                    backgroundSize: '15px 1px',
                    backgroundRepeat: 'repeat-x'
                  }}
                >
                </div>
              </div>
              <span className='text-4xl text-[#DC2A3C] font-semibold'>AB +ve</span>
            </div>
            <div className="h-28 rounded-md shadow-lg bg-white w-full flex flex-col gap-2 items-center justify-center">
              <p className='tracking-[0.20em] text-[#787878]'>BLOOD GROUP</p>
              <div className="h-1 w-[90%]">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #787878 50%, transparent 50%)',
                    backgroundSize: '15px 1px',
                    backgroundRepeat: 'repeat-x'
                  }}
                >
                </div>
              </div>
              <span className='flex items-center justify-center gap-2 text-3xl'><img className='w-8' src={CallIcon} alt="" /> 102</span>
            </div>
          </div>
        </div>
        <FormCompo
            title={'Personal Details'}
            inputs={[
              <Input label="Allergies" type="text" icon={CompanyIcon} />,
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