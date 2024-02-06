      import React from 'react';
      import main2 from "../Assets/images/main2.png";
      import shoess from "../Assets/images/shoess.png";

      const Body = () => {
    
        return (
          <div className=' mt-32.5 md:mt-313px flex flex-col  lg:flex-row justify-between'>
            <div className=''>
              
              <div className='flex flex-col bg-custom-landing-black   items-start h-full relative w-787px '>
              <div className='h-10 bg-custom-component-blue-above-button w-full absolute top-0 left-0 font-source-sans-pro mr-2 '></div>
                <h1 className='text-ft30-36.63 mt-92px mr-4 md:mt-92px md:mr-77px w-389px md:ml-239px flex flex-wrap    text-white font-helvetica-neue  font-bold  '>
                  Give your online shoppers a better brand experience and level up your customer behavior insights.
                </h1>

                <button className='mt-13 ml-4.75 mr-239px md:ml-239px md:mt-10 md:mr-313px pt-2 pr-4.5 pb-7px pl-21px text-ft16-22.78
                bg-custom-blue-shade bg-opacity-35 rounded-full font-SansProSemiBold font-semibold border-2 w-max mb-2 border-custom-component2-button text-custom-nav-button'>
          Store Builder
        </button>


                <button className='mt-6 ml-4.75 mr-25 md:mt-4 md:ml-239px  md:mr-313px pt-2 pr-4.5 pb-7px pl-21px  text-ft16-22.78 rounded-full font-SansProSemiBold border-2 w-max   mb-2 border-custom-component3-button text-custom-nav-button font-semibold'>
                  Customer Journey Visualization
                </button>
                
              
                <div className=' flex flex-row md:flex-col'>
                <button className='ml-4.75 mt-6  md:mt-4 md:ml-239px  md:mr-313px pt-1 pr-4.5 pb-7px pl-21px text-ft16-22.78 rounded-full font-SansProSemiBold border-2 w-max  border-custom-component3-button text-custom-nav-button font-semibold'>A/B Testing</button>
                
                
                
                <button className=' ml-4 mt-6 mr-74px md:mt-4 md:ml-239px  md:mr-313px pt-2 pr-4.5 pb-7px pl-21px text-ft16-22.78 rounded-full font-SansProSemiBold border-2 w-max    border-custom-component3-button  text-custom-nav-button font-semibold'>Amplified Brand</button>
                </div>


              
                <button className=' ml-4.75 mr-112px mt-6 md:ml-239px  md:mr-313px pt-2 pr-4.5 pb-7px pl-21px text-ft16-22.78 rounded-full font-SansProSemiBold border-2 w-max   mb-25 border-custom-component3-button  text-custom-nav-button font-semibold'>Centralized Management Portal</button>
              </div>
            </div>


            
            <div className='relative  '>

            
            <img className='hidden md:block md:w-full  md:h-full ' src={main2} alt="" />
            <img className=' md:hidden w-full h-full ' src={shoess} alt="" />

            <div className='absolute  opacity-80 bottom-0 left-0 bg-custom-component-blue-above-image text-custom-nav-button p-4 w-full h-110px    '>
              <p className=' mt-9.5 ml-51px mb-51px text-ft20-24.42 font-HelveticaNeueMedium  ' >Drag-and-drop products to rearrange store based on data findings.</p>
            </div>
            </div>
          </div>
        );
      };

      export default Body;
