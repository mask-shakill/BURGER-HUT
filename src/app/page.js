"use client";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import MainBanner from "@/components/Home/MainBanner";
import PopularItems from "@/components/Home/PopularItems";
import Discount from "@/components/Home/Discount";
import DownloadApp from "@/components/Home/DownloadApp";
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
      <PopularItems />
      <div className="flex mx-14 items-start justify-center">
        <div className="w-1/2" data-aos="fade-up-right">
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
        <div data-aos="fade-left" className="w-1/2 pl-16 pb-4">
          <img src="https://i.ibb.co/sJYv2cx/b2.png" alt="b2" border="0" />
        </div>
      </div>

      <Discount />
      <DownloadApp />
    </>
  );
}
