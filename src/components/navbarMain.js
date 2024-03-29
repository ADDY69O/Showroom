import React from "react";
import headerLogo from "../images/headerLogo.png";
import { FaBars } from "react-icons/fa";
const navbar = () => {
  return (
    <nav className=" flex flex-row items-center justify-between cs:gap-13  ns:gap-68 cs:mr-82.5 cs:ml-82.5">
      {/* left  part contains the logo and text */}

      <div className="flex flex-row items-center mt-8 ml-4 cs:mt-7.5">
        <FaBars size={24} color="#333" className="cs:hidden" />
        <img className="w-185px h-33px" src={headerLogo} alt="" />
        <p1 className="hidden  font-SansProRegular   text-custom-landing-black cs:tracking-tighter ns:tracking-normal    ns:text-ft16-20.11 cs:ml-3 cs:mt-12.91px cs:block">
          COMING SOON
        </p1>
      </div>

      {/* right part of the navbar contains buttons */}

      <div className="flex flex-row  font-Source-Sans-3 font-semibold   mr-4    cs:gap-8 ">
        <a
          href="/"
          className=" hidden cs:block text-custom-landing-black font-SansProSemiBold font-semibold  mt-29px  pt-3.5 pb-3 text-ft15-21.36"
        >
          Pricing
        </a>

        <a
          className=" pt-9px pb-2 pr-2 pl-2 cs:w-155px  cs:pt-3.5 cs:pb-13px cs:pr-17px cs:pl-17px cs:ml-8 cs:mt-27px leading-5 text-center items-center mt-25px bg-custom-component-blue-above-button font-SansProSemiBold text-ft15-21.36 font-semibold text-custom-nav-button rounded-full "
          href=""
        >
          Get Early Access
        </a>
      </div>
    </nav>
  );
};

export default navbar;
