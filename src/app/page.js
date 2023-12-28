"use client";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import MainBanner from "@/components/Home/MainBanner";
import Discount from "@/components/Home/Discount";
import DownloadApp from "@/components/Home/DownloadApp";
import PopularMenuCard from "@/components/Home/PopularMenuCard";
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
      <MainBanner />
      <div className="mt-14">
        <h1 className="text-center text-pink-700 ">Best Food Menu</h1>
        <h1 className="text-center text-3xl font-semibold text-slate-900">
          Our Popular Food Items
        </h1>
        <PopularMenuCard />
      </div>
      <div className="flex mx-14 items-start justify-center mt-28">
        <div className="w-1/2">
          <p className="text-4xl font-bold mt-10">
            Savory Stack Deluxe{" "}
            <span className="text-pink-500">
              Elevate Your Burger Experience!
            </span>{" "}
          </p>
          <p className="text-justify mt-5 text-md">
            Crisp and vibrant, our fresh lettuce provides a refreshing contrast,
            adding a burst of coolness to Sliced tomatoes contribute a juicy and
            slightly tangy element, enhancing the overall freshness of the
            burger.Our carefully crafted special sauce is the secret ingredient
            that ties everything together. Its unique blend of spices and
            flavors adds a tantalizing kick, making the Savory Stack Deluxe
            truly exceptional.
          </p>
          <button className="bg-black text-white flex items-center gap-3 px-4 py-1 rounded-lg mt-5">
            Explore
            <FaArrowRight />
          </button>
        </div>
        <div className="w-1/2 pl-16 pb-4">
          <img src="https://i.ibb.co/sJYv2cx/b2.png" alt="b2" border="0" />
        </div>
      </div>

      <Discount />
      <DownloadApp />
    </>
  );
}
