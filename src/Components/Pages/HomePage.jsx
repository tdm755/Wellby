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
import AllergiesIcon from '../../../public/assets/images/AllergiesIcon.svg'
import PrimaryPhysician from '../../../public/assets/images/PrimaryPhysician.svg'
import MedicalConditionsIcon from '../../../public/assets/images/MedicalConditionsIcon.svg'
import rightArrow from '../../../public/assets/images/rightArrow.svg'
import CompanyPoliciesIcon from '../../../public/assets/images/CompanyPoliciesIcon.svg'
import MedCompany from '../../../public/assets/images/MedCom.svg'
import MedID from '../../../public/assets/images/MedID.svg'
import PolicyRelationShipManager from '../../../public/assets/images/PolicyRelationShipManager.svg'
import HrManagerIcon from '../../../public/assets/images/HrManagerIcon.svg'
import SafetyManager from '../../../public/assets/images/SafetyManager.svg'
import AddImage from '../../../public/assets/images/AddImage.png'
import WellByLogo from '../../../public/assets/images/WellByLogo.png'
import BlogComp from '../../Utils/blogComp.jsx'


function HomePage() {
  return (
    <div className='flex flex-col gap-12 items-center justify-center'>
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


      <div className="mt-32 w-full flex flex-col items-center gap-20  bg-[#EEEEEE] relative">

        {/* Blood Group Section And Medical Details */}
        <div className="flex flex-col items-center justify-center gap-4 absolute -top-24 w-full px-5">
          <h3 className='text-[22px] font-semibold text-[#0F4254]'>Prepare and Respond!</h3>
          <div className="flex gap-4 w-full">
            <div className="h-28  rounded-md shadow-xl bg-white w-full flex flex-col gap-1 items-center justify-center">
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
            <div className="h-28  rounded-md shadow-xl bg-white w-full flex flex-col gap-2 items-center justify-center">
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

        {/* Mediclaim Policies */}
        <div className="w-full flex flex-col gap-20 mt-[90px] px-5">

          <FormCompo
            title={'MEDICAL Details'}
            inputs={[
              <Input label="Allergies" type="text" icon={AllergiesIcon} />,
              <Input label="Medical Conditions" type="text" icon={MedicalConditionsIcon} />,
              <Input label="Primary Physician" type="text" icon={PrimaryPhysician} icon2={CallIcon} />,
            ]}
          />

          <div className='w-full border rounded-lg bg-white shadow-xl'>
            <div className="bg-gradient-to-t from-[#FFB404] to-[#FFCE05] h-12 rounded-lg tracking-[0.40em] flex items-center justify-center font-semibold text-white text-md uppercase shadow-lg">Mediclaim Policies</div>

            <div className="px-4 py-7 flex flex-col gap-3">
              <div className="flex justify-between">
                <img className='w-11' src={CompanyPoliciesIcon} alt="" />
                <div className="">
                  <h4 className='text-2xl font-bold text-[#32CC36]'>Company Policy</h4>
                  <span className='text-sm ml-1'>Expiry Date: <span className='font-semibold text-[#3C3C3C]'>06.04.2024</span></span>
                </div>
                <button className='bg-[#32CC36] h-[26px] w-[70px] rounded-full flex items-center justify-end px-3 py-'><img className='w-4' src={rightArrow} alt="" /></button>
              </div>

              <div className=" py-7 flex flex-col gap-7">
                <Input label={'Mediclaim Company'} type='text' icon={MedCompany} />
                <Input label={'Mediclaim-ID'} type='text' icon={PolicyRelationShipManager} />
                <Input label={'Policy Relationship Manager'} type='text' icon={MedID} icon2={CallIcon} />
              </div>

              <div className="flex flex-col px-2">
                <span>Personal Policy Toll Free Number</span>
                <div className='text-4xl font-bold flex justify-between items-center'>1800-425-9449 <img className='w-6' src={CallIcon} alt="" /></div>
              </div>
            </div>

            <div className="h-1 flex items-center justify-center mt-4 mb-4">
              <div
                className=" w-[90%] h-full"
                style={{
                  backgroundImage: 'linear-gradient(to right, #32CC36 50%, transparent 50%)',
                  backgroundSize: '10px 1px',
                  backgroundRepeat: 'repeat-x'
                }}
              >
              </div>
            </div>

            <div className="px-4 py-7 flex flex-col gap-3">
              <div className="flex justify-between">
                <img className='w-11' src={CompanyPoliciesIcon} alt="" />
                <div className="">
                  <h4 className='text-2xl font-bold text-[#32CC36]'>Personal Policy</h4>
                  <span className='text-sm flex gap-1 ml-1'>Expiry Date: <span className='font-semibold text-[#3C3C3C]'>Not Mentioned</span> <img className='w-3' src={AlertIcon} alt="" /></span>
                </div>
                <button className='bg-[#32CC36] h-[26px] w-[70px] rounded-full flex items-center justify-end px-3 py-'><img className='w-4' src={rightArrow} alt="" /></button>
              </div>
              <div className=" py-7 flex flex-col gap-7">
                <Input label={'Mediclaim Company'} type='text' icon={MedCompany} />
                <Input label={'Mediclaim-ID'} type='text' icon={PolicyRelationShipManager} />
                <Input label={'Policy Relationship Manager'} type='text' icon={MedID} icon2={CallIcon} />
              </div>

              <div className="flex flex-col px-2">
                <span>Personal Policy Toll Free Number</span>
                <div className='text-4xl font-bold flex justify-between items-center'>1800-425-9449 <img className='w-6' src={CallIcon} alt="" /></div>
              </div>

            </div>

          </div>

        </div>


        {/* Blog Section */}
        <div className="w-full px-5">
          <div className="pl-1">
            <h2 className='text-[34px] text-[#FF3E4D] font-bold'>Helpful Resources</h2>
            <p>Explore quick resources to respond to crises.</p>
          </div>
          <div className="mt- flex flex-col gap-8">
            <BlogComp />
            <BlogComp />
            <BlogComp />            
          </div>
        </div>
         <div className="px-5 w-full">
         <FormCompo
            title={'Emergency Contacts'}
            inputs={[
              <Input label="HR Manager" type="text" icon={HrManagerIcon} icon2={CallIcon} />,
              <Input label="Safety Manager" type="text" icon={SafetyManager} icon2={CallIcon} />,
            ]}
          />
         </div>
          <div className="">
            <img src={AddImage} alt="" />
          </div>
          <div className="w-full flex flex-col items-center justify-center mb-2 gap-2">
            <img className='w-60' src={WellByLogo} alt="" />
            <div className="h-1 flex items-center justify-center w-full">
              <div
                className=" w-[90%] h-full"
                style={{
                  backgroundImage: 'linear-gradient(to right, #A0A0A0 50%, transparent 50%)',
                  backgroundSize: '10px 1.2px',
                  backgroundRepeat: 'repeat-x'
                }}
              >
              </div>
            </div>
            <p className='text-sm'>Powered by: <span className='font-semibold'>Wellby Solutions Pvt. Ltd.</span></p>
          </div>
      </div>

    </div>
  )
}

export default HomePage