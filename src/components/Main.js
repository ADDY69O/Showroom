    import React from 'react'
    import landinPhone from '../Assets/images/landinPhone.png'
    import LandingBackground2 from '../Assets/images/LandingBackground2.png'

    const Main = () => {
    return (
        
        

            <div className='flex flex-col cs:flex-row justify-between    '>
        
                <div className=' ml-4  mt-32.5  cs:mt-40 cs:ml-82.5 cs:mr-45'>
                    <h1 className='text-5xl cs:text-7xl text-custom-landing-black  font-bold-2 font-helvetica-neue font-semibold '>Start today.</h1>
                    <h1 className='text-5xl cs:text-7xl 
                    text-custom-landing-black font-bold-2 font-helvetica-neue font-semibold'>Sell tomorrow</h1>
                    <p className='text-xs cs:text-sm text-custom-landing-black flex flex-wrap mt-2 font-normal font-inter  mr-4 cs:w-543px cs:h-89px w-369px'>You don't need an agency to launch a SD Showroom. Do it yourself. No coding or Design experience necessary.</p>
                    <div className='flex flex-row cs:mt-0 mt-23px' >
                    <input type="text" id="first_name" className="w-172px h-10.5 pt-13px pb-3 pl-3.5 pr-89px cs:w-50 cs:h-12.5 cs:pt-15px cs:pr-109px cs:pb-3 text-xs cs:text-sm cs:pl-17px bg-custom-landing-input-bg text-custom-landing-input rounded-lg " placeholder="Full Name*" required/>
                    <input type="text" id="first_name" className="ml-13px w-172px h-10.5 pt-13px pb-3 pl-3.5 pr-15  cs:ml-4 cs:w-50 cs:h-12.5 cs:pt-15px text-xs cs:text-sm cs:pr-109px cs:pb-3 cs:pl-17px bg-custom-landing-input-bg text-custom-landing-input rounded-lg " placeholder="Company Name*" required/>
                
                    </div>
                    <div>

                    <input type="text" placeholder='Company Website*' className='mt-13px  mr-4  pt-13px pb-3 pl-3.5 pr-245px w-358px  cs:mt-4 cs:w-104 cs:pt-15px cs:pr-67.5 cs:pb-3 cs:pl-17px  text-xs cs:text-sm bg-custom-landing-input-bg text-custom-landing-input  rounded-lg  h-12.5  ' />
                    </div>
                    <button className='bg-custom-landing-button text-custom-nav-button mt-4 w-358px cs:w-104 h-15  rounded-xl'><div>
                        <h1 className='text-sm font-bold pt-7px pl-129px pr-127px cs:pt-9px  cs:pr-149px cs:pl-149px'>Put me in line</h1>
                        <p className='text-xs font-semibold pl-32.5 pr-32.5 pb-2 cs:pb-9px cs:pr-40 cs:pl-40'>No commitment</p>    
                    </div></button>
                    <p className='text-sm mt-2 text-custom-landing-input' >*fields are mandatory</p>
                </div>
                <div className='relative mt-11.5 ml-auto  cs:ml-20.5 cs:mt-30   '>
                    <img className=' absolute bottom-[-100px] left-[-70px]  md:bottom-[-300px] md:left-[-100px] w-32.5 h-259px  md:w-max md:h-max' src={landinPhone}  alt="" />
                    
                    <img src={LandingBackground2} className="  w-411px h-250px md:w-full md:h-full  mr-0"  alt="   " />


                </div>

            </div>
        
        

    )
    }

    export default Main