import React from "react";
import FoodMenuCard from "../BestFoodMenu/FoodMenuCard";

const PopularItems = () => {
  return (
    <div>
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
    </div>
  );
};

export default PopularItems;
