import React from "react";
import Button from "../components/Button";

const Footer = () => {
  return (
    <footer className=" text-white bg-black">
      <div className="flex justify-evenly items-center gap-12 p-8 min-h-[500px]">
        <div className="w-1/4 flex flex-col gap-8 items-center">
          <h1 className="text-4xl font-bold self-start">Logo</h1>
          <p className="text-sm font-extralight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quia
            deleniti necessitatibus provident porro quasi voluptatum molestias,
            pariatur animi quisquam!
          </p>
          <div className="self-start">
            <Button text="Donate" py={12} px={3} />
          </div>
        </div>
        <div className="footer-links  ">
          <ul className="flex flex-col gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Our Appraoch</li>
            <li>Our Impact</li>
            <li>Volunteering</li>
          </ul>
        </div>
        <div className="newsLetter w-1/4 flex flex-col gap-3">
          <h3 className="text-2xl font-semibold text-yellow-300">Subscribe</h3>
          <p className="text-sm font-extralight">
            Don’t miss to subscribe to our new feeds, kindly fill the form
            below.
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="border-b-[1px] border-gray-300 py-3 px-4 placeholder:text-slate-300 placeholder-opacity-20 bg-transparent"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="border-b-[1px] border-gray-300 py-3 px-4 placeholder:text-slate-300 placeholder-opacity-20 bg-transparent"
            />
            <Button text="Subscribe" py={8} px={3} />
          </form>
        </div>
      </div>
      <div>
        <p className="flex items-center justify-center text-sm font-extralight bg-neutral-950 h-[80px]">
          &copy; 2021 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
