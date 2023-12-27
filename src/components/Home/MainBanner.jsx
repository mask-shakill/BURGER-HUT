import React from "react";

const MainBanner = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-auto relative "
          src="https://img.freepik.com/premium-photo/two-burgers-french-fries-juice-black-background_166116-5485.jpg?w=996"
          alt="Burger"
        />
        <h1
          data-aos="fade-up-left"
          className="absolute top-44 left-24
         text-white text-4xl font-semibold"
        >
          Savor the Extraordinary Unleash <br></br>
          <span className="text-green-400 ">
            Flavor with Our Irresistible <br></br>{" "}
            <span className="text-pink-500">Burger Creations!</span>
          </span>
        </h1>
        <button
          data-aos="fade-up-right"
          className="absolute top-72 mt-11 px-5 py-2 rounded-lg font-semibold hover:bg-green-400 left-24 bg-white"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default MainBanner;
