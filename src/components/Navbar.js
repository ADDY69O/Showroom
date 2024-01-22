import React from 'react'
import headerLogo from "../Assets/images/headerLogo.png"
import { FaBars } from 'react-icons/fa';
const Navbar = () => {
  return (
    <nav className=" flex flex-row items-center justify-between cs:gap-68 cs:mr-82.5 cs:ml-82.5">

  {/* left  part contains the logo and text */}
      
        <div className='flex  flex-row  items-center mt-33px ml-4    cs:mt-7.5 '>
        <FaBars size={24} color="#333" className='cs:hidden  ' />
        <img className='' src={headerLogo} alt="" />
        <p1 className="hidden text-xs text-custom-landing-black cs:ml-3 cs:mt-10.5 cs:block ">COMING SOON</p1>
        </div>

{/* right part of the navbar contains buttons */}

        <div className='flex flex-row  font-semibold font-source-sans-pro mr-4   text-xs cs:gap-8 '>
            <a href="/" className=' hidden cs:block text-custom-landing-black  mt-39px leading-21 pt-3.5 pb-3 '>Pricing</a>

            <a className=' pt-9px pb-2 pr-2 pl-2  cs:pt-3.5 cs:pb-3 cs:pr-4 cs:pl-4 cs:ml-8 cs:mt-9.5 leading-5 text-center items-center mt-5 bg-custom-component-blue-above-button text-custom-nav-button rounded-full ' href="">Get Early Access</a>

        </div>
    
      

    </nav>
  )
}

export default Navbar