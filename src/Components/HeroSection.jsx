import React from 'react'
import HeroImage from '../../public/assets/HeroImage.svg'
import LogoInHeroSection from '../../public/assets/LogoInHeroSection.svg'

function HeroSection() {
  return (
    <div className='mt- h-[640px] bg-[#002D3A] border border-black rounded-b-[50px]'>

      {/* jdhfkjdsh */}
      <div className="h-[400px] relative rounded-b-[50px] pt-20  bg-[#FFB404]">
        <img className='w-80 ml-8' src={LogoInHeroSection} alt="" />
        <img className='' src={HeroImage} alt="" />
      </div>
      
    </div>
  )
}

export default HeroSection
