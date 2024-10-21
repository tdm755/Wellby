import React from 'react'
import HeroSection from '../HeroSection.jsx'
import PersonalDetails from '../PersonalDetails.jsx'
import FormCompo from '../../Utils/FormCompo.jsx'
import Input from '../../Utils/Input.jsx'
import CompanyIcon from '../../../public/assets/images/companyIcon.svg'
import EmployeeIDIcon from '../../../public/assets/images/EmployeeIDIcon.svg'
import LocationIcon from '../../../public/assets/images/LocationIcon.svg'
import CityIcon from '../../../public/assets/images/CityIcon.svg'


function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <HeroSection />
      {/* <PersonalDetails /> */}
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
  )
}

export default HomePage
