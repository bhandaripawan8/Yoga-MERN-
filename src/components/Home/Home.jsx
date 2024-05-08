import React from "react";
import AboutUs from "../AboutMe/AboutUs";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import WhyChoose from "../whyChoose/WhyChoose";
import Sessions from "../Sessions/Sessions";
import OurValues from '../AboutMe/Values'
import Faq from "../FAQ/Faq";
import WhatToExpectData from '../WhatToExpect/WhatToExpectData'
const Home = () => {
  return (
    <>
      <Hero />
      <Sessions />
      <AboutUs />
      <WhyChoose />
      <OurValues/>
      <WhatToExpectData/>
      <Faq />
      <Contact />
    </>
  );
};

export default Home;
