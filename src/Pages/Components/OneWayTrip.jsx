import React, { useState } from "react";
import { tripData } from "../../Data/tripData";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import { BiCaretUp } from "react-icons/bi";
import Trip from "./Trip";

const OneWayTrip = () => {
  const [active, setActive] = useState("cheapest");
  const handleActive = (option) => {
    setActive(option);
  };
  return (
    <div className="w-full h-full 2xl:flex 2xl:flex-col gap-5">
      <div className="2xl:flex 2xl:justify-between 2xl:items-center text-[#EB1933]">
        <div className="relative group">
          <FaCaretLeft size={40} className="cursor-pointer" />
          <div className="hidden group-hover:flex flex-col items-center absolute left-1/2 top-[10%] translate-x-[-50%] translate-y-[50%] z-[3]">
            <BiCaretUp size={20} />
            <span className="font-bold text-sm text-white bg-[#EB1933] rounded-lg px-3 py-1 min-w-[220px] max-w-full">
              Search for previous day flight
            </span>
          </div>
        </div>

        <h1 className="text-[32px] font-bold text-[#212529]">
          Flights from Dhaka to Chittagong
        </h1>
        <div className="relative group">
          <FaCaretRight size={40} className="cursor-pointer" />
          <div className="hidden group-hover:flex flex-col items-center absolute left-1/2 top-[10%] translate-x-[-50%] translate-y-[50%] z-[3]">
            <BiCaretUp size={20} />
            <span className="font-bold text-sm text-white bg-[#EB1933] rounded-lg px-3 py-1 min-w-[195px] max-w-full">
              Search for next day flight
            </span>
          </div>
        </div>
      </div>

      <div className="2xl:flex 2xl:p-5 rounded-lg bg-white border 2xl:drop-shadow-lg">
        <div
          className={`flex-1 cursor-pointer p-3 ${
            active === "cheapest" ? "bg-[#F5F6FA]" : "bg-none"
          }`}
          onClick={() => handleActive("cheapest")}
        >
          <p className="text-[#52556f] text-[18px] font-[600]">Cheapest</p>
          <p className="text-[#7c8db0] text-[14px]">
            To get the cheapest available flights
          </p>
        </div>
        <span className="divider divider-horizontal"></span>
        <div
          className={`flex-1 cursor-pointer p-3 ${
            active === "shortest" ? "bg-[#F5F6FA]" : "bg-none"
          }`}
          onClick={() => handleActive("shortest")}
        >
          <p className="text-[#52556f] text-[18px] font-[600]">Shortest</p>
          <p className="text-[#7c8db0] text-[14px]">
            To get the shortest available flights
          </p>
        </div>
      </div>

      <div className="2xl:flex 2xl:flex-col 2xl:gap-5">
        {tripData.map((data, index) => (
          <Trip key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default OneWayTrip;
