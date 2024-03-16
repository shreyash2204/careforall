import React from "react";
import DonateSection from "../containers/DonateSection";
import Hero from "../containers/Hero";
import Stats from "../containers/Stats";
import SlideShow from "../components/SlideShow";

const DonationPage = () => {
  return (
    <div>
      <Hero />
      <DonateSection />
      <Stats />
      <SlideShow />
    </div>
  );
};

export default DonationPage;
