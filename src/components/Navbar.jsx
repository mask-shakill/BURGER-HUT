import React from "react";
import Link from "next/link";
import { BsBucket } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="flex justify-around items-center p-5 shadow-lg border bg-slate-200 sticky top-0 z-10">
      <Link className="text-xl text-rose-950 font-semibold" href={"/"}>
        BurgerHut
      </Link>
      <ul className="flex gap-x-7 font-semibold">
        <Link className=" hover:text-green-700" href="/">
          Home
        </Link>
        <Link className=" hover:text-green-700" href="/pricing">
          Pricing
        </Link>
        <Link className=" hover:text-green-700" href="/">
          About
        </Link>
        <Link className="  hover:text-green-700" href="/">
          Contact
        </Link>
      </ul>
      <Link
        className="text-2xl font-bold text-pink-700 flex items-center gap-x-2"
        href="/"
      >
        Cart <BsBucket /> <span>2</span>
      </Link>
    </div>
  );
};

export default Navbar;
