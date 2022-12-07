import React from "react";

const GalleryPage = () => {
  return (
    <div>
      <div className="h-[300px] w-full relative">
        <img
          className="h-full w-full"
          src="https://leisuresquare.in/assets/img/contact-bg.jpg"
          alt="background"
        />
        <div className="absolute top-28 left-28 flex">
          <div className="w-2 h-16 bg-yellow-500 rounded-lg" />
          <div className="ml-10">
            <h1 className="text-white">Gallery</h1>
            <div className="text-white">Home {">"} Gallery</div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center mt-11">
        <img
          className="m-4 hover:-translate-y-4 ease-in-out duration-700 rounded-lg"
          src="https://leisuresquare.in/assets/img/home-one/feature1.jpg"
          alt="ff"
        />
        <img
          className="m-4 hover:-translate-y-4 ease-in-out duration-700 rounded-lg"
          src="https://leisuresquare.in/assets/img/home-one/feature2.jpg"
          alt="ff"
        />
        <img
          className="m-4 hover:-translate-y-4 ease-in-out duration-700 rounded-lg"
          src="https://leisuresquare.in/assets/img/home-one/feature3.jpg"
          alt="ff"
        />
        <img
          className="m-4 hover:-translate-y-4 ease-in-out duration-700 rounded-lg"
          src="https://leisuresquare.in/assets/img/home-one/feature4.jpg"
          alt="ff"
        />
        <img
          className="m-4 hover:-translate-y-4 ease-in-out duration-700 rounded-lg"
          src="https://leisuresquare.in/assets/img/home-one/feature5.jpg"
          alt="ff"
        />
        <img
          className="m-4 hover:-translate-y-4 ease-in-out duration-700 rounded-md"
          src="https://leisuresquare.in/assets/img/home-one/feature6.jpg"
          alt="ff"
        />
        <img
          className="m-4 hover:-translate-y-4 ease-in-out duration-700 rounded-md"
          src="https://leisuresquare.in/assets/img/home-one/feature7.jpg"
          alt="ff"
        />
        <img
          className="m-4 hover:-translate-y-4 ease-in-out duration-700 rounded-md"
          src="https://leisuresquare.in/assets/img/home-one/feature8.jpg"
          alt="ff"
        />
        <img
          className="m-4 hover:-translate-y-4 ease-in-out duration-700 rounded-md"
          src="https://leisuresquare.in/assets/img/home-one/feature9.jpg"
          alt="ff"
        />
        <img
          className="m-4 hover:-translate-y-4 ease-in-out duration-700 rounded-md"
          src="https://leisuresquare.in/assets/img/home-one/feature10.jpg"
          alt="ff"
        />
        <img
          className="m-4 hover:-translate-y-4 ease-in-out duration-700 rounded-lg"
          src="https://leisuresquare.in/assets/img/home-one/feature11.jpg"
          alt="ff"
        />
        <img
          className="m-4 hover:-translate-y-4 ease-in-out duration-700 rounded-lg"
          src="https://leisuresquare.in/assets/img/home-one/feature12.jpg"
          alt="ff"
        />
      </div>
    </div>
  );
};

export default GalleryPage;
