import React from "react";
import Greetings from "../components/home/Greetings";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { BiSolidBowlHot } from "react-icons/bi";
import MiniCard from "../components/home/MiniCard";
import RecentOrders from "../components/home/RecentOrders";
import PopularDishes from "../components/home/PopularDishes";

const Home = () => {
  return (
    <>
      <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
        {/* Left Div */}
        <div className="flex-[3] bg-[#1a1a1a]">
          {/* Greetings */}

          <Greetings />

          {/* MiniCards */}
          <div className="flex justify-between px-8 gap-10">
            <MiniCard
              title="Total Earnings"
              icon={<RiMoneyRupeeCircleFill />}
              number={512}
              footerNum={1.2}
            />
            <MiniCard
              title="In Progress"
              icon={<BiSolidBowlHot />}
              number={14}
              footerNum={1.8}
            />
          </div>

          {/* Recent Orders */}
          <RecentOrders />
        </div>

        {/* Left Div */}
        <div className="flex-[2] bg-[#1a1a1a]">
          <PopularDishes />
        </div>
      </section>
    </>
  );
};

export default Home;
