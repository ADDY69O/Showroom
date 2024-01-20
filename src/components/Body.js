    import React from 'react';
    import main2 from "../Assets/images/main2.png";

    const Body = () => {
      return (
        <div className='w-full flex flex-row justify-between'>
          <div className='w-max'>
            
            <div className='flex flex-col bg-custom-landing-black  justify-items-start h-full relative'>
            <div className='h-3 bg-custom-component-blue-above-button w-full absolute top-0 left-0 font-source-sans-pro mr-2 '></div>
              <h1 className='text-xl mt-6 mb-6 flex flex-wrap ml-28   text-white font-sans font-bold mr-10'>
                Give your online shoppers a better brand experience and level up your customer behavior insights.
              </h1>

              <button className='p-2 m-1  text-xs rounded-full border-2 w-max ml-28  mb-2 border-custom-component2-button text-custom-nav-button font-semibold'>
                Store Builder
              </button>
              <button className='p-2 m-1 text-xs rounded-full border-2 w-max ml-28  mb-2 border-custom-component2-button text-custom-nav-button font-semibold'>
                Customer Journey Visualization
              </button>
              <button className='p-2  m-1 text-xs rounded-full border-2 w-max ml-28  mb-2 border-custom-component2-button text-custom-nav-button font-semibold'>A/B Testing</button>
              <button className='p-2 m-1 text-xs rounded-full border-2 w-max ml-28  mb-2 border-custom-component2-button text-custom-nav-button font-semibold'>Amplified Brand</button>
              <button className='p-2 m-1 text-xs rounded-full border-2 w-max ml-28  mb-2 border-custom-component2-button text-custom-nav-button font-semibold'>Centralized Management Portal</button>
            </div>
          </div>
          <div className='relative'>

          
          <img className='w-max  ' src={main2} alt="" />
          <div className='absolute  opacity-80 bottom-0 left-0 bg-custom-component-blue-above-image text-custom-nav-button p-4 w-full'>
            <p className='font-helvetica-neue text-xs font-medium leading-6' >Drag-and-drop products to rearrange store based on data findings.</p>
          </div>
          </div>
        </div>
      );
    };

    export default Body;
