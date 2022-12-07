import React from "react";

const Footer = () => {
  return (
    <div className="flex h-[400px] pt-7 bg-black text-white rounded-t-3xl">
      <div className="mt-12 w-1/3">
        <img
          className="w-[60%] h-24 ml-9"
          src="https://leisuresquare.in/assets/img/logo2.png"
          alt="Logo"
        />
      </div>
      <div className="w-1/3">
        <h1 className="text-center font-bold text-3xl md:text-left">
          Quick Link
        </h1>
        <ul className="mt-10 ">
          <li className="text-center font-light text-xl md:text-xl p-2 hover:translate-x-2 hover:text-yellow-400 max-w-fit ease-in-out duration-500 ">
            {"> "} <a href="/home">Home</a>
          </li>
          <li className="text-center font-light text-xl md:text-xl  p-2 hover:translate-x-2 hover:text-yellow-400 max-w-fit ease-in-out duration-500 ">
            {"> "} <a href="/about">About Us</a>
          </li>
          <li className="text-center font-light text-xl md:text-xl  p-2  hover:translate-x-2 hover:text-yellow-400 max-w-fit ease-in-out duration-500 ">
            {"> "} <a href="https://leisuresquare.in/contact-us">Contact Us</a>
          </li>
          <li className="text-center font-light text-xl md:text-xl  p-2 hover:translate-x-2 hover:text-yellow-400 max-w-fit ease-in-out duration-500 ">
            {"> "} <a href="/menu">Menu</a>
          </li>
          <li className="text-center font-light text-xl md:text-xl  p-2 hover:translate-x-2 hover:text-yellow-400 max-w-fit ease-in-out duration-500 ">
            {"> "} <a href="/gallery">Gallery</a>
          </li>
        </ul>
      </div>
      <div className="w-1/3 ">
        <h1 className="text-center font-bold text-3xl md:text-left">
          Contact Us
        </h1>
        <ul className="mt-10">
          <li className="text-center font-light text-xl md:text-xl hover:translate-x-1 p-2  hover:text-yellow-400 max-w-fit ease-in-out duration-500  hover:border-yellow-600">
            {"> "} 1234567890
          </li>
          <li className="text-center font-light text-xl md:text-xl hover:translate-x-1 p-2  hover:text-yellow-400 max-w-fit ease-in-out duration-500  hover:border-yellow-600">
            {"> "}abc@gmail.com
          </li>
          <li className="text-center font-light text-xl md:text-xl hover:translate-x-1 p-2  hover:text-yellow-400 max-w-fit ease-in-out duration-500  hover:border-yellow-600">
            {"> "}Sir mvit bangalore yehalanka
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
