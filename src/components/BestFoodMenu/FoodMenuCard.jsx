import React from "react";

const FoodMenuCard = () => {
  return (
    <>
      <div className="transform transition-transform ease-in-out delay-150 hover:scale-105      flex flex-col items-center justify-center bg-zinc-200 border border-orange-200 rounded-lg shadow-sm col-span-1 py-3 mt-10">
  <img
    className="w-3/5 rounded-full transform transition-transform ease-in-out delay-150 hover:scale-105"
    src="https://i.ibb.co/Sfqg8GP/burger-1.png"
    alt="burger-1"
    border="0"
  ></img>
  <div className="flex flex-col items-center gap-y-1">
    <h1 className="font-semibold">Burger name</h1>
    <p>Burger content</p>
    <p className="text-rose-900">23$</p>
  </div>
  <button className="bg-pink-500 text-white px-4 py-1 mt-2 mb-2 rounded-md">
    Add to cart
  </button>
</div>

    </>
  );
};

export default FoodMenuCard;
