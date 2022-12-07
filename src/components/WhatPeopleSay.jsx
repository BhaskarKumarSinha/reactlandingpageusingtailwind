import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const WhatPeopleSay = () => {
  return (
    <div className="h-[420px] bg-black text-white flex flex-col justify-center items-center mt-10 md:flex-row">
      <div className=" h-full w-[50%] flex justify-center items-center">
        <img
          className=" ml-18 h-[90%] w-[70%] rounded-2xl"
          src="https://leisuresquare.in/assets/img/home-two/review1.jpg"
          alt="peopleSay"
        />
      </div>
      <div className="w-[50%] flex justify-center flex-col items-center h-[300px]">
        <h2 className="text-center mt-4 font-bold text-3xl md:text-3xl hover:text-yellow-400 max-w-fit ease-in-out duration-500 ">
          What People Say
        </h2>
        <div>
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={true}
            showIndicators={false}
          >
            <div>
              <h1 className=" font-bold text-3xl md:text-3xl mt-20">
                Dhanush Gawda
              </h1>
              <p className="text-white">
                One of the wonderful place in south banglore Ambiance is awsome
                food is excellent
              </p>
            </div>
            <div>
              <h1 className=" font-bold text-3xl md:text-3xl mt-20">
                Dhanush Gawda
              </h1>
              <p className="text-white  ">
                Amazing place to hangout with friends Peaceful ambience , just
                love the way how friendly the workers are 🤗 Must try - babycorn
                pepper dry , creamy panner and kiwi mint 💯
              </p>
            </div>
            <div>
              <h1 className=" font-bold text-3xl md:text-3xl mt-20">
                Hilesh BS
              </h1>
              <p className="text-white">
                Amazing ambiance with Great taste of food comes all with a
                affordable prices. Go for it !! 3
              </p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default WhatPeopleSay;
