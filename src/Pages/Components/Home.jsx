import React from "react";
import ChooseTrip from "./ChooseTrip";
import Filter from "./Filter";
import OneWayTrip from "./OneWayTrip";

const Home = () => {
  return (
    <div className="my-2 flex flex-col gap-5 lg:gap-10">
      <ChooseTrip />
      <div className="flex flex-col md:flex-row gap-5 md:gap-5 lg:gap-10 m-[12px] md:mx-[.5rem] lg:-mx-[2.5rem] 2xl:mx-[7.5rem]">
        <Filter />
        <OneWayTrip />
      </div>
    </div>
  );
};

export default Home;
