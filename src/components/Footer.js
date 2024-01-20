import React from 'react'
import FooterInsta from "../Assets/images/FooterInsta.png"
import FooterLogo from "../Assets/images/FooterLogo.png"
import FooterTikTok from "../Assets/images/FooterTikTok.png"
import FooterTwitter from "../Assets/images/FooterTwitter.png"
import FooterYoutube from "../Assets/images/FotterYoutube.png"
import FooterLinkedin from "../Assets/images/FooterLinkedin.png"
const Footer = () => {
  return (
    <div className='flex flex-row p-2 justify-around'>
        <div className='flex flex-row '>
        
        <div className='flex flex-row mr-10'>

        <img className='w-28 h-6 mt-2' src={FooterLogo} alt="" />
        
        </div>
        <p className=' text-xs p-2 text-gray-400'>press@showroom.store</p>
        </div>
        <div className='flex flex-row gap-2'>
        <img className='p-2'  src={FooterTwitter}  alt="" />
        <img className='p-2'   src={FooterYoutube} alt="" />
        <img className='p-2'   src={FooterLinkedin} alt="" />
        <img className='p-2'   src={FooterTikTok} alt="" />
        <img className='p-2'   src={FooterInsta} alt="" />
        </div>

    </div>
  )
}

export default Footer