import React from "react";
import { FaHome } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { PiChairFill } from "react-icons/pi";
import { LuTableOfContents } from "react-icons/lu";
import { GiKnifeFork } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 flex justify-around items-center text-[#ababab]">
      <button
        onClick={() => navigate("/")}
        className="flex flex-col items-center cursor-pointer text-[#f5f5f5]"
      >
        <FaHome size={31} />
        <p>Home</p>
      </button>
      <button
        onClick={() => navigate("./orders")}
        className="flex flex-col items-center cursor-pointer"
      >
        <FaShoppingCart size={30} />
        <p>Orders</p>
      </button>
      <button className="flex flex-col items-center cursor-pointer -translate-y-5 bg-[#f6b100] text-[#f5f5f5] rounded-full p-4 font-bold">
        <GiKnifeFork size={30} />
        <p>New Order</p>
      </button>
      <button className="flex flex-col items-center cursor-pointer">
        <PiChairFill size={33} />
        <p>Tables</p>
      </button>
      <button className="flex flex-col items-center cursor-pointer">
        <LuTableOfContents size={32} />
        <p>More</p>
      </button>
    </div>
  );
};

export default BottomNav;
