import React from "react";

const Discount = () => {
  return (
    <div className="bg-white">
      <div className="relative">
        <img
          className="w-full h-[500px]"
          src="https://img.freepik.com/premium-photo/empty-stone-surface-blurred-view-night-city_495423-30147.jpg?w=740"
          alt=""
        />
        <img
          className="absolute bottom-5"
          src="https://i.ibb.co/ck943n2/b1.png"
          alt="b1"
          border="0"
        />
        <h1 className="text-[5rem] absolute top-2 text-orange-400 font-bold left-28">
          Hot Burger!
        </h1>

        <img
          data-aos="zoom-in"
          className="absolute bottom-0 right-0"
          src="https://i.ibb.co/fqHSQ7z/discount.png"
          alt="discount"
          border="0"
        />
      </div>
    </div>
  );
};

export default Discount;
