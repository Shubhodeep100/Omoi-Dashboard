import React, { useState } from "react";
import pic from "../Assets/mypic.png";
import rev from "../Assets/revenue.jpg";
import sale from "../Assets/sales.jpg";
import profit from "../Assets/profit.jpg";
import p1 from "../Assets/1.jpg";
import p2 from "../Assets/2.jpg";
import p3 from "../Assets/3.jpg";
import str from '../Assets/star.jpg'
import {
  CalendarOutlined,
  CaretDownOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import Chart from "react-apexcharts";
function MainPage() {
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

  const toggleDrop = () => {
    setState((prevState) => ({
      ...prevState,
      isDropOpen: !prevState.isDropOpen, 
    }));
  };

  return (
    <section className="flex min-h-screen flex-1 flex-col items-center bg-dark-1 ml-3 pb-10 pt-0 max-md:pb-32 sm:px-6">
      <div className="w-full max-w-4xl">
        {/*  Parent container */}
        <section className="mt-1 flex flex-col gap-1">
          <section className="bg-white rounded-lg px-2 pt-2 mt-1 pb-3">
            <div className="flex flex-row">
              <div className="w-14 h-14 p-1 mr-4 rounded-full relative">
                <div className="absolute inset-0 ring-violet-500 ring-4 rounded-full" />
                <img
                  src={pic}
                  alt="Display pic"
                  className="w-full h-full rounded-full"
                />
                <div className="absolute top-0 right-0 rounded-full border-2 text-center w-4 h-4 bg-violet-600 text-white flex items-center justify-center cursor-pointer">
                  <p className="text-xs rounded-full">3</p>
                </div>
              </div>

              <div className="flex flex-col justify-between items-start">
                <h3 className="text-gray-900 text-2xl font-medium ">
                  Good Evening Team!
                </h3>
                <div className="mt-1 flex flex-col justify-between">
                  <p className="text-gray-500 text-xs font-normal">
                    Have an in-depth look at all the metrics within your
                    dashboard.
                  </p>
                </div>
              </div>
              <div className="ml-auto">
                <SearchOutlined className="cursor-pointer bg-gray-200 rounded-full p-2" />
              </div>
            </div>
          </section>

          <article className="flex flex-col mt-1 rounded-xl">
            <div className="bg-violet-600 px-2 rounded-lg">
              <div className="flex flex-row justify-between p-3">
                {/* Card One - revenue */}
                <div className="flex flex-row justify-item-center items-center">
                  <div className="w-10 h-10 rounded-full">
                    <img
                      src={rev}
                      alt="Display pic"
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex flex-col justify-between pl-4">
                    <p className="text-white font-light text-xs">
                      Monthly Revenue
                    </p>
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
                      <span className="pl-1 text-white font-semibold">
                        $1.7k
                      </span>
                    </span>
                  </div>
                </div>

                {/* Card two - Sales */}
                <div className="flex flex-row justify-item-center items-center">
                  <div className="w-10 h-10 rounded-full">
                    <img
                      src={sale}
                      alt="Display pic"
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex flex-col justify-between pl-4">
                    <p className="text-white font-light text-xs">
                      Monthly Sales
                    </p>
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
                      <span className="pl-1 text-white font-semibold">
                        $3.1k
                      </span>
                    </span>
                  </div>
                </div>

                {/* Card three - Profit */}
                <div className="flex flex-row justify-item-center items-center">
                  <div className="w-10 h-10 rounded-full">
                    <img
                      src={profit}
                      alt="Display pic"
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex flex-col justify-between pl-4">
                    <p className="text-white font-light text-xs">
                      Total Profit
                    </p>
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
                      <span className="pl-1 text-white font-semibold">
                        $8.9k
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Sales & cost section */}
          <div className="flex flex-row rounded-xl border border-slate-200 mt-4 justify-between">
            <div className="flex flex-row p-3">
              <div className="bg-white rounded-lg px-2 ">
                <div className="flex flex-col justify-between items-start">
                  <div className="text-gray-900 text-lg font-medium">
                    Total Sales & Cost
                  </div>
                  <div className="-mt-1 flex flex-col justify-between items-start">
                    <p className="text-gray-500 text-xs mt-1">Last 60 days</p>
                    <div className="flex flex-col justify-between items-start">
                      <div className="flex flex-row mt-12 justify-items-center items-center">
                        <span className="text-gray-900 text-4xl font-medium text-violet-600 pr-3">
                          $956.82k
                        </span>
                        <span className="bg-green-200 rounded-l-full rounded-r-full w-14 h-4 flex justify-center items-center">
                          <p className="text-green-500 text-xs">▲ +5.4%</p>
                        </span>
                      </div>

                      <div className="flex flex-row justify-between items-center pt-1">
                        <span className="text-green-500 text-xs pr-1">
                          +8.20k
                        </span>
                        <span className="text-xs text-gray-400 ">
                          vs prev. 60 days
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Analytics block */}

            <div className="flex flex-col p-3">
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
                  <div className="flex flex-row -mt-6 ml-2 text-xs text-slate-400 space-x-5 pl-7">
                    {" "}
                    <p>1-10 Aug</p>
                    <p>11-20 Aug</p>
                    <p className="text-black">21-30 Aug</p>
                    <p>1-10 Nov</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transaction Histry Section */}
          <section className="bg-white rounded-lg pt-3 pb-2">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col justify-between items-start">
                <div className="text-gray-900 text-2xl font-medium">
                  Transaction History
                </div>

                <div className="mt-2 flex flex-col justify-between items-center">
                  <div className="flex flex-row space-x-4 text-sm">
                    <button
                      className="bg-slate-100 hover:bg-slate-200 w-28 text-black font-normal py-1 px-2 rounded-lg"
                      type="button"
                    >
                      Recipient
                      <CaretDownOutlined className="text-black text-sm pb-1 text-gray-400 px-1 pl-3" />
                    </button>
                    <button
                      className="bg-slate-100 hover:bg-slate-200 w-28 text-black font-normal py-1 px-2 rounded-lg"
                      type="button"
                    >
                      Amount
                      <CaretDownOutlined className="text-black text-sm pb-1 text-gray-400 px-1 pl-3" />
                    </button>
                    <button
                      className="bg-slate-100 hover:bg-slate-200 w-28 text-black font-normal py-1 px-2 rounded-lg"
                      type="button"
                    >
                      Status
                      <CaretDownOutlined className="text-black text-sm pb-1 text-gray-400 pl-3" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <button
                  className="bg-white border border-gray-300 px-1 py-1 rounded-lg w-28 shadow-md text-xs font-semibold"
                  onClick={toggleDrop}
                >
                  <CalendarOutlined className="text-black text-sm pb-1 text-gray-400 pr-2" />
                  Month
                  <CaretDownOutlined className="text-black text-sm pb-1 text-gray-400 px-2" />
                </button>
                {state.isDropOpen && (
                  <div className="absolute mt-9 bg-white border border-gray-300 rounded-lg shadow-md w-28 flex flex-col items-center z-50 cursor-pointer pl-2">
                    <ul className="max-h-20 overflow-y-auto text-xs pr-3 space-y-2">
                      <li className="hover:bg-slate-300">January</li>
                      <li className="hover:bg-slate-300">February</li>
                      <li className="hover:bg-slate-300">March</li>
                      <li className="hover:bg-slate-300">April</li>
                      <li className="hover:bg-slate-300">May</li>
                      <li className="hover:bg-slate-300">June</li>
                      <li className="hover:bg-slate-300">July</li>
                      <li className="hover:bg-slate-300">August</li>
                      <li className="hover:bg-slate-300">September</li>
                      <li className="hover:bg-slate-300">October</li>
                      <li className="hover:bg-slate-300">November</li>
                      <li className="hover:bg-slate-300">December</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>

          <div className="flex flex-row items-center border-b border-gray-200 py-2 space-x-24">
            <div className="text-gray-500 text-sm mr-14">Customer</div>
            <div className="text-gray-500 text-xs">Status</div>
            <div className="text-gray-500 text-xs">Date</div>
            <div className="text-gray-500 text-xs">Invoice</div>
            <div className="text-gray-500 text-xs">People</div>
          </div>

          {/* Individual status section (Floyd) */}
          <div className="flex flex-row items-center border-b border-gray-200 py-5">
            <div className="mr-8">
              <div className="flex flex-row">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer">
                    <img
                      src={p1}
                      alt="Circular Img"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0">
                    <img
                      src={str}
                      alt="Star"
                      className="w-4 h-4 rounded-full object-cover border-2 border-white"
                    />
                  </div>
                </div>

                <div className="flex flex-col pl-3">
                  <p className="text-sm font-medium">Floyed Johntosan</p>
                  <p className="text-slate-400 text-xs cursor-pointer">
                    johntosan@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="text-gray-500 text-sm pl-2">
              <span className="border border-gray cursor-pointer rounded-l-full rounded-r-full w-16 h-6 flex justify-center items-center">
                <span className="bg-green-500 w-1.5 h-1.5 rounded-full mx-1"></span>
                <p className="text-black font-medium text-xs ">Success</p>
              </span>
            </div>
            <div className="text-black text-sm px-10 ml-6">Nov 02, 2021</div>
            <div className="text-black text-sm">$100,00</div>
            <div className="flex ml-auto">
              <div className="flex -space-x-3 cursor-pointer">
                <img
                  className="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800 flex-shrink-0"
                  src={p1}
                  alt=""
                />
                <img
                  className="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800 flex-shrink-0"
                  src={p2}
                  alt=""
                />
                <a
                  className="flex items-center justify-center w-7 h-7 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                  href=" "
                >
                  +5
                </a>
              </div>
            </div>
          </div>
          {/* Alisia Section */}
          <div className="flex flex-row items-center border-b border-gray-200 py-5">
            <div className="mr-8">
              <div className="flex flex-row">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer">
                    <img
                      src={p3}
                      alt="Circular Img"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0">
                    <img
                      src={str}
                      alt="Star"
                      className="w-4 h-4 rounded-full object-cover border-2 border-white"
                    />
                  </div>
                </div>

                <div className="flex flex-col pl-3">
                  <p className="text-sm font-medium">Alisia Jones</p>
                  <p className="text-slate-400 text-xs cursor-pointer">
                    jonesalia@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="text-gray-500 text-sm pl-4">
              <span className="border border-gray cursor-pointer rounded-l-full rounded-r-full w-16 h-6 flex justify-center items-center">
                <span className="bg-yellow-500 w-1.5 h-1.5 rounded-full mx-1"></span>
                <p className="text-black font-medium text-xs mr-1">Pending</p>
              </span>
            </div>
            <div className="text-black text-sm px-10 ml-5">Nov 02, 2021</div>
            <div className="text-black text-sm">$100,00</div>
            <div className="flex ml-auto">
              <div className="flex -space-x-3 cursor-pointer">
                <img
                  className="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800 flex-shrink-0"
                  src={p1}
                  alt=""
                />
                <img
                  className="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800 flex-shrink-0"
                  src={p2}
                  alt=""
                />
                <img
                  className="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800 flex-shrink-0"
                  src={p3}
                  alt=""
                />
               
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default MainPage;
