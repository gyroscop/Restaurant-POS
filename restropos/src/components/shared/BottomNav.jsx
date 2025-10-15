import React from "react";
import { FaHome } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { PiChairFill } from "react-icons/pi";
import { LuTableOfContents } from "react-icons/lu";
import { GiKnifeFork } from "react-icons/gi";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 flex justify-evenly items-center">
      <button className="flex flex-col items-center cursor-pointer text-[#f5f5f5] bg-[#343434] rounded-[25px] w-[300px]">
        {/* <FaHome className="text-[#ababab]" size={31} /> */}
        <FaHome size={31} />
        <p className="text-[#ababab]">Home</p>
      </button>
      <button className="flex flex-col items-center cursor-pointer">
        <FaShoppingCart className="text-[#ababab]" size={30} />
        <p className="text-[#ababab]">Orders</p>
      </button>
      <button className="flex flex-col items-center cursor-pointer -translate-y-5 bg-blue-600 rounded-full p-4">
        <GiKnifeFork className="text-[#ababab]" size={30} />
        <p className="text-[#ababab]">New Order</p>
      </button>
      <button className="flex flex-col items-center cursor-pointer">
        <PiChairFill className="text-[#ababab]" size={33} />
        <p className="text-[#ababab]">Tables</p>
      </button>
      <button className="flex flex-col items-center cursor-pointer">
        <LuTableOfContents className="text-[#ababab]" size={32} />
        <p className="text-[#ababab]">More</p>
      </button>
    </div>
  );
};

export default BottomNav;
