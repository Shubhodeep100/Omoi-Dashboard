import { React, useState } from "react";
import Chart from "react-apexcharts";

function TotalSalesanalytics() {
  const [state, setState] = useState({
    series: [
      {
        name: "series-1",
        data: [30, 45, 38, 60, 27, 41],
        colors: ["", "bg-violet-500", "", "bg-violet-500", "", "bg-violet-500"],
      },
    ],
    isDropdownOpen: false,
  });

  const toggleDropdown = () => {
    setState((prevState) => ({
      ...prevState,
      isDropdownOpen: !prevState.isDropdownOpen,
    }));
  };

  return (
    <div className="min-h-min border-slate-200 items-center">
      <div className="flex flex-wrap rounded-xl border  gap-16 cardsgap p-3 greet">
        {/* Sales & cost block starts */}

        <div className="flex flex-col bg-white rounded-lg justify-between items-start pl-1">
          <div className="text-gray-900 text-lg font-medium">
            Total Sales & Cost
          </div>
          <div className="flex flex-col justify-between items-start">
            <p className="text-gray-500 text-xs">Last 60 days</p>
            <div className="flex flex-col justify-between items-start">
              <div className="flex flex-row mt-14 justify-items-center items-center">
                <span className="text-gray-900 text-4xl font-medium text-violet-600 pr-3">
                  $956.82k
                </span>
                <span className="bg-green-200 rounded-l-full rounded-r-full w-14 h-4 flex justify-center items-center">
                  <p className="text-green-500 text-xs">▲ +5.4%</p>
                </span>
              </div>

              <div className="flex flex-row justify-between items-center pt-1">
                <span className="text-green-500 text-xs pr-1">+8.20k</span>
                <span className="text-xs text-gray-400 ">vs prev. 60 days</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sales & cost block ends */}

        {/* Analytics block starts */}
        <div className="flex flex-col p-2">
          <div className="flex justify-between items-center">
            <div className="font-medium text-sm">
              Analytic
              <span className="text-green-400 text-xs"> +5.4%</span>{" "}
              {/* Adjust text size */}
            </div>
            <div className="relative">
              <button
                className="bg-white border border-gray-300 px-2 py-1 rounded-lg shadow-md text-xs font-semibold" // Smaller button
                onClick={toggleDropdown}
              >
                Month
              </button>
              {state.isDropdownOpen && (
                <div className="absolute mt-1 bg-white border border-gray-300 rounded-lg shadow-md w-16 flex flex-col items-center z-50 cursor-pointer pl-2">
                  <ul className="max-h-20 overflow-y-auto text-xs pr-3">
                    <li className="hover:bg-slate-300">Jan</li>
                    <li className="hover:bg-slate-300">Feb</li>
                    <li className="hover:bg-slate-300">Mar</li>
                    <li className="hover:bg-slate-300">Apr</li>
                    <li className="hover:bg-slate-300">May</li>
                    <li className="hover:bg-slate-300">Jun</li>
                    <li className="hover:bg-slate-300">Jul</li>
                    <li className="hover:bg-slate-300">Aug</li>
                    <li className="hover:bg-slate-300">Sep</li>
                    <li className="hover:bg-slate-300">Oct</li>
                    <li className="hover:bg-slate-300">Nov</li>
                    <li className="hover:bg-slate-300">Dec</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="col-4">
              <Chart
                options={{
                  dataLabels: {
                    position: "end",
                    style: {
                      colors: ["#f4f4f4"],
                      fontSize: 0.5,
                    },
                  },

                  plotOptions: {
                    bar: {
                      borderRadius: 6,
                    },
                  },

                  xaxis: {
                    categories: [""],
                  },

                  yaxis: {
                    min: 20,
                    max: 60,
                    tickAmount: 2,
                    lines: {
                      show: false,
                    },
                  },

                  colors: ["#8b5cf6"],
                  theme: { mode: "light" },
                }}
                series={state.series}
                type="bar"
                width="400"
                height="150"
              />
              <div className="flex flex-row -mt-7 ml-3 text-xs text-slate-400 space-x-5 pl-7">
                {" "}
                <p>1-10 Aug</p>
                <p>11-20 Aug</p>
                <p className="text-black">21-30 Aug</p>
                <p>1-10 Nov</p>
              </div>
            </div>
          </div>
        </div>
        {/* Analytics block ends */}
      </div>
    </div>
  );
}

export default TotalSalesanalytics;
