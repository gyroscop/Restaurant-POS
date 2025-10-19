import React, { useState } from "react";
import OrderCard from "../components/orders/OrderCard";

const Orders = () => {
  const [status, setStatus] = useState("all");
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex justify-between items-center px-7 py-3">
        <h1 className="text-[#f5f5f5] text-3xl font-bold">Orders</h1>
        <div className="text-[#ababab] text-lg flex justify-around gap-5 ">
          <button
            onClick={() => setStatus("all")}
            className={`rounded-lg px-5 py-2 ${
              status === "all" && "bg-[#383838]"
            }  cursor-pointer`}
          >
            All
          </button>
          <button
            onClick={() => setStatus("inprogress")}
            className={`rounded-lg px-5 py-2 ${
              status === "inprogress" && "bg-[#383838]"
            }  cursor-pointer`}
          >
            InProgress
          </button>
          <button
            onClick={() => setStatus("ready")}
            className={`rounded-lg px-5 py-2 ${
              status === "ready" && "bg-[#383838]"
            }  cursor-pointer`}
          >
            Ready
          </button>
          <button
            onClick={() => setStatus("completed")}
            className={`rounded-lg px-5 py-2 ${
              status === "completed" && "bg-[#383838]"
            }  cursor-pointer`}
          >
            Completed
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 overflow-y-scroll scrollbar-hide h-[calc(100vh-15rem)] ">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </section>
  );
};

export default Orders;
