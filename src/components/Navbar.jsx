import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-6 py-4 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="" />
        <ul className="hidden md:flex gap-7 text-white ">
          <a
            href="#home"
            className="cursor-pointer hover:text-gray-400 text-4xl"
          >
            Home
          </a>
          <a
            href="#about"
            className="cursor-pointer hover:text-gray-400 text-4xl"
          >
            About
          </a>
          <a
            href="courses"
            className="cursor-pointer hover:text-gray-400 text-4xl"
          >
            Courses
          </a>
        </ul>
        <div className="hidden md:flex gap-4">
          <button className="hidden md:block bg-blue-500 text-white px-8 py-2 rounded-full text-xl w-50 h-13">
            Login
          </button>
          <button className="hidden md:block bg-blue-500 text-white px-8 py-2 rounded-full text-xl w-50 h-13">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
