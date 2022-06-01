import React, { useState } from "react";
import {
  Sidebar,
  Navbar,
  HeroSection,
  InfoSection,
  Services,
  Projects,
  Footer,
} from "../components";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggleBar} />
      <Navbar toggle={toggleBar} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <Projects />
      <Footer />
    </>
  );
};
