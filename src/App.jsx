import { useState } from "react";
import Home from "./pages/Home";
import Footer from "./containers/Footer";
import DonationPage from "./pages/DonationPage";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/donate" element={<DonationPage />}  />
        </Routes>
        {/* <Home /> */}
        {/* <DonationPage /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
