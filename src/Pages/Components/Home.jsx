import React from "react";
import ChooseTrip from "./ChooseTrip";
import Filter from "./Filter";
import OneWayTrip from "./OneWayTrip";

const Home = () => {
  return (
    <div className="2xl:mx-[7.5rem] 2xl:my-2 2xl:flex 2xl:flex-col 2xl:gap-10">
      <ChooseTrip />
      <div className="2xl:flex 2xl:gap-10">
        <Filter />
        <OneWayTrip />
      </div>
    </div>
  );
};

export default Home;
