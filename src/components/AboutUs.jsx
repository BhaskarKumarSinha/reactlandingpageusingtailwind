import React from "react";

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[720px] md:h-[550px] md:flex-row md:w-3/4 md:ml-32">
      <div className="flex items-center justify-center h-2/4  w-5/6 md:w-2/4">
        <img
          className="rounded-3xl h-auto md:h-full  "
          src="	https://leisuresquare.in/assets/img/home-three/about1.jpg"
          alt="aboutusimage"
        />
      </div>
      <div className="flex  item-center justify-center flex-col w-2/4 md:ml-14 md:text-left">
        <h1 className="text-center font-bold text-3xl md:text-left">
          About Us
        </h1>
        <p className="text-center font-light text-md md:text-left md:mt-8 ">
          We at Leisure Square Grub & Wine would love to serve you yummy dishes
          straight from our kitchen ready for you. We will fulfil you hunger
          needs and ensure that we leave you licking your fingers and asking for
          more yummy dishes!
        </p>
        <button className=" md:flex  mb-6 items-center mt-10 px-7 py-3 rounded-full text-black bg-yellow-400 hover:bg-black hover:text-white max-w-fit text-center">
          {/* <a href=""></a> */}
          Know More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
