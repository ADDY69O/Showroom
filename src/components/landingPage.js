import React from "react";
import AboveFotter from "./aboveFotters.js";
import Body from "./bodyMain.js";
import Footer from "./footerMain.js";
import Main from "./mainHome.js";

const landingPage = () => {
  return (
    <div className=" ">
      <Main />
      <Body />
      <AboveFotter />
      <Footer />
    </div>
  );
};

export default landingPage;
