import React from "react";
import "../../../CSS/checkboxInput.css";

const Others = () => {
  return (
    <>
      <div className="2xl:py-5 border-b 2xl:px-6">
        <div className="2xl:flex 2xl:flex-col 2xl:gap-5">
          <span className="text-[18px] font-[600]">Stops From Dhaka</span>
          <label className="2xl:flex justify-between items-center mb-2">
            <label className="custom-checkbox text-[#52556F] text-sm">
              <input
                className="hidden"
                type="checkbox"
                name="non_stop"
                id="non_stop"
              />
              <span className="checkbox-indicator"></span>Non Stop (8)
            </label>
            <span className="cursor-text">BDT 3,240</span>
          </label>
        </div>
      </div>

      <div className="2xl:py-5 border-b 2xl:px-6">
        <div className="2xl:flex 2xl:flex-col 2xl:gap-5">
          <span className="text-[18px] font-[600]">
            Check in Baggage Allowance
          </span>
          <label className="custom-checkbox text-[#52556F] text-sm">
            <input className="hidden" type="checkbox" name="20_kg" id="20_kg" />
            <span className="checkbox-indicator"></span>20 KG (7)
          </label>
        </div>
      </div>

      <div className="2xl:py-5 border-b 2xl:px-6">
        <div className="2xl:flex 2xl:flex-col 2xl:gap-5">
          <span className="text-[18px] font-[600]">Refundable</span>
          <label className="custom-checkbox text-[#52556F] text-sm">
            <input
              className="hidden"
              type="checkbox"
              name="partially_refundable"
              id="partially_refundable"
            />
            <span className="checkbox-indicator"></span>Partially Refundable (7)
          </label>
        </div>
      </div>

      <div className="2xl:flex 2xl:px-6">
        <div className="2xl:py-5 border-b">
          <div className="2xl:flex 2xl:flex-col 2xl:gap-5">
            <span className="font-semibold">Departing from</span>
            <label className="custom-checkbox text-[#52556F] text-sm">
              <input className="hidden" type="checkbox" name="dac" id="dac" />
              <span className="checkbox-indicator"></span>DAC
            </label>
          </div>
        </div>
        <div className="2xl:py-5 border-b">
          <div className="2xl:flex 2xl:flex-col 2xl:gap-5">
            <span className="font-semibold">Arriving at</span>
            <label className="custom-checkbox text-[#52556F] text-sm">
              <input className="hidden" type="checkbox" name="cgp" id="cgp" />
              <span className="checkbox-indicator"></span>CGP
            </label>
          </div>
        </div>
      </div>

      <div className="2xl:py-5 border-b 2xl:px-6">
        <div className="2xl:flex 2xl:flex-col 2xl:gap-5">
          <span className="text-[18px] font-[600]">Airlines</span>
          <label>
            <label className="2xl:flex justify-between items-center mb-2">
              <label className="custom-checkbox text-[#52556F] text-sm">
                <input
                  className="hidden"
                  type="checkbox"
                  name="biman_bangladesh_airlines"
                  id="biman_bangladesh_airlines"
                />
                <span className="checkbox-indicator"></span>Biman Bangladesh
                Airlines
              </label>
              <span className="cursor-text">BDT 3,240</span>
            </label>
            <label className="2xl:flex justify-between items-center mb-2">
              <label className="custom-checkbox text-[#52556F] text-sm">
                <input
                  className="hidden"
                  type="checkbox"
                  name="air_astra"
                  id="air_astra"
                />
                <span className="checkbox-indicator"></span>Air Astra
              </label>
              <span className="cursor-text">BDT 3,954</span>
            </label>
            <label className="2xl:flex justify-between items-center mb-2">
              <label className="custom-checkbox text-[#52556F] text-sm">
                <input
                  className="hidden"
                  type="checkbox"
                  name="novo_air"
                  id="novo_air"
                />
                <span className="checkbox-indicator"></span>Novo Air
              </label>
              <span className="cursor-text">BDT 4,139</span>
            </label>
            <label className="2xl:flex justify-between items-center">
              <label className="custom-checkbox text-[#52556F] text-sm">
                <input
                  className="hidden"
                  type="checkbox"
                  name="us_bangla_airlines"
                  id="us_bangla_airlines"
                />
                <span className="checkbox-indicator"></span>US Bangla Airlines
              </label>
              <span className="cursor-text">BDT 4,403</span>
            </label>
          </label>
        </div>
      </div>

      <div className="2xl:py-5 2xl:px-6">
        <div className="2xl:flex 2xl:flex-col 2xl:gap-5">
          <span className="text-[18px] font-[600]">
            Transit Time in (Dhaka - Chittagong)
          </span>
          <label className="custom-checkbox text-[#52556F] text-sm">
            <input
              className="hidden"
              type="checkbox"
              name="no_transit_time"
              id="no_transit_time"
            />
            <span className="checkbox-indicator"></span>No Transit Time (7)
          </label>
        </div>
      </div>
    </>
  );
};

export default Others;
