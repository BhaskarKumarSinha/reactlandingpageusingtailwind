import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const AboutUsPages = () => {
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
            <h1 className="text-white">About Us</h1>
            <div className="text-white">Home {">"} AboutUS</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-24">
        <h1 className="text-center font-bold text-3xl md:text-left text-[#444444]">
          About Our Story
        </h1>
        <p className="text-center mt-10 max-w-[900px] text-[#444444] font-light">
          We at Leisure Square Grub & Wine would love to serve you yummy dishes
          straight from our kitchen ready for you. We will fulfil you hunger
          needs and ensure that we leave you licking your fingers and asking for
          more yummy dishes! <br /> We believe passionately in great bargains
          and excellent service, which is why we commit ourselves to giving you
          the best of both. If you’re looking for something new, you’re in the
          right place. We strive to be industrious and innovative, offering our
          customers something they want, putting their desires at the top of our
          priority list. So hurry! Order now!
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center mt-16">
        <img
          className="m-4 hover:-translate-y-4 ease-in-out duration-700 rounded-md"
          src="https://leisuresquare.in/assets/img/about/story1.jpg"
          alt="ff"
        />
        <img
          className="m-4 hover:-translate-y-4 ease-in-out duration-700 rounded-md"
          src="https://leisuresquare.in/assets/img/about/story2.jpg"
          alt="ff"
        />
      </div>
      {/* <div>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showIndicators={false}
          className="h-[100px] w-[40px]"
        >
          <div className="relative">
            <img
              src="https://leisuresquare.in/assets/img/home-one/service-shape.png"
              alt="hh"
            />
            <p className="absolute top-1/2">Fresh Food</p>
          </div>
          <div className="relative">
            <img
              src="https://leisuresquare.in/assets/img/home-one/service-shape.png"
              alt="hh"
            />
            <p className="absolute top-1/2"> Fast Home Dilevery</p>
          </div>
          <div className="relative">
            <img
              src="https://leisuresquare.in/assets/img/home-one/service-shape.png"
              alt="hh"
            />
            <p className="absolute top-1/2">Freshly Prepared</p>
          </div>
          <div className="relative">
            <img
              src="https://leisuresquare.in/assets/img/home-one/service-shape.png"
              alt="hh"
            />
            <p className="absolute top-1/2">Fresh Healthy Food</p>
          </div>
        </Carousel>
      </div> */}
    </div>
  );
};

export default AboutUsPages;
