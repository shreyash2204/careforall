import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full bg-white z-50">
      <div className="md:w-[80%] lg:w-[70%] h-[80px] mx-auto px-4 flex justify-between">
        <NavLink to="/">
          <img src="../assets/logo.png" alt="logo" className="h-[100px] " />
        </NavLink>
        <ul className="flex h-full items-center gap-8">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/donate">Donate</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
