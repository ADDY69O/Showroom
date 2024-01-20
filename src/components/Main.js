    import React from 'react'
    import landinPhone from '../Assets/images/landinPhone.png'
    import LandingBackground2 from '../Assets/images/LandingBackground2.png'

    const Main = () => {
    return (
        
        

            <div className='flex flex-row justify-between m-7  '>
        
                <div className='w-3/10'>
                    <h1 className='text-7xl text-custom-landing-black  font-bold-2 font-helvetica-neue font-semibold '>Start today.</h1>
                    <h1 className='text-7xl 
                    text-custom-landing-black font-bold-2 font-helvetica-neue font-semibold'>Sell tomorrow</h1>
                    <p className='text-sm text-custom-landing-black'>You don't need an agency to launch a SD Showroom. Do it yourself. No coding or Design experience necessary.</p>
                    <div>
                    <input type="text" id="first_name" className="bg-custom-landing-input-bg text-custom-landing-input p-2 rounded-lg m-2 w-2/5" placeholder="Full Name*" required/>
                    <input type="text" id="first_name" className="bg-custom-landing-input-bg text-custom-landing-input p-2 rounded-lg  m-2 w-2/5" placeholder="Company Name*" required/>
                
                    </div>
                    <div>

                    <input type="text" placeholder='Company Website*' className='bg-custom-landing-input-bg text-custom-landing-input p-2 rounded-lg  m-2 w-4/5  ' />
                    </div>
                    <button className='bg-custom-landing-button text-custom-nav-button p-2 w-4/5 rounded-xl'><div>
                        <h1 className='text-xl'>Put me in line</h1>
                        <p className='text-sm'>No commitment</p>    
                    </div></button>
                    <p className='text-sm text-custom-landing-input' >*fields are mandatory</p>
                </div>
                <div className='relative mb-60'>
                    <img className=' absolute bottom-[-300px] left-[-100px] ' src={landinPhone}  alt="" />
                    
                    <img src={LandingBackground2}  alt="absolute top-0 right-0" />


                </div>

            </div>
        
        

    )
    }

    export default Main