import React, { useState } from "react";
import TableCard from "../components/Tables/TableCard";
import { tables } from "../constants/pos_system_constants";

const Table = () => {
  const [status, setStatus] = useState("all");
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex justify-between items-center px-7 py-3">
        <h1 className="text-[#f5f5f5] text-3xl font-bold">Tables</h1>
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
            Booked
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 overflow-y-scroll scrollbar-hide h-[calc(100vh-15rem)]">
        {tables.map((table) => {
          return (
            <TableCard
              id={table.id}
              name={table.name}
              status={table.status}
              initials={table.initial}
            />
          );
        })}
      </div>
      {/* <TableCard key="1" name="Table 1" status="Booked" initials="DJ" />; */}
    </section>
  );
};

export default Table;
