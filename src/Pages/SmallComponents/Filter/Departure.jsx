import React from "react";
import { PiSunHorizonFill, PiSunHorizonLight, PiSun } from "react-icons/pi";

const Departure = () => {
  const departureDetails = [
    {
      icon: <PiSunHorizonLight size={25} />,
      time: "Morning",
      from: "6:00",
      to: "11:59 (5)",
    },
    {
      icon: <PiSun size={25} />,
      time: "After Noon",
      from: "12:00",
      to: "17:59 (3)",
    },
    {
      icon: <PiSunHorizonFill size={25} />,
      time: "Evening",
      from: "18:00",
      to: "23:59 (7)",
    },
  ];
  return (
    <div className="border-b flex flex-col py-5 gap-5 px-6">
      <h1 className="text-xl">Departure time in Dhaka</h1>
      <div className="grid grid-cols-2 gap-y-2 gap-x-12 md:gap-x-4 lg:gap-x-12">
        {departureDetails.map((departure, index) => (
          <div
            key={index}
            className="cursor-pointer border gap-0 lg:gap-2 rounded-lg border-black p-2 flex flex-col justify-center items-center "
          >
            <span className="cursor-pointer">{departure.icon}</span>
            <label className="cursor-pointer flex flex-col justify-center items-center">
              <span className="font-bold text-xs">{departure.time}</span>
              <span className="text-xs">
                {departure.from} - {departure.to}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departure;
