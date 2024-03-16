import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/Home";
import Footer from "./containers/Footer";
import DonationPage from "./pages/DonationPage";

function App() {
  return (
    <>
      <div className="">
        <Home />
        {/* <DonationPage /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
