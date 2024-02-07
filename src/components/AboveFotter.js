import React from "react";

const AboveFotter = () => {
  return (
    <div className="h-369px  bg-custom-component-blue-above-button text-custom-nav-button flex flex-col   justify-center items-center  ">
      <h1 className="flex flex-row justify-center items-center text-ft40-48.84 font-HelveticaNeueBold font-bold mt-31 mr-77px ml-77px md:mt-118px md:mr-369px md:ml-83.5 text-center md:text-left">
        Are You ready to create your Showroom?
      </h1>

      <div className="flex flex-row pt-33px gap-5 mb-30">
        <button className="w-max bg-custom-nav-button text-custom-landing-black font-SansProSemiBold font-semibold text-ft15-21.36 pt-3.5 pb-13px pr-37px pl-37px pb rounded-full">
          Get Early Access
        </button>
        <button className="w-max  border-2 border-custom-nav-button text-custom-nav-button bg-custom-component-blue-above-button  text-ft15-21.36 rounded-full font-SansProSemiBold pt-3.5  pb-13px  pr-8 pl-8   font-semibold">
          Plans and Pricing
        </button>
      </div>
    </div>
  );
};

export default AboveFotter;
