import React from "react";
import Carousle from "../components/Carousle";
import Hero from "../containers/Hero";
import HelpChildSection from "../containers/HelpChildSection";
import Stats from "../containers/Stats";
import WhatWeDo from "../containers/WhatWeDo";
import StoreisAndUpdate from "../containers/StoriesAndUpdate";
import DonationForm from "../containers/DonationForm";

const Home = () => {
  return (
    <div>
      <Hero />
      <HelpChildSection />
      <WhatWeDo />
      <Stats />
      <StoreisAndUpdate />
      {/* <DonationForm /> */}
    </div>
  );
};

export default Home;
