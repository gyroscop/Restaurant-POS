import React from "react";
import { getRandomBG } from "../../utils";

const TableCard = ({ id, name, status, initials }) => {
  return (
    <div
      key={id}
      className="px-5 mb-3  hover:bg-[#454444ff] bg-[#383838] w-[300px] rounded-lg m-7 mx-4 cursor-pointer"
    >
      <div className="flex items-center justify-between  w-[100%] pt-4">
        <h1 className="text-[20px] text-[#f5f5f5] font-bold">{name} </h1>

        <p
          className={` ${
            status === "Available"
              ? "bg-[#027843] text-[#03fc94]"
              : "bg-[#8a5306ff] text-[#fa9f1fff]"
          }  rounded-lg p-1 px-2`}
        >
          {status}
        </p>
      </div>

      <div className="flex items-center justify-center p-8">
        <button
          className={`flex items-center justify-center ${
            getRandomBG() ? getRandomBG() : "bg-[#09b086ff]"
          }  p-5 text-3xl font-bold rounded-full`}
        >
          {initials}
        </button>
      </div>
    </div>
  );
};

export default TableCard;

// ${getRandomBG()}
