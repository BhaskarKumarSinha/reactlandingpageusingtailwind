import React from "react";

const MenuPage = () => {
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
            <h1 className="text-white">Menu</h1>
            <div className="text-white">Home {">"} Menu</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          className="mt-10 h-[90%] w-[70%]"
          src="https://leisuresquare.in/assets/img/home-one/menu/menu1.jpg"
          alt="menu"
        />
        <img
          className="mt-10 h-[90%] w-[70%]"
          src="https://leisuresquare.in/assets/img/home-one/menu/menu2.jpg"
          alt="menu"
        />
      </div>
    </div>
  );
};

export default MenuPage;
