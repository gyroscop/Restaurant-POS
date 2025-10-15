import React from "react";
import logo from "../../assets/images/logo.png";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">
      {/* LOGO */}
      <div className="flex items-center gap-2">
        <img src={logo} className="h-8 w-8" alt="logo" />
        <h1 className="text-lg font-semibold text-[#f5f5f5]">RestroPos</h1>
      </div>

      {/* SEARCH BAR */}
      <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-5 py-2 w-[500px]">
        <FaSearch className="text-[#f5f5f5]" />
        <input
          type="text"
          placeholder="search"
          className="bg-[#1f1f1f] outline-none text-[#f5f5f5]"
        />
      </div>

      {/*LOOGED User Details*/}

      <div className="flex items-center gap-3">
        <div className="rounded-[15px] cursor-pointer">
          <FaBell className="text-[#f5f5f5] text-3xl" />
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <FaUserCircle className="text-[#f5f5f5] text-3xl" />
          <div className="flex flex-col items-start">
            <h1 className="text-md text-[#f5f5f5] font-semibold">
              Dibya Sarmah
            </h1>
            <p className="text-xs text-[#ababab]">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
