import React from "react";
import { FaSearch } from "react-icons/fa";
import OrderList from "./OrderList";

const RecentOrders = () => {
  return (
    <div className="px-8 mt-5">
      <div className="bg-[#545755] rounded-lg w-full h-[450px] px-5 py-4">
        <div className="flex justify-between">
          <div className="text-[#f5f5f5] text-2xl font-bold">Recent Orders</div>
          <div className="text-md text-[#f5f5f5] font-semibold underline underline-offset-4">
            View All
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="flex items-center gap-4 bg-[#1f1f1f] px-5 py-2 w-full mt-3 bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-blue-500">
          <FaSearch className="text-[#f5f5f5]" />
          <input
            type="text"
            placeholder="Search recent orders"
            className="outline-none text-[#ababab]"
          />
        </div>
        {/* Order List */}
        <div className="mt-5 overflow-y-scroll h-[300px] scrollbar-hide">
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
