import React from 'react'
import HeroImage from '../../public/assets/images/HeroSectionImage.png'
import LogoInHeroSection from '../../public/assets/LogoInHeroSection.svg'

function HeroSection() {
  return (
    <div className='mt- h-[640px] bg-[#002D3A] border border-black rounded-b-[50px]'>

      {/* jdhfkjdsh */}
      <div className="h-[400px] overflow-hidden relative rounded-b-[50px] pt-[88px]  bg-[#FFB404]">
        <img className='w-[320px] ml-16' src={LogoInHeroSection} alt="" />
        <img className='absolute -bottom-4' src={HeroImage} alt="" />
      </div>

      <div className="">
        <div className="">
        <p>In case of <span>Emergency</span></p>
        </div>
        <div className=""></div>
        <div className=""></div>
      </div>
      
    </div>
  )
}

export default HeroSection
