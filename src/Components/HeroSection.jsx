import React, { useState, useRef, useEffect } from 'react'
import HeroImage from '../../public/assets/images/HeroSectionImage.png'
import LogoInHeroSection from '../../public/assets/LogoInHeroSection.svg'
import rightArrow from '../../public/assets/images/rightArrow.svg'
import EmergencyModal from './EmergencyModal'

function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [swipePosition, setSwipePosition] = useState(0);
  const swipeRef = useRef(null);
  const startXRef = useRef(0);
  const isDraggingRef = useRef(false);

  const handleSwipeStart = (clientX) => {
    startXRef.current = clientX;
    isDraggingRef.current = true;
  };

  const handleSwipeMove = (clientX) => {
    if (!isDraggingRef.current) return;
    const diff = clientX - startXRef.current;
    const maxSwipe = swipeRef.current.offsetWidth - 80; // 80 is the width of the SOS button
    const newPosition = Math.max(0, Math.min(diff, maxSwipe));
    setSwipePosition(newPosition);

    if (newPosition >= maxSwipe) {
      setIsModalOpen(true);
      handleSwipeEnd();
    }
  };

  const handleSwipeEnd = () => {
    isDraggingRef.current = false;
    setSwipePosition(0);
  };

  useEffect(() => {
    const handleMouseMove = (e) => handleSwipeMove(e.clientX);
    const handleTouchMove = (e) => handleSwipeMove(e.touches[0].clientX);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('mouseup', handleSwipeEnd);
    document.addEventListener('touchend', handleSwipeEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mouseup', handleSwipeEnd);
      document.removeEventListener('touchend', handleSwipeEnd);
    };
  }, []);

  return (
    <div className='w-full h-[680px] bg-[#002D3A] flex flex-col gap-7 border border-black rounded-b-[40px]'>
      {/* jdhfkjdsh */}
      <div className="h-[400px] overflow-hidden relative rounded-b-[40px] pt-[88px] bg-gradient-to-t from-[#FFB404] to-[#FFCE05]">
        <img className='w-[320px] ml-16' src={LogoInHeroSection} alt="" />
        <img className='absolute -bottom-4' src={HeroImage} alt="" />
      </div>

      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="">
          <p className='text-[32px] text-[#B4B4B4]'>In case of <span className='font-semibold text-[#FF3E4D]'>Emergency</span></p>
          <p className='text-white font-bold text-[18px]'>Connect to my Emergency Contact</p>
        </div>
        <div className="w-full px-7">
          <div 
            ref={swipeRef}
            className="h-14 rounded-full flex px-3 items-center bg-[#D73E4D] shadow-[#000000]/100 shadow-inner w-full relative overflow-hidden"
            onMouseDown={(e) => handleSwipeStart(e.clientX)}
            onTouchStart={(e) => handleSwipeStart(e.touches[0].clientX)}
          >
            <div 
              className="h-[65%] rounded-full w-20 shadow-md shadow-black/50 bg-gradient-to-t from-[#f26522] to-[#ffde17] flex items-center justify-center text-2xl font-bold text-white cursor-pointer px-4 mx-4 absolute"
              style={{ left: `${swipePosition}px` }}
            >
              SOS
            </div>
            <p className='text-[#F5B8BB] px-4 tracking-[0.25em] whitespace-nowrap font-medium text-[12px] ml-20'>SWIPE RIGHT TO CALL</p>
          </div>
        </div>
        <div className="h-1 w-[75%]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: 'linear-gradient(to right, #FF9E00 50%, transparent 50%)',
              backgroundSize: '20px 1px',
              backgroundRepeat: 'repeat-x'
            }}
           >
          </div>
        </div>
        <div className="">
          <div className='flex gap-2'>
          <p className='text-[18px]  text-white'>
          <span>Send </span>  
          <span className='text-[#32CC36] font-bold'>
            Instant Message
          </span>
          </p>
          <button className='bg-gradient-to-t from-[#006E3C] to-[#32CC36] w-24 rounded-full flex items-center justify-end px-4 py-2'><img className='w-7' src={rightArrow} alt="" /></button>
          </div>
        </div>
      </div>

      <EmergencyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default HeroSection
