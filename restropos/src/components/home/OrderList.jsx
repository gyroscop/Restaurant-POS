import React from "react";
import { FaCheck } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const OrderList = () => {
  return (
    <div className="flex justify-center gap-5 px-4 mb-2">
      <button className="bg-[#f6b100] text-xl p-3.5 font-bold rounded-lg">
        DJ
      </button>
      <div className="flex justify-between w-[100%]">
        <div className="flex flex-col justify-between">
          <h1 className="text-[20px] text-[#f5f5f5]">Dibya Sarmah</h1>
          <p className="text-[#f5f5f5]">5 Items</p>
        </div>

        <div>
          <p className="text-[#f6b100] font-semibold rounded-lg border border-[#f6b100] p-2 mt-2">
            Table 3
          </p>
        </div>

        <div className="flex flex-col justify-between">
          <p className="text-[#f5f5f5]">
            <FaCheck className="text-[#02ca3a] inline mr-2" /> Ready
          </p>
          <p className="text-[#f5f5f5]">
            <GoDotFill className="text-[#02ca3a] inline mr-2" /> Ready to Serve
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
