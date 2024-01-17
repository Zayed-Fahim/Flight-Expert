import React from "react";
import Button from "../SmallComponents/Button/Button";
import { FaAngleDown } from "react-icons/fa";

const Trip = ({ data }) => {
  const buttonClassNames =
    "lg:block block md:hidden bg-[#EB1933] text-white border border-[#EB1933] rounded-md hover:bg-white hover:text-[#EB1933] transition-all duration-300 text-sm font-bold xl:ml-2 lg:py-[10px] lg:px-[15px]";
  const buttonClassNames_1 =
    "lg:hidden hidden md:block absolute right-0 top-[75%] bg-[#EB1933] text-white border border-[#EB1933] rounded-md hover:bg-white hover:text-[#EB1933] transition-all duration-300 text-sm font-bold px-[15px] py-[10px]";
  return (
    <div className="bg-white flex flex-col gap-5 lg:block rounded-lg px-4 py-6 shadow-lg">
      <div className="grid grid-cols-2 md:grid-cols-4 md:relative lg:grid-cols-6 md:place-items-start gap-x-28 gap-y-2 md:gap-6 lg:gap-3.5 xl:gap-5 2xl:gap-7">
        <div>
          <img
            className="h-[5rem] w-[5rem]"
            src={data.airlineDetails.image}
            alt={data.airlineDetails.airlines_name.toLowerCase()}
          />
          <p className="text-[12px] text-[#7c8db0]">
            {data.airlineDetails.airlines_name}
          </p>
        </div>
        <div className="flex flex-col gap-2">
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
        <div className="flex flex-col items-center gap-3">
          <p className="text-xs text-[#7c8db0]">{data.duration.time}</p>
          <img
            src={data.duration.image}
            alt={data.duration.status.toLowerCase()}
          />
          <p className="text-xs text-[#27273f]">{data.duration.status}</p>
        </div>
        <div className="flex flex-col gap-2">
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
        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#7c8db0]">Price</p>
          <p className="font-[600] text-[#27273f]">{data.price}</p>
        </div>
        <Button
          text={"Book Now"}
          buttonClassNames={buttonClassNames}
          type={"button"}
        />
        <Button
          text={"Book Now"}
          buttonClassNames={buttonClassNames_1}
          type={"button"}
        />
      </div>

      <div className="flex justify-between items-center">
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
