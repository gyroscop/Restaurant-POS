import React from "react";

const MiniCard = ({ title, icon, number, footerNum }) => {
  return (
    <div className="bg-[#545755] mt-15 rounded-lg w-[50%] px-4 py-3">
      <div className="flex justify-between">
        <h1 className="text-[#f5f5f5] text-3xl"> {title} </h1>
        <button
          className={`text-[#f5f5f5] text-4xl rounded-lg p-3 ${
            title === "Total Earnings" ? "bg-[#02ca3a]" : "bg-[#f6b100]"
          }`}
        >
          {icon}
        </button>
      </div>

      <div className="mt-8">
        <h1 className="text-[#f5f5f5] text-4xl font-bold"> {number} </h1>
        <h1 className="text-[#f5f5f5] text-lg">
          <span className="text-[#02ca3a]">{footerNum}%</span> than yesterday
        </h1>
      </div>
    </div>
  );
};

export default MiniCard;
