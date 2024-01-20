import React from 'react'

const AboveFotter = () => {
  return (
    <div className='bg-custom-component-blue-above-button text-custom-nav-button flex flex-col p-30  justify-center items-center'>
        
        <h1 className='text-xl font-helvetica-neue font-bold mt-12'>Are You ready to create your Showroom?</h1>
        <div className='flex flex-row pt-[47px] gap-[57px] mb-12'>
            <button className='w-max bg-custom-nav-button text-custom-landing-black font-source-sans-pro font-semibold text-xs pt-[14px] pb-[13px] pr-[37px] pl-[37px] rounded-full'>Get Early Access</button>
            <button className='w-max  border-2 border-custom-nav-button text-custom-nav-button bg-custom-component-blue-above-button  rounded-full font-source-sans-pro pt-[14px] pb-[13px] pr-[37px] pl-[37px]  text-xs font-semibold'>Plans and Pricing</button>
    
        </div>


    </div>
  )
}

export default AboveFotter