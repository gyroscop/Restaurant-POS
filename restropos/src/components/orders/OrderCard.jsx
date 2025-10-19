import React from "react";
import { FaCheck } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const OrderCard = () => {
  return (
    <div className="p-5 m-5 bg-[#383838] w-[400px] rounded-lg">
      <div className="flex justify-between items-center ">
        <div className="flex justify-between gap-3">
          <button className="bg-[#f6b100] text-xl p-3.5 font-bold rounded-lg cursor-pointer">
            DJ
          </button>
          <div className="flex justify-between gap-8">
            <div className="flex flex-col">
              <h1 className="text-[20px] text-[#f5f5f5]">Dibya Sarmah</h1>
              <p className="text-[#a1a1a1]">#101/Dine in</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-[15px]">
          <p className="text-[#f5f5f5]">
            <FaCheck className="text-[#02ca3a] inline" /> Ready
          </p>
          <p className="text-[#f5f5f5]">
            <GoDotFill className="text-[#02ca3a] inline" /> Ready to Serve
          </p>
        </div>
      </div>

      <div className="flex justify-between mt-3 text-[#a1a1a1] items-center">
        <p>October-18 , 2025 06:29 PM</p>
        <p>8 Items</p>
      </div>

      <hr className="w-full mt-3 mb-2 border-grey-500 border-t-1" />

      <div className="flex justify-between text-[#f5f5f5] text-xl items-center">
        <h1 className="font-bold">Total</h1>
        <p>₹ 250</p>
      </div>
    </div>
  );
};

export default OrderCard;
