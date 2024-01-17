import React from "react";
import SessionTimeOut from "../SmallComponents/Filter/SessionTimeOut";
import OneWayPrice from "../SmallComponents/Filter/OneWayPrice";
import Departure from "../SmallComponents/Filter/Departure";
import Others from "../SmallComponents/Filter/Others";
import Button from "../SmallComponents/Button/Button";

const Filter = () => {
  const buttonClassNames =
    "2xl:w-full 2xl:py-2 text-[#EB1933] hover:text-white border border-[#EB1933] hover:bg-[#EB1933] rounded-[6px] mt-5 transition-all duration-300 text-[18px] font-[600]";
  return (
    <div className="2xl:h-full 2xl:min-w-[415px] bg-white rounded-2xl 2xl:shadow-lg border 2xl:pt-4 2xl:pb-6 z-[0] 2xl:flex 2xl:flex-col">
      <SessionTimeOut />
      <OneWayPrice />
      <Departure />
      <Others />
      <div className="2xl:px-6">
        <Button
          buttonClassNames={buttonClassNames}
          type={"button"}
          text={"Clear Filters"}
        />
      </div>
    </div>
  );
};

export default Filter;
