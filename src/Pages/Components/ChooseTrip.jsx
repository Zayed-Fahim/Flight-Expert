import React, { useState } from "react";
import { GoArrowSwitch } from "react-icons/go";
import "../../CSS/radioInput.css";
import Button from "../SmallComponents/Button/Button";

const ChooseTrip = () => {
  const buttonClassNames =
    "absolute left-1/2 bottom-0 2xl:px-6 2xl:py-3 bg-[#eb1933] rounded-md text-white font-bold translate-x-[-50%] translate-y-[50%]";
  const [checkedOption, setCheckedOption] = useState("one_way");
  const [fareType, setFareType] = useState("regular_fares");
  const [tripDetails, setTripDetails] = useState({
    from: {
      location: "Dhaka",
      airport: "Hazrat Shahjalal International Airport",
    },
    to: {
      location: "Chittagong",
      airport: "Shah Amanat International",
    },
  });
  const [travelerDetails, setTravelerDetails] = useState({
    category: "Travelers & Booking Class",
    traveler_count: 1,
    trip_class: "Economy",
  });
  const handleChecked = (option) => {
    setCheckedOption(option);
  };
  const handleFareType = (option) => {
    setFareType(option);
  };

  const handleArrowClick = () => {
    setTripDetails({
      from: { ...tripDetails.to },
      to: { ...tripDetails.from },
    });
  };
  return (
    <section className="rounded-2xl 2xl:px-2 2xl:py-5 bg-white drop-shadow-lg relative h-full z-[1]">
      <div className="2xl:py-3 2xl:px-4 w-full flex 2xl:flex-col justify-evenly items-start gap-4">
        <div className="flex gap-5">
          <label className="custom-radio-1 flex items-center text-[#7C8DB0] 2xl:text-[16px] 2xl:font-bold">
            <input
              type="radio"
              className="hidden"
              name="trip_option"
              id="one_way"
              checked={checkedOption === "one_way"}
              onChange={() => handleChecked("one_way")}
            />
            <span className="radio-indicator-1"></span>One Way
          </label>
          <label className="custom-radio-1 flex items-center text-[#7C8DB0] 2xl:text-[16px] 2xl:font-bold">
            <input
              type="radio"
              className="hidden"
              name="trip_option"
              id="multi_trip"
              checked={checkedOption === "multi_trip"}
              onChange={() => handleChecked("multi_trip")}
            />
            <span className="radio-indicator-1"></span>Round Trip
          </label>
          <label className="custom-radio-1 flex items-center text-[#7C8DB0] 2xl:text-[16px] 2xl:font-bold">
            <input
              type="radio"
              className="hidden"
              name="trip_option"
              id="multi_city"
              checked={checkedOption === "multi_city"}
              onChange={() => handleChecked("multi_city")}
            />
            <span className="radio-indicator-1"></span>Multi City
          </label>
        </div>

        <div className="flex flex-col 2xl:flex-row gap-2">
          <div className="flex items-center text-[#6C757D] relative">
            <div className="border rounded-[10px] 2xl:pl-5 2xl:py-2 2xl:w-[17.6rem] flex flex-col items-start 2xl:gap-.5 cursor-pointer">
              <p className="text-sm">From</p>
              <p className="text-xl font-bold pb-1">
                {tripDetails.from.location}
              </p>
              <p className="text-xs">{tripDetails.from.airport}</p>
            </div>
            <div
              className="2xl:px-2 2xl:py-1 2xl:w-10 2xl:h-10 flex justify-center items-center rounded-[50%] bg-white border absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
              onClick={handleArrowClick}
            >
              <GoArrowSwitch
                className="text-[#eb1933] cursor-pointer"
                size={25}
              />
            </div>
            <div className="border rounded-[10px] 2xl:pl-10 2xl:py-2 2xl:w-[17.6rem] flex flex-col items-start 2xl:gap-.5 cursor-pointer">
              <p className="text-sm">To</p>
              <p className="text-xl font-bold pb-1">
                {tripDetails.to.location}
              </p>
              <p className="text-xs">{tripDetails.to.airport}</p>
            </div>
          </div>

          <div className="border inline-flex rounded-[10px]">
            <div className="2xl:w-[12rem] border-r-[.5px]"></div>
            <div className="2xl:w-[12rem] "></div>
          </div>

          <div className="2xl:w-[17.6rem] text-[#6C757D] rounded-[10px] border 2xl:pl-5 2xl:py-2 flex flex-col items-start 2xl:gap-.5 cursor-pointer">
            <p className="text-sm">{travelerDetails.category}</p>
            <p className="text-xl font-bold pb-1">
              {travelerDetails.traveler_count} Traveler
            </p>
            <p className="text-xs">{travelerDetails.trip_class}</p>
          </div>
        </div>

        <div className="flex justify-center items-start gap-2">
          <h1 className="font-semibold">Fare Type:</h1>
          <div className="flex gap-1 justify-center items-center">
            <div className="bg-[#FFF4F6] px-3 py-1 rounded-[5px] cursor-pointer">
              <label className="custom-radio-2 flex items-center 2xl:text-[16px] cursor-pointer">
                <input
                  className="hidden"
                  type="radio"
                  name="regular_fares"
                  id="regular_fares"
                  checked={fareType === "regular_fares"}
                  onChange={() => handleFareType("regular_fares")}
                />
                <span className="radio-indicator-2"></span>Regular Fares
              </label>
            </div>
            <div className="group relative bg-[#FFF4F6] px-3 py-1 rounded-[5px] cursor-pointer flex flex-col gap-2">
              <label className="custom-radio-2 flex items-center 2xl:text-[16px] cursor-pointer">
                <input
                  className="hidden"
                  type="radio"
                  name="seaman_fares"
                  id="seaman_fares"
                  checked={fareType === "seaman_fares"}
                  onChange={() => handleFareType("seaman_fares")}
                />
                <span className="radio-indicator-2"></span>Seaman Fares
              </label>
              <div className="hidden 2xl:group-hover:block absolute 2xl:-left-[70%] top-[130%] drop-shadow-md rounded-xl bg-white 2xl:w-[20rem] text-[12.5px] 2xl:p-4">
                <h1 className="font-semibold pb-3">Seaman Fares</h1>
                <p>
                  Individuals employed aboard vessels such as tankers, cruise
                  ships, and in onshore or offshore oil or energy production
                  zones fall under the category of seafarers. These can include
                  administrators, engineers, captains, technicians, workers, or
                  support staff certified by authorized organizations as
                  licensed personnel. It is crucial for them to carry valid
                  identifications and letters, as failure to do so could in
                  denial of boarding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Button
        buttonClassNames={buttonClassNames}
        type={"button"}
        text={"Modify Search"}
      />
    </section>
  );
};

export default ChooseTrip;
