import React from "react";
import { Dishes } from "../../constants/pos_system_constants";

const PopularDishes = () => {
  return (
    <div className="bg-[#545755] rounded-lg w-full  px-5 py-4">
      <div className="flex justify-between">
        <div className="text-[#f5f5f5] text-2xl font-bold">Recent Orders</div>
        <div className="text-md text-[#f5f5f5] font-semibold underline underline-offset-4">
          <a className="cursor-pointer">View All</a>
        </div>
      </div>
      <div className="overflow-y-scroll scrollbar-hide h-[725px]">
        {Dishes.map((dish) => {
          return (
            <div
              key={dish.id}
              className="flex bg-[#1f1f1f] mt-2 rounded-lg p-3 justify-between"
            >
              <div className="flex items-center">
                <h1 className="text-[#f5f5f5] text-xl font-bold ml-3 mr-4">
                  {dish.id < 10 ? `0${dish.id}` : dish.id}
                </h1>
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-[50px] h-[50px] rounded-full"
                />

                <div className="flex flex-col items-left ml-3">
                  <div className="text-[#f5f5f5] text-2xl">{dish.name}</div>
                  <div className="text-[#a1a1a1]">{dish.numberOfOrders}</div>
                </div>
              </div>

              <div className="flex items-center text-[#f5f5f5]">
                <a href="/">Ingredients</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularDishes;
