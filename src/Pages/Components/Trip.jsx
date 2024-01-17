import React from "react";
import Button from "../SmallComponents/Button/Button";
import { FaAngleDown } from "react-icons/fa";

const Trip = ({ data }) => {
  const buttonClassNames =
    "bg-[#EB1933] text-white 2xl:py-[10px] 2xl:px-[15px] border border-[#EB1933] rounded-md hover:bg-white hover:text-[#EB1933] transition-all duration-300 text-sm font-bold 2xl:ml-2";
  return (
    <div className="2xl:px-4 2xl:py-6 bg-white 2xl:drop-shadow-md rounded-lg border ">
      <div className="2xl:grid 2xl:grid-cols-6 2xl:place-items-start 2xl:gap-7">
        <div className="">
          <img
            className="h-[5rem] w-[5rem]"
            src={data.airlineDetails.image}
            alt={data.airlineDetails.airlines_name.toLowerCase()}
          />
          <p className="text-[12px] text-[#7c8db0]">
            {data.airlineDetails.airlines_name}
          </p>
        </div>
        <div className="2xl:flex 2xl:flex-col gap-2">
          <p className="text-xs text-[#7c8db0]">Depart</p>
          <label>
            <p className="font-[600] text-[#27273f]">
              {data.departDetails.time}
            </p>
            <p className="text-sm text-[#27273f]">{data.departDetails.date}</p>
          </label>
          <p className="text-sm text-[#27273f]">
            {data.departDetails.location}
          </p>
        </div>
        <div className="2xl:flex 2xl:flex-col 2xl:items-center gap-3">
          <p className="text-xs text-[#7c8db0]">{data.duration.time}</p>
          <img
            src={data.duration.image}
            alt={data.duration.status.toLowerCase()}
          />
          <p className="text-xs text-[#27273f]">{data.duration.status}</p>
        </div>
        <div className="2xl:flex 2xl:flex-col gap-2">
          <p className="text-xs text-[#7c8db0]">Arrive</p>
          <label>
            <p className="font-[600] text-[#27273f]">
              {data.arriveDetails.time}
            </p>
            <p className="text-sm text-[#27273f]">{data.arriveDetails.date}</p>
          </label>
          <p className="text-sm text-[#27273f]">
            {data.arriveDetails.location}
          </p>
        </div>
        <div className="2xl:flex 2xl:flex-col gap-2">
          <p className="text-xs text-[#7c8db0]">Price</p>
          <p className="font-[600] text-[#27273f]">{data.price}</p>
        </div>
        <Button
          text={"Book Now"}
          buttonClassNames={buttonClassNames}
          type={"button"}
        />
      </div>
      <div className="2xl:flex 2xl:justify-between 2xl:items-center">
        <p className="text-[12px] text-[#008000]">
          {data.airlineDetails.refund_status}
        </p>
        <button className="flex gap-3 items-center text-[#EB1933] hover:text-[#8b0000] font-bold">
          <span>Flight Details</span>
          <FaAngleDown size={20} />
        </button>
      </div>
    </div>
  );
};

export default Trip;
