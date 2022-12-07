import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prev) => !prev);
  };
  return (
    <div className="bg-black md:bg-white flex items-center max-w-[1240px] mx-auto justify-between ">
      <div className=" ml-38 mt-12 ">
        <img
          className="w-28 h-20"
          src="https://leisuresquare.in/assets/img/logo2.png"
          alt="Logo"
        />
      </div>
      <div className="hidden md:flex justify-between ml-48 mt-12">
        <h1 className="p-4 hover:text-yellow-800">
          <a href="/">Home</a>
        </h1>
        <h1 className="p-4 hover:text-yellow-800">
          <a href="/about">About Us</a>
        </h1>
        <h1 className="p-4 hover:text-yellow-800">
          <a href="/gallery">Gallery</a>
        </h1>
        <h1 className="p-4 hover:text-yellow-800">
          <a href="/menu">Menu</a>
        </h1>
        <h1 className="p-4 hover:text-yellow-800">
          <a href="https://leisuresquare.in/contact-us">Contact Us</a>
        </h1>
        <h1 className="p-4 hover:text-yellow-800">
          <a href="https://leisuresquare.in/onlineorder/">Order Now</a>
        </h1>
      </div>
      <div>
        <button className="hidden md:flex ml-44 mt-12 items-center px-7 py-3 rounded-full text-black bg-yellow-400 hover:bg-black hover:text-white">
          1234567890
        </button>
        {/* <h1 className="ml-48 mt-12">1234567890</h1> */}
      </div>
      <div onClick={handleNav} className=" block mt-4 md:hidden">
        {!nav ? (
          <AiOutlineClose size={30} className="text-white" />
        ) : (
          <AiOutlineMenu size={30} className="text-white" />
        )}
      </div>

      <div
        className={
          !nav
            ? "flex fixed  left-0 top-0 w-[60%] h-[60%] ease-in-out duration-500 md:hidden "
            : "fixed left-[-100%]"
        }
      >
        <div className="bg-black text-white">
          <img
            className="w-28 h-20 mt-12"
            src="https://leisuresquare.in/assets/img/logo2.png"
            alt="Logo"
          />
        </div>
        <div className="mt-28">
          <h1 className="p-4 border-b border-gray-600 hover:text-yellow-600">
            Home
          </h1>
          <h1 className="p-4 border-b border-gray-600 hover:text-yellow-600">
            About Us
          </h1>
          <h1 className="p-4 border-b border-gray-600 hover:text-yellow-600">
            Gallery
          </h1>
          <h1 className="p-4 border-b border-gray-600 hover:text-yellow-600">
            Menu
          </h1>
          <h1 className="p-4 border-b border-gray-600 hover:text-yellow-600">
            Contact Us
          </h1>
          <h1 className="p-4 border-b border-gray-600 hover:text-yellow-600">
            Order Now
          </h1>
        </div>
        <button className="ml-44 mt-12 flex items-center px-7 py-3 rounded-full text-black bg-yellow-400 hover:bg-black hover:text-white hidden">
          1234567890
        </button>
      </div>
    </div>
  );
};

export default Navbar;
