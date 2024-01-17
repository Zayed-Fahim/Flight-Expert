import React, { useEffect, useState } from "react";
import { GoArrowSwitch } from "react-icons/go";
import { PiArrowsDownUp } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import "../../CSS/radioInput.css";
import Button from "../SmallComponents/Button/Button";

const ChooseTrip = () => {
  const buttonClassNames =
    "hidden md:hidden lg:flex absolute left-1/2 bottom-0 bg-[#eb1933] rounded-md text-white font-bold translate-x-[-50%] translate-y-[50%] lg:px-6 lg:py-3";
  const buttonClassNames_1 =
    "bg-[#eb1933] rounded-md text-white font-semibold py-2 block lg:hidden ";
  const [checkedOption, setCheckedOption] = useState("one_way");
  const [fareType, setFareType] = useState("regular_fares");
  const [currentDate, setCurrentDate] = useState("");
  const [dayName, setDayName] = useState("");
  const [nextDate, setNextDate] = useState("");
  const [nextDay, setNextDay] = useState("");

  useEffect(() => {
    const currentDateObj = new Date();
    const nextDateObj = new Date(currentDateObj);
    const dateOptions = { day: "numeric", month: "short", year: "2-digit" };
    const formattedDate = currentDateObj.toLocaleDateString(
      "en-US",
      dateOptions
    );
    const dayOptions = { weekday: "long" };
    const formattedDayName = currentDateObj.toLocaleDateString(
      "en-US",
      dayOptions
    );
    setCurrentDate(formattedDate);
    setDayName(formattedDayName);
    nextDateObj.setDate(currentDateObj.getDate() + 1);
    const nextDateFormatted = nextDateObj.toLocaleDateString(
      "en-US",
      dateOptions
    );
    const nextDayIndex = nextDateObj.getDay();
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const nextDayFormatted = daysOfWeek[nextDayIndex];

    setNextDate(nextDateFormatted);
    setNextDay(nextDayFormatted);
  }, []);

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
    <section className="bg-white shadow-lg relative h-full z-[1] rounded-2xl px-4 py-4 md:px-6 md:py-4 mx-[12px] lg:-mx-[2.5rem] 2xl:mx-[7.5rem]">
      <div className="w-full flex flex-col md:flex-col justify-evenly items-start gap-4">
        <div className="flex gap-5">
          <label className="custom-radio-1 flex items-center text-[#7C8DB0] xl:text-[16px] xl:font-bold">
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
          <label className="custom-radio-1 flex items-center text-[#7C8DB0] xl:text-[16px] xl:font-bold">
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
          <label className="custom-radio-1 flex items-center text-[#7C8DB0] xl:text-[16px] xl:font-bold">
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
        <div className="flex flex-col md:flex-col lg:flex-row gap-4 md:gap-4 lg:gap-2 w-full h-full">
          <div className="flex flex-col md:flex-col gap-4 md:gap-4 lg:gap-0 lg:flex-row items-center text-[#6C757D] relative">
            <div className="border rounded-[10px] flex flex-col items-start cursor-pointer pl-4 py-2 md:pl-5 md:py-1 w-full lg:w-[15rem]  xl:w-[17.28rem] xl:gap-.5 2xl:w-[17.6rem] ">
              <p className="text-sm">From</p>
              <p className="text-xl font-bold pb-1">
                {tripDetails.from.location}
              </p>
              <p className="text-xs">{tripDetails.from.airport}</p>
            </div>
            <div
              className="flex justify-center items-center rounded-[50%] bg-white border absolute left-[90%] md:left-[93%] lg:left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] h-10 w-10 md:h-12 md:w-12 lg:px-2 lg:py-1 lg:w-10 lg:h-10"
              onClick={handleArrowClick}
            >
              <GoArrowSwitch
                className="text-[#eb1933] cursor-pointer hidden lg:block"
                size={25}
              />
              <PiArrowsDownUp
                className="text-[#eb1933] cursor-pointer lg:hidden md:block block"
                size={20}
              />
            </div>
            <div className="border rounded-[10px] flex flex-col items-start cursor-pointer w-full pl-4 py-2 md:pl-5 md:py-1 lg:pl-8 lg:w-[15rem] xl:w-[17.28rem] xl:gap-.5 2xl:pl-8 2xl:w-[17.6rem]">
              <p className="text-sm">To</p>
              <p className="text-xl font-bold pb-1">
                {tripDetails.to.location}
              </p>
              <p className="text-xs">{tripDetails.to.airport}</p>
            </div>
          </div>
          <div className="border grid grid-cols-2 lg:inline-flex rounded-[10px] md:h-full text-[#6c757d]">
            <div className="md:w-full md:h-full lg:w-[10rem] xl:w-[12rem] border-r-[.5px] pl-4 py-2 md:pl-5 md:py-1 cursor-pointer">
              <label className="flex items-center gap-2 cursor-pointer">
                <span className="text-sm">Departure</span>
                <IoIosArrowDown size={20} />
              </label>
              <p className="text-xl font-bold pb-1 cursor-pointer">
                {currentDate}
              </p>
              <p className="text-xs cursor-pointer">{dayName}</p>
            </div>
            <div className="md:w-full md:h-full lg:w-[10rem] xl:w-[12rem] pl-4 py-2 md:pl-5 md:py-1 cursor-pointer">
              <label className="flex items-center gap-2 cursor-pointer">
                <span className="text-sm cursor-pointer">Return</span>
                <IoIosArrowDown size={20} />
              </label>
              <p className="text-xl font-bold pb-1 cursor-pointer">
                {nextDate}
              </p>
              <p className="text-xs cursor-pointer">{nextDay}</p>
            </div>
          </div>
          <div className="border rounded-[10px] flex flex-col items-start cursor-pointer pl-4 py-2 md:pl-5 md:py-1 lg:w-[15rem] xl:w-[17.28rem] xl:gap-.5 2xl:w-[17.6rem]">
            <p className="text-sm">{travelerDetails.category}</p>
            <p className="text-xl font-bold pb-1 text-[#6c757d]">
              {travelerDetails.traveler_count} Traveler
            </p>
            <p className="text-xs">{travelerDetails.trip_class}</p>
          </div>
          <Button
            type={"button"}
            text={"Search"}
            buttonClassNames={buttonClassNames_1}
          />
        </div>
        <div className="flex justify-center items-start gap-2 md:-mt-2 lg:mt-auto">
          <h1 className="font-semibold xl:text-[14px]">Fare Type:</h1>
          <div className="flex gap-1 justify-center items-center">
            <div className="bg-[#FFF4F6] px-3 py-1 rounded-[5px] cursor-pointer">
              <label className="custom-radio-2 flex items-center cursor-pointer font-semibold xl:text-[14px] 2xl:text-[16px]">
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
              <label className="custom-radio-2 flex items-center cursor-pointer font-semibold xl:text-[14px] 2xl:text-[16px]">
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
              <div className="hidden absolute top-[100%] md:top-[120%] lg:top-[130%] shadow-lg rounded-xl bg-white w-[18rem] md:w-[17rem] lg:w-[17rem] xl:w-[18rem] 2xl:w-[20rem] -left-[90%] md:-left-[50%] 2xl:-left-[65%] group-hover:block md:group-hover:block text-xs xl:text-[12.5px] p-4">
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
