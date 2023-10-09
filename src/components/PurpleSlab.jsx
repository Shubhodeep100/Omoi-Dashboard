import React from 'react'
import rev from "../Assets/revenue.jpg";
import sale from "../Assets/sales.jpg";
import profit from "../Assets/profit.jpg";

function PurpleSlab() {
  return (
    <div className="min-h-min z-60 flex-col items-center">
      <article className="flex bg-violet-600 rounded-lg">
        <div className="flex flex-wrap gap-14 cardsgap justify-between purpleCard p-4">
          {/* Card One - Monthly Revenue */}
          <div className="flex flex-row items-center">
            <div className="w-10 h-10 rounded-full">
              <img
                src={rev}
                alt="Display pic"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="flex flex-col justify-between pl-4">
              <p className="text-white font-light text-xs">Monthly Revenue</p>
              <div className="flex flex-row justify-items-center items-center">
                <span className="text-white mr-2 font-semibold text-lg">
                  $3.500
                </span>
                <span className="bg-gray-50 text-violet-600 rounded-l-full rounded-r-full w-11 h-4 flex justify-center items-center">
                  <p className="text-violet-600 text-xs">+2.4%</p>
                </span>
              </div>
              <span className="font-light text-white text-xs">
                Previous Month
                <span className="pl-1 text-white font-semibold">$1.7k</span>
              </span>
            </div>
          </div>
          {/* Card two - Monthly Sales */}
          <div className="flex flex-row items-center">
            <div className="w-10 h-10 rounded-full">
              <img
                src={sale}
                alt="Display pic"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="flex flex-col justify-between pl-4">
              <p className="text-white font-light text-xs">Monthly Sales</p>
              <div className="flex flex-row justify-items-center items-center">
                <span className="text-white mr-2 font-semibold text-lg">
                  $6.750
                </span>
                <span className="bg-gray-50 text-violet-600 rounded-l-full rounded-r-full w-11 h-4 flex justify-center items-center">
                  <p className="text-violet-600 text-xs">+1.4%</p>
                </span>
              </div>
              <span className="font-light text-white text-xs">
                Previous Month
                <span className="pl-1 text-white font-semibold">$3.1k</span>
              </span>
            </div>
          </div>
          {/* Card three - Total Profit */}
          <div className="flex flex-row items-center">
            <div className="w-10 h-10 rounded-full">
              <img
                src={profit}
                alt="Display pic"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="flex flex-col justify-between pl-4">
              <p className="text-white font-light text-xs">Total Profit</p>
              <div className="flex flex-row justify-items-center items-center">
                <span className="text-white mr-2 font-semibold text-lg">
                  $10.900
                </span>
                <span className="bg-gray-50 text-violet-600 rounded-l-full rounded-r-full w-11 h-4 flex justify-center items-center">
                  <p className="text-violet-600 text-xs">+4.3%</p>
                </span>
              </div>
              <span className="font-light text-white text-xs">
                Previous Month
                <span className="pl-1 text-white font-semibold">$8.9k</span>
              </span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default PurpleSlab
