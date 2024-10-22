import React from 'react'
import Header from '../Header'
import DefaultBackground from '../../../public/assets/images/default-background.png'

function Dashboard() {
  return (
    <div className='min-h-screen bg-black flex justify-center'>
      <div className='w-[400px]' style={{ backgroundImage: `url(${DefaultBackground})` }}>
        <Header />
      </div>
    </div>
  )
}

export default Dashboard
