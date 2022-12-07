import React from "react";

const BestSeller = () => {
  return (
    <div className="mt-5 text-[#444444]">
      <h1 className="text-center font-bold text-3xl md:text-5xl ">
        Our BestSeller Items
      </h1>
      <div className="flex flex-col mb-11">
        <div className="flex flex-wrap items-center justify-center">
          <div className="shadow-md w-56 px-12 py-7 m-5">Chilly Chicken</div>
          <div className="shadow-md w-56 px-12 py-7 m-5">Veg Nuggets</div>
          <div className="shadow-md w-56 px-12 py-7 m-5">Cheese Omelets</div>
          <div className="shadow-md w-56 px-12 py-7 m-5">Paneer Popcorn</div>
        </div>

        <div className="flex flex-wrap items-center justify-center">
          <div className="shadow-md w-56 px-12 py-7 m-5">Egg Burger</div>
          <div className="shadow-md w-56 px-12 py-7 m-5">Pesto Passta</div>
          <div className="shadow-md w-56 px-12 py-7 m-5">Chicken Stick</div>
          <div className="shadow-md w-56 px-12 py-7 m-5">Peach Mozito</div>
        </div>
        <div className="flex justify-center items-center">
          <h2 className="text-center font-bold text-xl md:text-xl border-b-2 hover:text-yellow-400 max-w-fit ease-in-out duration-500 hover:border-b-2 hover:border-yellow-600">
            Order Online Now
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
