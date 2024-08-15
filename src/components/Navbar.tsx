import Link from "next/link";
import React from "react";
import { FaRegMoon } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-black flex   h-[10vh]">
      <div className="w-1/2 bg-black pr-[300px] text-3xl font-extrabold text-white   flex items-center justify-center">
        <Link href={"/"}>
          Node<span className="text-orange-500">Nest</span>
        </Link>
      </div>
      <div className="w-1/2 text-white flex gap-5 items-center justify-center">
        <button className="border rounded-md p-2  ">
          <FaRegMoon color="white" size={20} />
        </button>
        <button className=" bg-orange-500 rounded-md p-2.5 px-3 text-sm ">
          Sign Up
        </button>

        <button className="rounded-md p-2.5 px-3 text-sm  bg-gray-900 ">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
