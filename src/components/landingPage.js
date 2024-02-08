import React from "react";
import AboveFotter from "./aboveFotter";
import Body from "./body";
import Footer from "./footer";
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
