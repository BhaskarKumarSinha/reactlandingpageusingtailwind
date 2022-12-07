import React from "react";

const Allabout = () => {
  return (
    <div className="bg-black flex flex-col md:flex-row w-[100%] h-[600px] md:h-[300px] items-center justify-center">
      <div>
        <p className="text-white text-center mt-14 md:max-w-md md:text-left">
          We believe passionately in great bargains and excellent service, which
          is why we commit ourselves to giving you the best of both. If you’re
          looking for something new, you’re in the right place. We strive to be
          industrious and innovative, offering our customers something they
          want, putting their desires at the top of our priority list.
        </p>
      </div>
      <div className="flex items-center justify-center mt-16 h-[50%] md:max-w-lg md:ml-[15%] md:mr-[5%] md:h-3/4">
        <img
          className="rounded-3xl h-auto md:h-full"
          src="https://leisuresquare.in/assets/img/home-two/review3.png"
          alt="allabout"
        />
      </div>
    </div>
  );
};

export default Allabout;
