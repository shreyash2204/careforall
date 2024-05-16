import React from "react";
import Carousle from "../components/Carousle";
import items from "../data.js";
import childBanner from "../assets/children-wide-banner.jpg";
import Button from "../components/Button.jsx";

const HelpChildSection = () => {
  return (
    <div>
      <div className="w-full flex flex-col items-center gap-12 p-4 sm:p-12">
        <h2 className="text-4xl font-semibold leading-tight tracking-wider">
          How do you want to <br />
          <span className="gloria-font text-yellow-400">
            help children
          </span>{" "}
          today?
        </h2>
        <p className="text-lg font-medium text-gray-600 text-center">
          Your smallest contribution makes a big difference to children’s lives.{" "}
          <br />
          We count on the generosity of people like you to be able to create
          real change for India’s children!
        </p>
        {/* <button className="bg-yellow-400 px-16 py-4 rounded-full font-medium text-gray-800">
          Donate for Happier Childhoods!
        </button> */}
        <Button py={4} px={3} text={"Donate for Happier Childhoods!"} />
      </div>
      <Carousle items={items} />
      <div>
        <img src={childBanner} alt="childBanner" className="w-full" />
      </div>
    </div>
  );
};

export default HelpChildSection;
