import React from "react";

const FoodMenuCard = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-zinc-50  border rounded-lg shadow-sm col-span-1 py-3 mt-10">
        <img
          className="w-3/5 rounded-full"
          src="https://img.freepik.com/premium-photo/double-burger-sandwich-filled-with-melted-yellow-cheddar-cheese-isolated_876101-9.jpg?size=626&ext=jpg&ga=GA1.1.945868740.1697346172&semt=sph"
          alt=""
        />
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
