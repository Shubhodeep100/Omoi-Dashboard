import React, { useState } from "react";
import dp from "../Assets/mypic.png";
import p1 from "../Assets/1.jpg";
import p2 from "../Assets/2.jpg";
import p3 from "../Assets/3.jpg";
import laptop from '../Assets/laptop.jpg'
import books from '../Assets/stackbook.jpg'
import report from '../Assets/book.jpg'

import {
  ArrowRightOutlined,
  BellOutlined,
  ClockCircleOutlined,
  DownOutlined,
  LeftOutlined,
  RightOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

function Rightside() {
  const [state, setState] = useState({ isDropdownOpen: false });

  const toggleDropdown = () => {
    setState((prevState) => ({
      ...prevState,
      isDropdownOpen: !prevState.isDropdownOpen,
    }));
  };

  return (
    <section className="sticky top-0 z-20 flex flex-col justify-between gap-2  pb-4 max-xl:hidden sm:w-80">
      <div className="flex flex-col pr-8">
        <div className="flex flex-row justify-between pt-1 pb-6">
          <div className="mt-3 pt-1 cursor-pointer relative">
            <BellOutlined />
            <div className="absolute top-2 right-0 w-2 h-2 bg-purple-500 rounded-full"></div>
          </div>

          <div className="mt-3 pt-1">
            <button
              type="button"
              className="flex items-center justify-center rounded-full w-38 h-8 bg-white text-white p-0.5 shadow-xl"
              onClick={toggleDropdown}
            >
              <div className="w-6 h- rounded-full overflow-hidden mx-1">
                <img
                  src={dp}
                  alt="ProImage"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="antialiased text-xs font-semibold mr-1 text-black">
                Johntosan
              </span>
              <DownOutlined className="text-black text-xs p-1" />
            </button>
            {state.isDropdownOpen && (
              <div className="absolute mt-1 bg-white border border-gray-300 rounded-lg shadow-md w-24 flex flex-col items-center z-50 cursor-pointer pl-2">
                <ul className="max-h-20 overflow-y-auto text-xs pr-6 space-y-2">
                  <li className="hover:bg-slate-300">Harry</li>
                  <li className="hover:bg-slate-300">Ben</li>
                  <li className="hover:bg-slate-300">Mark</li>
                  <li className="hover:bg-slate-300">Austin</li>
                  <li className="hover:bg-slate-300">Jonathan</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-start pt-2">
          <p className="text-sm text-violet-600 cursor-pointer">
            Premium Access
          </p>
          <div className="flex flex-col font-semibold text-2xl">
            <div className="-mb-1">Take Back </div>
            <div className="-mb-1">Your Creative </div>
            <div className="flex flex-row ">
              <div>
                <div>Control</div>
              </div>

              <div className="mt-2 ml-3 justify-content-center">
                <div className="flex -space-x-3 cursor-pointer">
                  <img
                    className="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800"
                    src={p1}
                    alt=""
                  />
                  <img
                    className="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800"
                    src={p2}
                    alt=""
                  />
                  <img
                    className="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800"
                    src={p3}
                    alt=""
                  />
                  <a
                    className="flex items-center justify-center w-7 h-7 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                    href=" "
                  >
                    +10
                  </a>
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-xs font-normal pt-2 cursor-pointer">
              The Professional Platform <span>⌄</span>
            </p>
          </div>
        </div>
        <section className="mt-5 mb-6">
          <a
            href=" "
            className="flex items-center p-2 antialiased border border-slate-200 text-black rounded-lg text-violet-600 hover:bg-slate-100"
          >
            <span className="text-violet-600 text-sm ">Upgrade Now</span>
            <ArrowRightOutlined className="ml-auto text-violet-600 pr-2" />
          </a>
        </section>

        {/* Calender section*/}
        <div className="flex flex-col items-center border-t border-gray-200 pt-5">
          <div className="flex flex-row justify-between text-heading4-medium text-light-1 w-full">
            <div className="text-sm font-medium">October 2023</div>
            <div className="flex flex-row space-x-2 cursor-pointer">
              <div className="w-6 h-6 rounded-full border border-gray bg-white flex items-center justify-center ml-auto ">
                <LeftOutlined className="text-xs text-gray-300" />
              </div>
              <div className="w-6 h-6 rounded-full border border-gray bg-white flex items-center justify-center ">
                <RightOutlined className="text-xs text-violet-500 " />
              </div>
            </div>
          </div>

          <div className="flex flex-row space-x-5 pt-4 pb-3">
            <div className="text-sm text-gray-400">Mon</div>
            <div className="text-sm text-gray-400">Tue</div>
            <div className="text-sm text-gray-400">Wed</div>
            <div className="text-sm text-gray-400">Thu</div>
            <div className="text-sm text-gray-400">Fri</div>
            <div className="text-sm text-gray-400">Sat</div>
            <div className="text-sm text-gray-400">Sun</div>
          </div>
          <div className="flex flex-row space-x-7 pt-1 ">
            <span className="text-sm text-black text-xs cursor-pointer">
              11
            </span>
            <span className="text-sm text-black text-xs cursor-pointer">
              12
            </span>
            <span className="w-5 h-5 rounded-full text-xs text-white bg-violet-500 flex items-top justify-center cursor-pointer">
              13
            </span>
            <span className="text-sm text-black text-xs cursor-pointer">
              14
            </span>
            <span className="text-sm text-black text-xs cursor-pointer">
              15
            </span>
            <span className="text-sm text-black text-xs cursor-pointer">
              17
            </span>
            <span className="text-sm text-black text-xs cursor-pointer">
              16
            </span>
          </div>
        </div>

        {/* Meeting with client*/}
        <div className="flex flex-row border-b py-5">
          <div className="w-14 h-12 bg-gray-300 rounded-full flex justify-center items-center overflow-hidden">
            <img src={laptop} alt="Laptop" className="w-6 h-6 object-cover" />
          </div>

          <div className="flex flex-col w-full pl-4">
            <div className="text-gray-700 text-sm font-medium">
              Meeting with Client
            </div>
            <div className="flex flex-row justify-between text-heading4-medium w-full">
              <div className="flex flex-row mt-2 text-gray-400 text-sm items-center cursor-pointer">
                <VideoCameraOutlined className="pr-2" />
                Google Meet
              </div>
              <div className="flex flex-row mt-2 text-gray-400 text-sm items-center">
                <ClockCircleOutlined className="px-2 ml-auto" />
                12 pm
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Report */}
        <div className="flex flex-row border-b py-5">
          <div className="w-14 h-12 bg-gray-300 rounded-full flex justify-center items-center overflow-hidden">
            <img src={books} alt="Laptop" className="w-6 h-6 object-cover" />
          </div>

          <div className="flex flex-col w-full pl-4">
            <div className="text-gray-700 text-sm font-medium">
              Weekly Report
            </div>
            <div className="flex flex-row justify-between text-heading4-medium w-full">
              <div className="flex flex-row mt-2 text-gray-400 text-sm items-center cursor-pointer">
                <VideoCameraOutlined className="pr-2" />
                Google Meet
              </div>
              <div className="flex flex-row mt-2 text-gray-400 text-sm items-center">
                <ClockCircleOutlined className="px-2 ml-auto" />
                03 pm
              </div>
            </div>
          </div>
        </div>

        {/* Daily Scrum Meeting */}
        <div className="flex flex-row border-b py-5">
          <div className="w-14 h-12 bg-gray-300 rounded-full flex justify-center items-center overflow-hidden">
            <img src={report} alt="Laptop" className="w-6 h-6 object-cover" />
          </div>

          <div className="flex flex-col w-full pl-4">
            <div className="text-gray-700 text-sm font-medium">
              Daily Scrum Meeting
            </div>
            <div className="flex flex-row justify-between text-heading4-medium w-full">
              <div className="flex flex-row mt-2 text-gray-400 text-sm items-center cursor-pointer">
                <VideoCameraOutlined className="pr-2" />
                Google Meet
              </div>
              <div className="flex flex-row mt-2 text-gray-400 text-sm items-center">
                <ClockCircleOutlined className="px-2 ml-auto" />
                05 pm
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rightside;
