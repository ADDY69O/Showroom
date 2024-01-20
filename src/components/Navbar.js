import React from 'react'
import headerLogo from "../Assets/images/headerLogo.png"
const Navbar = () => {
  return (
    <nav className=" flex flex-row justify-around mt-3 mb-12">
        <div className='flex flex-row'>
            <div className=' flex flex-row '>
            <img src={headerLogo} alt="" />
              <p1 className="text-xl font-bold">Showroom</p1>
            </div>
        <p1 className="text-xs text-custom-landing-black ml-3 mt-2">COMING SOON</p1>
        </div>
        <div className='flex flex-row gap-10 '>
        <p1 className="text-sm text-custom-landing-black mr-3 mt-1">pricing</p1>
        <button className=' text-sm bg-custom-component-blue-above-button text-custom-nav-button  p-2 rounded-lg '>Get Early Access</button>
        </div>
    
      

    </nav>
  )
}

export default Navbar