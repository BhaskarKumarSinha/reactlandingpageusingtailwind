import React from "react";

const Gallery = () => {
  return (
    <div className="flex items-center justify-center flex-col mb-8">
      <div>
        <h1 className="text-center font-bold text-3xl md:text-left">
          Our Gallery
        </h1>
      </div>
      <div className="flex items-center flex-wrap justify-center mt-7 mb-5">
        <img
          className="m-4 hover:-translate-y-4 ease-in-out duration-700 rounded-md"
          src="https://leisuresquare.in/assets/img/home-one/chef/1.jpg"
          alt="ff"
        />
        <img
          className="m-4 hover:-translate-y-4 ease-in-out duration-700 rounded-md"
          src="https://leisuresquare.in/assets/img/home-one/chef/2.jpg"
          alt="ff"
        />
        <img
          className="m-4 hover:-translate-y-4 ease-in-out duration-700 rounded-md"
          src="https://leisuresquare.in/assets/img/home-one/chef/3.jpg"
          alt="ff"
        />
        <img
          className="m-4 hover:-translate-y-4 ease-in-out duration-700 rounded-md"
          src="https://leisuresquare.in/assets/img/home-one/chef/4.jpg"
          alt="ff"
        />
      </div>
    </div>
  );
};

export default Gallery;
