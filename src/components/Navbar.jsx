import React from "react";
import Link from "next/link";
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
        <Link className=" hover:text-green-700" href="/add">
          Pricing
        </Link>
        <Link className=" hover:text-green-700" href="/">
          About
        </Link>
        <Link className=" hover:text-green-700" href="/">
          Contact
        </Link>
      </ul>
      <Link
        className="bg-pink-500 hover:bg-pink-800 px-3 py-1 rounded-lg text-white"
        href="/"
      >
        Login
      </Link>
    </div>
  );
};

export default Navbar;
