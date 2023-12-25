"use client";
import { FaArrowRight } from "react-icons/fa";
import FoodMenuCard from "@/components/BestFoodMenu/FoodMenuCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <>
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

      {/* best Popular food items  */}
      <div className=" bg-white py-24">
        <h1 className="text-center font-semibold text-pink-500">
          Best Food Menu
        </h1>
        <h1 className="text-center font-bold  text-4xl">
          Our Popular Food Items
        </h1>
        <div className="grid gap-4 grid-cols-4 mx-16">
          <FoodMenuCard />
          <FoodMenuCard />
          <FoodMenuCard />
          <FoodMenuCard />
        </div>
      </div>

      {/* burger special  */}
      <div className="flex items-center justify-center mx-16">
        <div className=" w-1/2 mt-5">
          <img
            className=" w-1/2 "
            src="https://img.freepik.com/free-vector/boy-eating-fast-food-white-background_1308-100324.jpg?w=360&t=st=1703504401~exp=1703505001~hmac=0cc71ce0cf5975d496a643cc10d8d3763b6e12a30dc4dfd7848242d459d376a9"
          ></img>
        </div>
        <div className="w-1/2 ">
          <h1 className="text-4xl font-bold text-justify text-slate-700">
            Explore our diverse menu that caters to every palate.<br></br>
            <span className="text-yellow-700">
              Sink your teeth into our signature BurgerHut
            </span>
          </h1>
          <button className="bg-pink-500 px-5 flex mt-5 items-center gap-x-2 py-1 text-white rounded-md">
            Explore
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* discount */}

      <div className="relative">
        <img
          className="w-full h-[600px] relative"
          src="https://img.freepik.com/premium-photo/front-view-delicious-cheeseburger-with-meat-tomatoes-green-salad-dark-background-sandwich-fast-food-meal-snack-french-fries-dinner-dish_140725-156244.jpg?w=740"
        ></img>
        <h1
          data-aos="fade-down-left"
          className="  absolute left-20 mt-2 text-orange-600 top-0  text-[15rem] font-extrabold"
        >
          30%
        </h1>
        <h1
          data-aos="flip-left"
          className="  absolute left-20 text-yellow-600 top-9 mt-40  text-[15rem] font-extrabold"
        >
          Off
        </h1>
      </div>

      <div className="mt-24">
        <h1 className="text-center font-semibold text-pink-500">
          Expert Chefs
        </h1>
        <h1 className="text-center font-bold  text-4xl">
          Our Popular Food Items
        </h1>
        <div data-aos="zoom-in" className="grid grid-cols-4 gap-5 mt-14 mx-10">
          <div className="col-span-1">
            <img
              className="w-[300px] h-[350px] border rounded-lg"
              src="https://img.freepik.com/free-photo/chef-with-thumb-up-white-background_1368-2842.jpg?size=626&ext=jpg&ga=GA1.1.945868740.1697346172&semt=sph"
            ></img>
          </div>
          <div className="col-span-1">
            <img
              className="w-[300px] h-[350px] border rounded-lg"
              src="https://img.freepik.com/premium-photo/chefs-choice-confident-mature-chef-white-uniform-looking-out-copy-space-smiling-while-standing-against-white-background_425904-16769.jpg?w=360"
            ></img>
          </div>
          <div className="col-span-1">
            <img
              className="w-[300px] h-[350px] border rounded-lg"
              src="https://img.freepik.com/premium-photo/chef_103577-3675.jpg?w=360"
            ></img>
          </div>
          <div className="col-span-1">
            <img
              className="w-[300px] h-[350px] border rounded-lg"
              src="https://img.freepik.com/premium-photo/hes-ultimate-portrait-african-american-chef_590464-33906.jpg?size=626&ext=jpg&ga=GA1.1.945868740.1697346172&semt=sph"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
