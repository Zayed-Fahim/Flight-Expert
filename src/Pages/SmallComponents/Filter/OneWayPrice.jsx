import React, { useState } from "react";
import "../../../CSS/rangeInput.css";

const OneWayPrice = () => {
  const [value, setValue] = useState(9062);

  const handleRangeChange = (event) => {
    const number = parseInt(event.target.value, 10);
    setValue(number);
  };

  const formatNumber = (number) => {
    const options = {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    };
    return number.toLocaleString("en-US", options);
  };

  return (
    <div className="2xl:flex 2xl:flex-col 2xl:gap-4 border-b 2xl:py-5 2xl:px-6">
      <label className="text-xl" htmlFor="range">
        One Way Price
      </label>
      <input
        type="range"
        id="range"
        min="3240"
        max="9062"
        value={value}
        onChange={handleRangeChange}
        className="range-input"
      />
      <div className="flex gap-1">
        <span className="font-xl font-semibold">3,240 tk</span>
        <span>-</span>
        <span className="font-xl font-semibold">{formatNumber(value)} tk</span>
      </div>
    </div>
  );
};

export default OneWayPrice;
