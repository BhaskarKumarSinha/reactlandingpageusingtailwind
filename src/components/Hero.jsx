import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center  h-[650px] md:h-[400px]">
      <div className="flex flex-col justify-center items-center md:flex-row  ">
        <div className="flex flex-col items-center md:items-start w-[70%] justify-center md:w-[50%] md:ml-32">
          <h1 className="text-xl font-extrabold text-[#444444] text-center md:text-6xl md:font-semibold md:text-left">
            Make Your Party With Delicious Dishes
          </h1>
          <p className="text-md text-[#444444] text-center font-normal mt-5 max-w-md md:text-left">
            We at Leisure Square Grub &amp; Wine would love to serve you yummy
            dishes straight from our kitchen ready for you.
          </p>
          <button className="  flex mt-5 items-center px-7 py-3  max-w-fit rounded-full text-black bg-yellow-400 hover:bg-black hover:text-white">
            <a href="https://leisuresquare.in/onlineorder/">Order Now</a>
          </button>
        </div>

        <div className="w-50%">
          <img
            className="rounded-md w-[70%] h-[90%] ml-20"
            src="https://leisuresquare.in/assets/img/home-three/banner1.jpg"
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
