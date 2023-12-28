"use client";
import { useEffect, useState } from "react";

const PopularMenuCard = () => {
  const [burgers, setBurgers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/burgers")
      .then((res) => res.json())
      .then((data) => setBurgers(data));
  }, []);
  return (
    <div className="grid grid-cols-3 gap-5 mx-14 mt-14">
      {burgers.map((burger) => {
        const { url, _id, content, title, description, price } = burger;
        return (
          <div
            key={_id}
            className="col-span-1 bg-orange-50 rounded-xl flex flex-col  justify-center items-center px-10 gap-y-3 relative h-[450px]"
          >
            <img className="w-[300px] h-[200px] " src={url} alt="" />
            <p className="font-semibold">{title}</p>
            <p>{content}</p>
            <p>{price}</p>
            <button className="absolute bottom-1 font-bold">Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default PopularMenuCard;
