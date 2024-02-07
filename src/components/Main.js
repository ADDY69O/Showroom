import React from "react";
import landinPhone from "../Assets/images/landinPhone.png";
import LandingBackground2 from "../Assets/images/LandingBackground2.png";

const Main = () => {
  return (
    <div className="ml-4 flex flex-col cs:flex-row  justify-between    ">
      <div className="  ml-4 mt-20.5  cs:mt-40 cs:ml-82.5 cs:mr-45">
        <div className=" text-ft50-53.78 cs:text-ft86-90 font-bold text-custom-landing-black  font-HelveticaNeueBold w-max h-108px md:h-188px">
          <h1 className="  ">Start today.</h1>
          <h1 className="">Sell tomorrow.</h1>
        </div>

        <div className=" cs:mt-6 w-358px h-58px cs:w-533px md:h-92px">
          <p className="text-ft14-17.6 cs:text-ft18-25 text-custom-landing-black flex  flex-wrap font-normal font-InterRegular ">
            You don't need an agency to launch a SD Showroom. Do it yourself. No
            coding or Design experience necessary.
          </p>
        </div>
        <div className="flex flex-row cs:mt-0 mt-23px">
          <input
            type="text"
            id="first_name"
            className=" w-172px  font-SansProRegular text-ft13-16.34   h-12.5 pt-12.91px pb-3 pl-3.5 pr-89px cs:w-50 cs:h-12.5 cs:pt-15px cs:pr-109px cs:pb-3 font-normal  cs:text-ft16-20.11 cs:pl-17px bg-custom-landing-input-bg text-custom-landing-input rounded "
            placeholder="Full Name*"
            required
          />
          <input
            type="text"
            id="first_name"
            className="ml-13px w-172px   font-SansProRegular text-ft13-16.34  h-12.5 pt-13px pb-3 pl-3.5 pr-21px font-normal  cs:ml-4 cs:w-50 cs:h-12.5 cs:pt-15px  cs:text-ft16-20.11 cs:pr-71px cs:pb-3 cs:pl-17px bg-custom-landing-input-bg text-custom-landing-input rounded "
            placeholder="Company Email*"
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Company Website*"
            className="mt-13px  mr-4  
            text-ft13-16.34 pt-13px pb-3 pl-3.5 pr-245px font-SansProRegular w-358px  cs:mt-4 cs:w-104 cs:pt-15px cs:pr-67.5 cs:pb-3 cs:pl-17px   cs:text-ft16-20.11 bg-custom-landing-input-bg text-custom-landing-input  rounded  h-12.5  "
          />
        </div>
        <button className="bg-custom-landing-button text-custom-nav-button mt-4 w-358px cs:w-104 h-15  rounded">
          <div>
            <h1 className="text-ft17-24 cs:text-ft20-28.48 font-SansProSemiBold font-semibold pt-7px pl-129px pr-127px cs:pt-9px  cs:pr-149px cs:pl-149px">
              Put me in line
            </h1>
            <p className="text-ft12-15.08 cs:text-ft14-17.6 font-normal font-SansProRegular pl-32.5 pr-32.5 pb-2 cs:pb-9px cs:pr-40 cs:pl-40">
              No commitment
            </p>
          </div>
        </button>
        <p className="text-ft12-15.08 font-normal font-SansProRegular mt-2 text-custom-landing-input">
          *fields are mandatory
        </p>
      </div>
      <div className="relative mt-11.5 ml-auto  cs:ml-20.5 cs:mt-19   ">
        <img
          className=" absolute bottom-[-100px] left-[-70px]  md:top-[63px] md:left-[-200px] w-32.5 h-259px  md:w-358px md:h-684px"
          src={landinPhone}
          alt=""
        />

        <img
          src={LandingBackground2}
          className="  w-297px h-250px md:w-964px md:h-586.2px  mr-0"
          alt="   "
        />
      </div>
    </div>
  );
};

export default Main;
