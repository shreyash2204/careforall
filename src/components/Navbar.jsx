import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full bg-white z-50">
      <div className="md:w-[80%] lg:w-[70%] h-[80px] mx-auto px-4 flex justify-between">
        <div>
          <img src="/src/assets/logo.png" alt="logo" className="h-[100px] " />
        </div>
        <ul className="flex h-full items-center gap-8">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/donate">Donate</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
