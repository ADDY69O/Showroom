    import React from 'react';
    import main2 from "../Assets/images/main2.png";
    import shoess from "../Assets/images/shoess.png";

    const Body = () => {
      return (
        <div className=' mt-32.5 md:mt-313px flex flex-col  lg:flex-row justify-between'>
          <div className=''>
            
            <div className='flex flex-col bg-custom-landing-black   items-start h-full relative '>
            <div className='h-10 bg-custom-component-blue-above-button w-full absolute top-0 left-0 font-source-sans-pro mr-2 '></div>
              <h1 className='text-3xl mt-92px ml-4.75 mr-4 md:mt-92px md:mr-92px  md:ml-239px flex flex-wrap    text-white font-helvetica-neue  font-bold  '>
                Give your online shoppers a better brand experience and level up your customer behavior insights.
              </h1>

              <button className='mt-15px ml-4.75 mr-239px md:ml-239px md:mt-10 md:mr-313px pt-2 pr-4.5 pb-7px pl-21px  text-xs rounded-full border-2 w-max  mb-2 border-custom-component2-button text-custom-nav-button font-semibold'>
                Store Builder
              </button>
              <button className='mt-15px ml-4.75 mr-25 md:mt-4 md:ml-239px  md:mr-313px pt-2 pr-4.5 pb-7px pl-21px  text-xs rounded-full border-2 w-max   mb-2 border-custom-component2-button text-custom-nav-button font-semibold'>
                Customer Journey Visualization
              </button>
              
            
              <div className=' flex flex-row md:flex-col'>
              <button className='ml-4.75 mt-15px  md:mt-4 md:ml-239px  md:mr-313px pt-1 pr-4.5 pb-7px pl-21px text-xs rounded-full border-2 w-max  border-custom-component2-button text-custom-nav-button font-semibold'>A/B Testing</button>
              
              
              
              <button className=' ml-4 mt-15px mr-74px md:mt-4 md:ml-239px  md:mr-313px pt-2 pr-4.5 pb-7px pl-21px text-xs rounded-full border-2 w-max    border-custom-component2-button text-custom-nav-button font-semibold'>Amplified Brand</button>
              </div>


             
              <button className=' ml-4.75 mr-112px mt-4 md:ml-239px  md:mr-313px pt-2 pr-4.5 pb-7px pl-21px text-xs rounded-full border-2 w-max   mb-25 border-custom-component2-button text-custom-nav-button font-semibold'>Centralized Management Portal</button>
            </div>
          </div>


          
          <div className='relative  '>

          
          <img className='hidden md:block md:w-full  md:h-full ' src={main2} alt="" />
          <img className=' md:hidden w-full h-full ' src={shoess} alt="" />

          <div className='absolute  opacity-80 bottom-0 left-0 bg-custom-component-blue-above-image text-custom-nav-button p-4 w-full h-max'>
            <p className='font-helvetica-neue text-sm font-medium leading-6' >Drag-and-drop products to rearrange store based on data findings.</p>
          </div>
          </div>
        </div>
      );
    };

    export default Body;
