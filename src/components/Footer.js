import React from "react";
import FooterInsta from "../Assets/images/FooterInsta.png";
import FooterLogo from "../Assets/images/FooterLogo.png";
import FooterTikTok from "../Assets/images/FooterTikTok.png";
import FooterTwitter from "../Assets/images/FooterTwitter.png";
import FooterYoutube from "../Assets/images/FotterYoutube.png";
import FooterLinkedin from "../Assets/images/FooterLinkedin.png";
const Footer = () => {
  return (
    <div className="flex flex-col cs:flex-row  justify-between">
      <div className="flex flex-row  md:gap-165">
        <div className="flex flex-col cs:flex-row">
          <img
            className="cs:ml-82.5 ml-4   mt-5 w-185px h-33px"
            src={FooterLogo}
            alt=""
          />

          <p className=" font-SansProRegular text-ft14-17.6  ml-4 cs:ml-20.5 mt-7.5  text-gray-400">
            press@showroom.store
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-4 mt-6 ml-4 mr-342px mb-4.5">
        <img className="" src={FooterTwitter} alt="" />
        <img className="" src={FooterYoutube} alt="" />
        <img className="" src={FooterLinkedin} alt="" />
        <img className="" src={FooterTikTok} alt="" />
        <img className="" src={FooterInsta} alt="" />
      </div>
    </div>
  );
};

export default Footer;
